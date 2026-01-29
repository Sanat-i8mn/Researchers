import { Project } from "../../models/project.model.js";
import { User } from "../../models/user.model.js";
import { sendEmail } from "../../utils/email.js";
import getDataUri from "../../utils/dataUri.js";
import { cloudinary } from "../../utils/cloudinary.js";

// Post project from landing page (no auth required - creates user if needed)
export const postProjectFromLanding = async (req, res) => {
  try {
    const {
      // Step 1: Privacy
      privacy,
      // Step 2: Category
      category,
      // Step 3: Category-specific details
      selectedType,
      selectedActivity,
      selectedDeliverable,
      writingLength,
      writingLengthUnit,
      // Step 4: Expertise & Industry
      expertiseTags,
      industries,
      // Step 5: Title
      title,
      // Step 6: User signup
      fullname,
      email,
      phoneNumber,
      countryCode,
      // Step 7: Description
      description,
      // Step 8: Budget
      feeType,
      budget,
      // Step 9: Timeline
      hiringTimeline,
      hiringFactors,
      // Step 10: Billing
      billingType,
      addressLine1,
      addressLine2,
      city,
      state,
      zipCode,
      country,
      companyName,
      companyRegistration,
      vatNumber,
      vatDetails,
      // Expert invitation
      expertInvitation,
    } = req.body;

    // Validate required fields
    if (!title || !email || !fullname || !description || !category) {
      return res.status(400).json({
        message: "Missing required fields",
        success: false,
      });
    }

    // Check if user exists, create if not
    let user = await User.findOne({ email });
    
    if (!user) {
      // Create new client user
      user = await User.create({
        fullname,
        email,
        phoneNumber: `${countryCode}${phoneNumber}`,
        role: "client",
        password: Math.random().toString(36).slice(-8), // Temporary password
      });

      // Send welcome email with password reset link
      await sendEmail({
        to: email,
        subject: "Welcome to ResearchHub - Set Your Password",
        html: `
          <h2>Welcome to ResearchHub!</h2>
          <p>Hi ${fullname},</p>
          <p>Your project has been posted successfully. Please set your password to access your account.</p>
          <p><a href="${process.env.FRONTEND_URL}/reset-password?email=${email}">Set Password</a></p>
        `,
      });
    }

    // Handle PDF upload if exists
    let uploadedFiles = [];
    if (req.files && req.files.length > 0) {
      try {
        for (const file of req.files) {
          const fileUri = getDataUri(file);
          const cloudResponse = await cloudinary.uploader.upload(fileUri.content, {
            resource_type: "auto",
          });
          uploadedFiles.push({
            filename: file.originalname,
            url: cloudResponse.secure_url,
          });
        }
      } catch (uploadError) {
        console.log("File upload skipped (Cloudinary not configured):", uploadError.message);
      }
    }

    // Build skills array from expertise and category-specific details
    const skills = [
      ...(Array.isArray(expertiseTags) ? expertiseTags : JSON.parse(expertiseTags || '[]')),
      ...(selectedType ? [selectedType] : []),
      ...(selectedActivity ? [selectedActivity] : []),
    ];

    // Parse deliverables
    const deliverablesArray = selectedDeliverable ? [selectedDeliverable] : ['As specified'];

    // Create project
    const project = await Project.create({
      clientId: user._id,
      title,
      introduction: description.substring(0, 200),
      detailedRequirements: description,
      skills,
      deliverables: deliverablesArray.join(", ") || "As specified",
      deadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days default
      budgetMin: budget || 100,
      budgetMax: budget || 500,
      category,
      files: uploadedFiles,
      metadata: {
        privacy,
        selectedType,
        selectedActivity,
        selectedDeliverable,
        writingLength,
        writingLengthUnit,
        industries,
        feeType,
        hiringTimeline,
        hiringFactors,
        billingType,
        billingAddress: {
          addressLine1,
          addressLine2,
          city,
          state,
          zipCode,
          country,
          companyName,
          companyRegistration,
          vatNumber,
          vatDetails,
        },
        expertInvitation,
      },
    });

    // Send notification to admin
    await sendEmail({
      to: process.env.ADMIN_EMAIL,
      subject: "New Project Posted - ResearchHub",
      html: `
        <h2>New Project Posted</h2>
        <p><strong>Title:</strong> ${title}</p>
        <p><strong>Client:</strong> ${fullname} (${email})</p>
        <p><strong>Category:</strong> ${category}</p>
        <p><strong>Budget:</strong> $${budget}</p>
        <p><strong>Expert Invitation:</strong> ${expertInvitation || "Self-invite"}</p>
        <p><a href="${process.env.FRONTEND_URL}/admin/projects/${project._id}">View Project</a></p>
      `,
    });

    // Send confirmation to client
    await sendEmail({
      to: email,
      subject: "Project Posted Successfully - ResearchHub",
      html: `
        <h2>Your Project is Live!</h2>
        <p>Hi ${fullname},</p>
        <p>Your project "<strong>${title}</strong>" has been posted successfully.</p>
        <p>Our team will review it and ${expertInvitation === "team" ? "invite suitable experts within 24 hours" : "you can start inviting experts now"}.</p>
        <p><a href="${process.env.FRONTEND_URL}/projects/${project._id}">View Your Project</a></p>
      `,
    });

    return res.status(201).json({
      message: "Project posted successfully",
      project: {
        id: project._id,
        title: project.title,
      },
      user: {
        id: user._id,
        email: user.email,
        isNewUser: !user.password || user.password.length < 10,
      },
      success: true,
    });
  } catch (error) {
    console.error("Post project from landing error:", error);
    return res.status(500).json({
      message: "Failed to post project",
      error: error.message,
      success: false,
    });
  }
};
