import React from 'react';
import '../../css/revenue.css';

const mockTransactions = [
  { date: '2024-06-01', patient: 'John Doe', amount: 1200, status: 'Paid' },
  { date: '2024-05-28', patient: 'Jane Smith', amount: 900, status: 'Paid' },
  { date: '2024-05-25', patient: 'Sam Wilson', amount: 1500, status: 'Pending' },
  { date: '2024-05-20', patient: 'Emily Clark', amount: 1100, status: 'Paid' },
  { date: '2024-05-18', patient: 'Michael Lee', amount: 800, status: 'Refunded' },
];

const Revenue = () => {
  const totalRevenue = mockTransactions
    .filter(t => t.status === 'Paid')
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="revenue-page">
      <div className="revenue-card">
        <div className="revenue-header">
          <h2 className="revenue-title">Revenue Overview</h2>
          <div className="revenue-total">
            <span>Total Revenue:</span>
            <span className="revenue-amount">₹{totalRevenue.toLocaleString()}</span>
          </div>
        </div>
        <div className="revenue-table-section">
          <h3 className="revenue-table-title">Recent Transactions</h3>
          <table className="revenue-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Patient</th>
                <th>Amount (₹)</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {mockTransactions.map((t, idx) => (
                <tr key={idx} className={t.status === 'Pending' ? 'revenue-row-pending' : t.status === 'Refunded' ? 'revenue-row-refunded' : ''}>
                  <td>{t.date}</td>
                  <td>{t.patient}</td>
                  <td>{t.amount.toLocaleString()}</td>
                  <td className={`revenue-status revenue-status-${t.status.toLowerCase()}`}>{t.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Revenue;