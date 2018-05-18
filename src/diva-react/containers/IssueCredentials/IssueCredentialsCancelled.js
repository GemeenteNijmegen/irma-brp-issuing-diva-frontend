import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

const IssueCredentialsCancelled = ({ onRetry }) => (
  <div style={{ padding: '20px' }} id="issue-cancelled">
    <div>
      <div style={{ textAlign: 'center' }}>
        Je hebt het uitgeven van credentials geannuleerd.<br />
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

IssueCredentialsCancelled.propTypes = {
  onRetry: PropTypes.func.isRequired,
};

export default IssueCredentialsCancelled;
