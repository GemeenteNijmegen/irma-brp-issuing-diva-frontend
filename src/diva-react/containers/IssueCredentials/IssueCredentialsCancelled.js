import React from 'react';
import PropTypes from 'prop-types';

const IssueCredentialsCancelled = ({ onRetry }) => (
  <div style={{ padding: '20px' }} id="issue-cancelled">
    <div>
      <div style={{ textAlign: 'center' }}>
        Je hebt het uitgeven van credentials geannuleerd.<br />
        <br />
        <button type="button" className="btn btn-primary" onClick={onRetry}>
          Opnieuw proberen
        </button><br />
        <br />
      </div>
    </div>
  </div>
);

IssueCredentialsCancelled.propTypes = {
  onRetry: PropTypes.func.isRequired,
};

export default IssueCredentialsCancelled;
