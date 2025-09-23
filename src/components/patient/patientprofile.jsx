import React, { useState, useEffect } from 'react';
import '../../css/patientprofile.css';

const mockProfile = {
  age: 29,
  gender: 'Female',
  address: '123 Main St, City',
  bloodGroup: 'A+',
};

const PatientProfile = () => {
  const name = localStorage.getItem('name') || 'Jane Doe';
  const email = localStorage.getItem('email') || 'jane@email.com';
  const phone = localStorage.getItem('phone') || '+91-9876543210';
  const [avatar, setAvatar] = useState('');
  const [image, setImage] = useState({ preview: '', data: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Simulate fetching avatar from backend/localStorage
    setAvatar('');
  }, []);

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setImage(img);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would upload the image to the backend
    setAvatar(image.preview);
    setImage({ preview: '', data: '' });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
  };

  return (
    <div className="patientprofile-page">
      <div className="patientprofile-card">
        <img
          className="patientprofile-avatar"
          src={avatar || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(name)}
          alt="Patient profile"
        />
        <div className="patientprofile-name">{name}</div>
        <div className="patientprofile-info-detail">✉️ {email}</div>
        <div className="patientprofile-info-detail">📱 {phone}</div>
        <hr className="patientprofile-divider" />
        <div className="patientprofile-section-title">Personal Info</div>
        <div className="patientprofile-info-grid">
          <div className="patientprofile-info-detail"><b>Age:</b> {mockProfile.age}</div>
          <div className="patientprofile-info-detail"><b>Gender:</b> {mockProfile.gender}</div>
          <div className="patientprofile-info-detail"><b>Address:</b> {mockProfile.address}</div>
          <div className="patientprofile-info-detail"><b>Blood Group:</b> {mockProfile.bloodGroup}</div>
        </div>
        <form className="patientprofile-upload-form" onSubmit={handleSubmit}>
          <input
            type="file"
            name="file"
            accept="image/*"
            onChange={handleFileChange}
            className="patientprofile-upload-input"
          />
          {image.preview && <img src={image.preview} alt="Preview" className="patientprofile-preview" />}
          <button type="submit" className="patientprofile-btn">Upload</button>
          {submitted && <div className="patientprofile-success">Profile picture updated!</div>}
        </form>
        <div className="patientprofile-action-row">
          <button className="patientprofile-btn">Edit Profile</button>
          <button className="patientprofile-btn">My Bookings</button>
          <button className="patientprofile-btn">Reviews</button>
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;