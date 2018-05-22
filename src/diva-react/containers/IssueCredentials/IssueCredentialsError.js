import React from 'react';
import PropTypes from 'prop-types';
import IconAlertError from 'material-ui/svg-icons/alert/error';

const IssueCredentialsError = ({ onRetry }) => (
  <div id="issue-error">
    <div>
      <div style={{ textAlign: 'center' }}>
        <IconAlertError style={{ width: '100px', height: '100px', color: '#890825' }} />
      </div>
    </div>
    <div>
      <div style={{ textAlign: 'center' }}>
        Er is iets misgegaan!<br />
        <br />
        <button type="button" className="btn btn-primary" onClick={onRetry}>
          Opnieuw proberen
        </button><br />
        <br />
      </div>
    </div>
  </div>
);

IssueCredentialsError.propTypes = {
  onRetry: PropTypes.func.isRequired,
};

export default IssueCredentialsError;
