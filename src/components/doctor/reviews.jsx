import React from 'react';
import '../../css/reviews.css';

const mockReviews = [
  { patient: 'John Doe', rating: 5, date: '2024-06-01', comment: 'Excellent doctor, very attentive and caring.' },
  { patient: 'Jane Smith', rating: 4, date: '2024-05-28', comment: 'Good experience, explained everything clearly.' },
  { patient: 'Sam Wilson', rating: 5, date: '2024-05-25', comment: 'Highly recommend! Very professional.' },
  { patient: 'Emily Clark', rating: 3, date: '2024-05-20', comment: 'Average experience, wait time was long.' },
  { patient: 'Michael Lee', rating: 4, date: '2024-05-18', comment: 'Friendly and knowledgeable.' },
];

const averageRating = (
  mockReviews.reduce((sum, r) => sum + r.rating, 0) / mockReviews.length
).toFixed(1);

const Reviews = () => {
  return (
    <div className="reviews-page">
      <div className="reviews-card">
        <div className="reviews-header">
          <h2 className="reviews-title">Patient Reviews</h2>
          <div className="reviews-summary">
            <span className="reviews-average">⭐ {averageRating}</span>
            <span className="reviews-total">{mockReviews.length} Reviews</span>
          </div>
        </div>
        <div className="reviews-list-section">
          <h3 className="reviews-list-title">Recent Reviews</h3>
          <ul className="reviews-list">
            {mockReviews.map((r, idx) => (
              <li key={idx} className="review-item">
                <div className="review-header">
                  <span className="review-patient">{r.patient}</span>
                  <span className="review-rating">{'⭐'.repeat(r.rating)}</span>
                  <span className="review-date">{r.date}</span>
                </div>
                <div className="review-comment">{r.comment}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Reviews;