import React from 'react';
import PropTypes from 'prop-types';

const IssueCredentialsNotFound = ({ onRetry }) => (
  <div style={{ padding: '20px' }} id="qr-expired">
    <div>
      <div style={{ textAlign: 'center' }}>
        De QR code is verlopen.<br />
        <br />
        <button type="button" className="btn btn-primary" onClick={onRetry}>
          Opnieuw proberen
        </button><br />
        <br />
      </div>
    </div>
  </div>
);

IssueCredentialsNotFound.propTypes = {
  onRetry: PropTypes.func.isRequired,
};

export default IssueCredentialsNotFound;
