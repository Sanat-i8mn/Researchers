import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1';

export const postProjectFromLanding = async (projectData: any) => {
  try {
    const formData = new FormData();
    
    // Append all project data
    Object.keys(projectData).forEach(key => {
      if (key === 'pdfFile' && projectData[key]) {
        formData.append('files', projectData[key]);
      } else if (Array.isArray(projectData[key])) {
        formData.append(key, JSON.stringify(projectData[key]));
      } else if (projectData[key] !== null && projectData[key] !== undefined) {
        formData.append(key, projectData[key]);
      }
    });

    console.log('Posting to:', `${API_URL}/project/post-from-landing`);
    console.log('Project data:', projectData);

    const response = await axios.post(
      `${API_URL}/project/post-from-landing`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    return response.data;
  } catch (error: any) {
    console.error('API Error:', error.response?.data || error.message);
    throw new Error(error.response?.data?.message || error.response?.data?.error || error.message || 'Failed to post project');
  }
};
