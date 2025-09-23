import React from 'react';
import '../../css/myBookings.css';

const mockBookings = [
  { date: '2024-06-01', doctor: 'Dr. Smith', specialization: 'Cardiology', status: 'Confirmed' },
  { date: '2024-05-28', doctor: 'Dr. Patel', specialization: 'Dermatology', status: 'Completed' },
  { date: '2024-05-25', doctor: 'Dr. Lee', specialization: 'Neurology', status: 'Cancelled' },
  { date: '2024-05-20', doctor: 'Dr. Gupta', specialization: 'Orthopedics', status: 'Confirmed' },
  { date: '2024-05-18', doctor: 'Dr. Kumar', specialization: 'Pediatrics', status: 'Completed' },
];

const MyBookings = () => {
  return (
    <div className="mybookings-page">
      <div className="mybookings-card">
        <div className="mybookings-header">
          <h2 className="mybookings-title">My Bookings</h2>
          <div className="mybookings-summary">
            <span className="mybookings-total">Total: {mockBookings.length} Bookings</span>
          </div>
        </div>
        <div className="mybookings-table-section">
          <h3 className="mybookings-table-title">Recent Bookings</h3>
          <table className="mybookings-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Doctor</th>
                <th>Specialization</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {mockBookings.map((b, idx) => (
                <tr key={idx} className={`mybookings-row-${b.status.toLowerCase()}`}>
                  <td>{b.date}</td>
                  <td>{b.doctor}</td>
                  <td>{b.specialization}</td>
                  <td className={`mybookings-status mybookings-status-${b.status.toLowerCase()}`}>{b.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;