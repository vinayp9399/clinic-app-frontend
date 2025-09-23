import React, { useState } from 'react';
import '../../css/reviewDoctor.css';

const mockDoctors = [
  'Dr. Smith',
  'Dr. Patel',
  'Dr. Lee',
  'Dr. Gupta',
  'Dr. Kumar',
];

const ReviewDoctor = () => {
  const [doctor, setDoctor] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would send the review to the backend
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2500);
    setDoctor('');
    setRating(0);
    setComment('');
  };

  return (
    <div className="reviewdoctor-page">
      <div className="reviewdoctor-card">
        <h2 className="reviewdoctor-title">Review a Doctor</h2>
        <form className="reviewdoctor-form" onSubmit={handleSubmit}>
          <label className="reviewdoctor-label">
            Doctor:
            <select
              className="reviewdoctor-select"
              value={doctor}
              onChange={e => setDoctor(e.target.value)}
              required
            >
              <option value="" disabled>Select Doctor</option>
              {mockDoctors.map((d, idx) => (
                <option key={idx} value={d}>{d}</option>
              ))}
            </select>
          </label>
          <label className="reviewdoctor-label">
            Rating:
            <div className="reviewdoctor-stars">
              {[1,2,3,4,5].map(star => (
                <span
                  key={star}
                  className={star <= rating ? 'star filled' : 'star'}
                  onClick={() => setRating(star)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
                  onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && setRating(star)}
                >
                  ★
                </span>
              ))}
            </div>
          </label>
          <label className="reviewdoctor-label">
            Comment:
            <textarea
              className="reviewdoctor-textarea"
              value={comment}
              onChange={e => setComment(e.target.value)}
              rows={4}
              placeholder="Write your feedback..."
              required
            />
          </label>
          <button className="reviewdoctor-btn" type="submit" disabled={!doctor || !rating || !comment}>
            Submit Review
          </button>
          {submitted && <div className="reviewdoctor-success">Thank you for your review!</div>}
        </form>
      </div>
    </div>
  );
};

export default ReviewDoctor;