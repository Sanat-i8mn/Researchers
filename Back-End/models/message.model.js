import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false, // Optional for group messages
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
    messageType: {
      type: String,
      enum: ["text", "file", "image"],
      default: "text",
    },
    fileUrl: {
      type: String,
      required: false,
    },
    fileName: {
      type: String,
      required: false,
    },
    isRead: {
      type: Boolean,
      default: false,
    },
    readAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

// Index for better query performance
messageSchema.index({ projectId: 1, createdAt: -1 });
messageSchema.index({ senderId: 1, receiverId: 1 });

export const Message = mongoose.model("Message", messageSchema);