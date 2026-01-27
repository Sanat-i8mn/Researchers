// Test script for post-project endpoint
// Run with: node test-post-project.js

const testProjectPost = async () => {
  const testData = {
    privacy: 'all',
    category: 'writing',
    writingTypes: JSON.stringify(['Technical Writing']),
    writingActivities: JSON.stringify(['Writing']),
    writingDeliverables: JSON.stringify(['Full document']),
    writingLength: '5000',
    writingLengthUnit: 'words',
    expertiseTags: JSON.stringify(['Computer Science', 'Technical Writing']),
    industries: JSON.stringify(['Information Technology']),
    title: 'Need technical writer for API documentation',
    fullname: 'Test User',
    email: 'testuser@example.com',
    phoneNumber: '1234567890',
    countryCode: '+1',
    description: 'Looking for an experienced technical writer to create comprehensive API documentation for our REST API. The documentation should include endpoint descriptions, request/response examples, and authentication guides.',
    feeType: 'fixed',
    budget: '1500',
    hiringTimeline: 'Within a week',
    hiringFactors: JSON.stringify(['None of these apply']),
    billingType: 'individual',
    addressLine1: '123 Main Street',
    addressLine2: 'Apt 4B',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94102',
    country: 'United States',
    expertInvitation: 'self'
  };

  try {
    const response = await fetch('http://localhost:8000/api/v1/project/post-from-landing', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData)
    });

    const result = await response.json();
    
    if (result.success) {
      console.log('✅ Test PASSED!');
      console.log('Project ID:', result.project.id);
      console.log('User ID:', result.user.id);
      console.log('Is New User:', result.user.isNewUser);
    } else {
      console.log('❌ Test FAILED!');
      console.log('Error:', result.message);
    }
  } catch (error) {
    console.log('❌ Test FAILED with error!');
    console.error(error.message);
  }
};

// Run the test
console.log('🧪 Testing post-project endpoint...\n');
testProjectPost();
