import { useState, useEffect } from 'react';
import { User, GraduationCap, Briefcase, Plus, X, Save } from 'lucide-react';
import toast from 'react-hot-toast';

interface ProfileCompletionProps {
  onComplete: (profileData: any) => void;
  userInfo?: any;
}

export default function ProfileCompletion({ onComplete, userInfo }: ProfileCompletionProps) {
  const [profileData, setProfileData] = useState({
    firstName: userInfo?.fullname?.split(' ')[0] || '',
    lastName: userInfo?.fullname?.split(' ').slice(1).join(' ') || '',
    email: userInfo?.email || '',
    phoneNumber: userInfo?.phoneNumber || '',
    title: '',
    bio: '',
    skills: [] as string[],
    expertise: [] as string[],
    researchAreas: [] as string[],
    degrees: [{ degree: '', institution: '', year: '', field: '' }],
    experience: [{ position: '', company: '', duration: '', description: '' }],
    hourlyRate: '',
    availability: 'full-time' as 'full-time' | 'part-time' | 'contract'
  });

  const [currentSkill, setCurrentSkill] = useState('');
  const [currentExpertise, setCurrentExpertise] = useState('');
  const [currentResearchArea, setCurrentResearchArea] = useState('');

  const skillOptions = [
    'Data Analysis', 'Statistical Modeling', 'Machine Learning', 'Deep Learning',
    'Research Methodology', 'Academic Writing', 'Literature Review', 'Survey Design',
    'Experimental Design', 'Qualitative Research', 'Quantitative Research', 'Meta-Analysis'
  ];

  const expertiseOptions = [
    'AI & Machine Learning', 'Data Science', 'Clinical Research', 'Biotechnology',
    'Psychology', 'Economics', 'Finance', 'Chemistry', 'Physics', 'Biology',
    'Mathematics', 'Computer Science', 'Engineering', 'Medicine', 'Social Sciences'
  ];

  const researchAreaOptions = [
    'Artificial Intelligence', 'Healthcare', 'Environmental Science', 'Education',
    'Business Strategy', 'Market Research', 'Product Development', 'Policy Analysis',
    'Social Impact', 'Technology Innovation', 'Sustainability', 'Digital Transformation'
  ];

  const addSkill = () => {
    if (currentSkill && !profileData.skills.includes(currentSkill)) {
      setProfileData({ ...profileData, skills: [...profileData.skills, currentSkill] });
      setCurrentSkill('');
    }
  };

  const removeSkill = (skill: string) => {
    setProfileData({ ...profileData, skills: profileData.skills.filter(s => s !== skill) });
  };

  const addExpertise = () => {
    if (currentExpertise && !profileData.expertise.includes(currentExpertise)) {
      setProfileData({ ...profileData, expertise: [...profileData.expertise, currentExpertise] });
      setCurrentExpertise('');
    }
  };

  const removeExpertise = (expertise: string) => {
    setProfileData({ ...profileData, expertise: profileData.expertise.filter(e => e !== expertise) });
  };

  const addResearchArea = () => {
    if (currentResearchArea && !profileData.researchAreas.includes(currentResearchArea)) {
      setProfileData({ ...profileData, researchAreas: [...profileData.researchAreas, currentResearchArea] });
      setCurrentResearchArea('');
    }
  };

  const removeResearchArea = (area: string) => {
    setProfileData({ ...profileData, researchAreas: profileData.researchAreas.filter(a => a !== area) });
  };

  const addDegree = () => {
    setProfileData({
      ...profileData,
      degrees: [...profileData.degrees, { degree: '', institution: '', year: '', field: '' }]
    });
  };

  const removeDegree = (index: number) => {
    setProfileData({
      ...profileData,
      degrees: profileData.degrees.filter((_, i) => i !== index)
    });
  };

  const updateDegree = (index: number, field: string, value: string) => {
    const updated = profileData.degrees.map((deg, i) => 
      i === index ? { ...deg, [field]: value } : deg
    );
    setProfileData({ ...profileData, degrees: updated });
  };

  const addExperience = () => {
    setProfileData({
      ...profileData,
      experience: [...profileData.experience, { position: '', company: '', duration: '', description: '' }]
    });
  };

  const removeExperience = (index: number) => {
    setProfileData({
      ...profileData,
      experience: profileData.experience.filter((_, i) => i !== index)
    });
  };

  const updateExperience = (index: number, field: string, value: string) => {
    const updated = profileData.experience.map((exp, i) => 
      i === index ? { ...exp, [field]: value } : exp
    );
    setProfileData({ ...profileData, experience: updated });
  };

  const handleComplete = async () => {
    try {
      await onComplete(profileData);
      toast.success('Profile completed successfully!');
    } catch (error) {
      toast.error('Failed to save profile. Please try again.');
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#f0f4ff] via-[#dbe7ff] to-[#c0d4ff]  py-20">
      {/* Soft glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_40%)]" />
      
      <div className="relative max-w-6xl mx-auto text-sm">
        <div className="text-center mb-8">
          <User className="mx-auto mb-2 text-[#2D6CDF]" size={38} />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Complete Your Profile</h1>
          <p className="text-gray-600">Help clients understand your expertise by completing your researcher profile</p>
        </div>

        <div className="bg-white rounded-2xl p-10 space-y-8 shadow-[0_25px_80px_rgba(15,42,68,0.35)] border border-white/40">
          {/* Basic Information */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Basic Information</h2>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">First Name</label>
                <input
                  type="text"
                  value={profileData.firstName}
                  onChange={(e) => setProfileData({ ...profileData, firstName: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2D6CDF]"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Last Name</label>
                <input
                  type="text"
                  value={profileData.lastName}
                  onChange={(e) => setProfileData({ ...profileData, lastName: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2D6CDF]"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-bold text-gray-900 mb-2">Professional Title</label>
              <input
                type="text"
                value={profileData.title}
                onChange={(e) => setProfileData({ ...profileData, title: e.target.value })}
                placeholder="e.g., PhD in Computer Science, Senior Data Scientist"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2D6CDF]"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">Professional Bio</label>
              <textarea
                value={profileData.bio}
                onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                placeholder="Brief description of your research background and expertise..."
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2D6CDF]"
              />
            </div>
          </div>

          {/* Skills & Expertise */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Skills & Expertise</h2>
            
            <div className="mb-6">
              <label className="block text-sm font-bold text-gray-900 mb-2">Technical Skills</label>
              <div className="flex gap-2 mb-3">
                <select
                  value={currentSkill}
                  onChange={(e) => setCurrentSkill(e.target.value)}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2D6CDF]"
                >
                  <option value="">Select skills</option>
                  {skillOptions.map(skill => (
                    <option key={skill} value={skill}>{skill}</option>
                  ))}
                </select>
                <button
                  type="button"
                  onClick={addSkill}
                  className="px-4 py-3 bg-[#2D6CDF] text-white rounded-xl hover:bg-blue-700 transition-colors"
                >
                  <Plus size={20} />
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {profileData.skills.map(skill => (
                  <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                    {skill}
                    <button type="button" onClick={() => removeSkill(skill)}>
                      <X size={14} />
                    </button>
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-bold text-gray-900 mb-2">Expertise Areas</label>
              <div className="flex gap-2 mb-3">
                <select
                  value={currentExpertise}
                  onChange={(e) => setCurrentExpertise(e.target.value)}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2D6CDF]"
                >
                  <option value="">Select expertise areas</option>
                  {expertiseOptions.map(expertise => (
                    <option key={expertise} value={expertise}>{expertise}</option>
                  ))}
                </select>
                <button
                  type="button"
                  onClick={addExpertise}
                  className="px-4 py-3 bg-[#2D6CDF] text-white rounded-xl hover:bg-blue-700 transition-colors"
                >
                  <Plus size={20} />
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {profileData.expertise.map(expertise => (
                  <span key={expertise} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                    {expertise}
                    <button type="button" onClick={() => removeExpertise(expertise)}>
                      <X size={14} />
                    </button>
                  </span>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">Research Areas</label>
              <div className="flex gap-2 mb-3">
                <select
                  value={currentResearchArea}
                  onChange={(e) => setCurrentResearchArea(e.target.value)}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2D6CDF]"
                >
                  <option value="">Select research areas</option>
                  {researchAreaOptions.map(area => (
                    <option key={area} value={area}>{area}</option>
                  ))}
                </select>
                <button
                  type="button"
                  onClick={addResearchArea}
                  className="px-4 py-3 bg-[#2D6CDF] text-white rounded-xl hover:bg-blue-700 transition-colors"
                >
                  <Plus size={20} />
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {profileData.researchAreas.map(area => (
                  <span key={area} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                    {area}
                    <button type="button" onClick={() => removeResearchArea(area)}>
                      <X size={14} />
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Academic Degrees */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900">Academic Degrees</h2>
              <button
                type="button"
                onClick={addDegree}
                className="text-[#2D6CDF] hover:text-blue-700 flex items-center gap-1 text-sm"
              >
                <Plus size={16} /> Add Degree
              </button>
            </div>
            {profileData.degrees.map((degree, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-4 mb-4">
                <div className="flex justify-between items-start mb-3">
                  <GraduationCap className="text-[#2D6CDF]" size={20} />
                  {profileData.degrees.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeDegree(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X size={16} />
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <select
                    value={degree.degree}
                    onChange={(e) => updateDegree(index, 'degree', e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D6CDF]"
                  >
                    <option value="">Select Degree</option>
                    <option value="PhD">PhD</option>
                    <option value="Masters">Masters</option>
                    <option value="Bachelors">Bachelors</option>
                  </select>
                  <input
                    type="text"
                    value={degree.institution}
                    onChange={(e) => updateDegree(index, 'institution', e.target.value)}
                    placeholder="Institution"
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D6CDF]"
                  />
                  <input
                    type="text"
                    value={degree.field}
                    onChange={(e) => updateDegree(index, 'field', e.target.value)}
                    placeholder="Field of Study"
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D6CDF]"
                  />
                  <input
                    type="text"
                    value={degree.year}
                    onChange={(e) => updateDegree(index, 'year', e.target.value)}
                    placeholder="Year"
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D6CDF]"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Professional Experience */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900">Professional Experience</h2>
              <button
                type="button"
                onClick={addExperience}
                className="text-[#2D6CDF] hover:text-blue-700 flex items-center gap-1 text-sm"
              >
                <Plus size={16} /> Add Experience
              </button>
            </div>
            {profileData.experience.map((exp, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-4 mb-4">
                <div className="flex justify-between items-start mb-3">
                  <Briefcase className="text-[#2D6CDF]" size={20} />
                  {profileData.experience.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeExperience(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X size={16} />
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <input
                    type="text"
                    value={exp.position}
                    onChange={(e) => updateExperience(index, 'position', e.target.value)}
                    placeholder="Position / Role"
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D6CDF]"
                  />
                  <input
                    type="text"
                    value={exp.company}
                    onChange={(e) => updateExperience(index, 'company', e.target.value)}
                    placeholder="Company / Organization"
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D6CDF]"
                  />
                </div>
                <input
                  type="text"
                  value={exp.duration}
                  onChange={(e) => updateExperience(index, 'duration', e.target.value)}
                  placeholder="Duration (e.g., 2020–2023)"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D6CDF] mb-3"
                />
                <textarea
                  value={exp.description}
                  onChange={(e) => updateExperience(index, 'description', e.target.value)}
                  placeholder="Brief description of responsibilities and achievements"
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D6CDF]"
                />
              </div>
            ))}
          </div>

          {/* Rate & Availability */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Rate & Availability</h2>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Hourly Rate (USD)</label>
                <input
                  type="number"
                  value={profileData.hourlyRate}
                  onChange={(e) => setProfileData({ ...profileData, hourlyRate: e.target.value })}
                  placeholder="50"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2D6CDF]"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Availability</label>
                <select
                  value={profileData.availability}
                  onChange={(e) => setProfileData({ ...profileData, availability: e.target.value as any })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2D6CDF]"
                >
                  <option value="full-time">Full-time</option>
                  <option value="part-time">Part-time</option>
                  <option value="contract">On-demand</option>
                </select>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Email Address</label>
                <input
                  type="email"
                  value={profileData.email}
                  onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2D6CDF]"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={profileData.phoneNumber}
                  onChange={(e) => setProfileData({ ...profileData, phoneNumber: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2D6CDF]"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-6 border-t">
            <button
              onClick={handleComplete}
              className="w-full px-6 py-4 bg-[#2D6CDF] text-white rounded-xl font-semibold hover:bg-blue-700 flex items-center justify-center gap-2 text-lg"
            >
              Complete Profile <Save size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}