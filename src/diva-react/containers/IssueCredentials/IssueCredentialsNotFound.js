import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

const IssueCredentialsNotFound = ({ onRetry }) => (
  <div style={{ padding: '20px' }} id="qr-expired">
    <div>
      <div style={{ textAlign: 'center' }}>
        De QR code is verlopen.<br />
        <br />
        <RaisedButton
          label="Retry"
          primary
          onClick={onRetry}
        />
        <br />
      </div>
    </div>
  </div>
);

IssueCredentialsNotFound.propTypes = {
  onRetry: PropTypes.func.isRequired,
};

export default IssueCredentialsNotFound;
