import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../../css/docprofile.css';

const Docprofile = () => {
  const name = localStorage.getItem('name');
  const id = localStorage.getItem('id');
  const navigate = useNavigate();
  const [imageurl, setImageurl] = useState('https://clinic-app-backend.vercel.app/');
  const [image1, setImage1] = useState('');
  const [image, setImage] = useState({ preview: '', data: '' });

  // Button hover states
  const [editHover, setEditHover] = useState(false);
  const [apptHover, setApptHover] = useState(false);
  const [revHover, setRevHover] = useState(false);

  const currentImage = () => {
    axios.get(`https://clinic-app-backend.vercel.app/users/singleuser/${id}`).then((response) => {
      setImage1(response.data.message.image);
    });
  };

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setImage(img);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let imageData = new FormData();
    imageData.append('image', image.data);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios.put(`https://clinic-app-backend.vercel.app/image/${id}`, imageData, config).then((response) => {
      currentImage();
      setImage({ preview: '', data: '' });
    });
  };

  useEffect(() => {
    currentImage();
    // eslint-disable-next-line
  }, []);

  return (
    <>
    <div className="docprofile-page">
      <div className="docprofile-cards-row">
        {/* Left: Big Card (Profile + More Info) */}
        <div className="docprofile-left-card">
          <img
            className="docprofile-avatar"
            src={image1 ? imageurl + image1 : 'https://ui-avatars.com/api/?name=Dr+' + encodeURIComponent(name)}
            alt="Doctor profile"
          />
          <div className="docprofile-name">Dr. {name}</div>
          <div className="docprofile-spec">Cardiologist</div>
          <div className="docprofile-info-detail">✉️ doctor@email.com</div>
          <div className="docprofile-info-detail">📱 +91-9876543210</div>
          <hr className="docprofile-divider" />
          <div className="docprofile-section-title">Professional Info</div>
          <div className="docprofile-info-grid">
            <div className="docprofile-info-detail"><b>Qualifications:</b> MBBS, MD</div>
            <div className="docprofile-info-detail"><b>Experience:</b> 12 years</div>
            <div className="docprofile-info-detail"><b>Affiliation:</b> City Heart Hospital</div>
            <div className="docprofile-info-detail"><b>Languages:</b> English, Hindi</div>
            <div className="docprofile-info-detail"><b>Qualifications:</b> MBBS, MD</div>
            <div className="docprofile-info-detail"><b>Experience:</b> 12 years</div>
            <div className="docprofile-info-detail"><b>Affiliation:</b> City Heart Hospital</div>
            <div className="docprofile-info-detail"><b>Languages:</b> English, Hindi</div>
            <div className="docprofile-info-detail"><b>Qualifications:</b> MBBS, MD</div>
            <div className="docprofile-info-detail"><b>Experience:</b> 12 years</div>
            <div className="docprofile-info-detail"><b>Affiliation:</b> City Heart Hospital</div>
            <div className="docprofile-info-detail"><b>Languages:</b> English, Hindi</div>
            
            

          </div>
        </div>
        {/* Right: Two stacked cards */}
        <div className="docprofile-right-cards-col">
          {/* Card 1: Quick Actions + Statistics */}
          <div className="docprofile-right-card">
            <form onSubmit={handleSubmit} className="docprofile-upload-form">
              <input
                type="file"
                name="file"
                accept="image/*"
                onChange={handleFileChange}
                className="docprofile-upload-input"
              />
              {image.preview && <img src={image.preview} alt="Preview" className="docprofile-preview" />}
              <button type="submit" className="docprofile-btn">Upload</button>
            </form>
            <div className="docprofile-action-row">
              <button
                className={`docprofile-btn${editHover ? ' docprofile-btn-hover' : ''}`}
                onMouseEnter={() => setEditHover(true)}
                onMouseLeave={() => setEditHover(false)}
                onClick={() => navigate('/doctorprofile/edit')}
              >
                ✏️ Edit
              </button>
              <button
                className={`docprofile-btn${apptHover ? ' docprofile-btn-hover' : ''}`}
                onMouseEnter={() => setApptHover(true)}
                onMouseLeave={() => setApptHover(false)}
                onClick={() => navigate('/doctor/appointments')}
              >
                📅 Appointments
              </button>
              <button
                className={`docprofile-btn${revHover ? ' docprofile-btn-hover' : ''}`}
                onMouseEnter={() => setRevHover(true)}
                onMouseLeave={() => setRevHover(false)}
                onClick={() => navigate('/doctor/reviews')}
              >
                ⭐ Reviews
              </button>
            </div>
            <div className="docprofile-section-title">Statistics</div>
            <div className="docprofile-stat-row">
              <div className="docprofile-stat-box">
                <div className="docprofile-stat-number">1,250+</div>
                <div className="docprofile-stat-label">Patients</div>
              </div>
              <div className="docprofile-stat-box">
                <div className="docprofile-stat-number">4.8</div>
                <div className="docprofile-stat-label">Rating</div>
              </div>
              <div className="docprofile-stat-box">
                <div className="docprofile-stat-number">320</div>
                <div className="docprofile-stat-label">Reviews</div>
              </div>
            </div>
          </div>{/* Card 2: About (shorter version) */}
    <div className="docprofile-right-card">
    <div className="docprofile-section-title">About</div>
    <div className="docprofile-about-text">
      Dr. {name} is a dedicated cardiologist with 12+ years of experience.
    </div>
  </div>
    </div>
        </div>
        
      </div>
      
    </>
  );
};

export default Docprofile;