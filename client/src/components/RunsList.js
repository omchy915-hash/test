import React from 'react';
import './RunsList.css';

function RunsList({ runs, onDelete }) {
  if (runs.length === 0) {
    return (
      <div className="empty-state">
        <p>No runs logged yet. Start tracking your running today!</p>
      </div>
    );
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };

  return (
    <div className="runs-list-container">
      <h2>Your Runs</h2>
      <div className="runs-grid">
        {runs.map(run => (
          <div key={run._id} className="run-card">
            <div className="run-header">
              <h3>{formatDate(run.date)}</h3>
              <button
                className="btn-delete"
                onClick={() => {
                  if (window.confirm('Delete this run?')) {
                    onDelete(run._id);
                  }
                }}
              >
                ×
              </button>
            </div>
            <div className="run-stats">
              <div className="stat">
                <span className="label">Distance</span>
                <span className="value">{run.distance.toFixed(2)} km</span>
              </div>
              <div className="stat">
                <span className="label">Duration</span>
                <span className="value">{formatTime(run.duration)}</span>
              </div>
              <div className="stat">
                <span className="label">Pace</span>
                <span className="value">{run.pace.toFixed(2)} min/km</span>
              </div>
              {run.calories > 0 && (
                <div className="stat">
                  <span className="label">Calories</span>
                  <span className="value">{run.calories} kcal</span>
                </div>
              )}
            </div>
            {run.location && (
              <div className="run-location">
                📍 {run.location}
              </div>
            )}
            {run.notes && (
              <div className="run-notes">
                {run.notes}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RunsList;
