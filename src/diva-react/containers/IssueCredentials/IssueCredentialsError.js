import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import IconAlertError from 'material-ui/svg-icons/alert/error';

const IssueCredentialsError = ({ onRetry }) => (
  <div id="issue-error">
    <div>
      <div style={{ textAlign: 'center' }}>
        <IconAlertError style={{ width: '100px', height: '100px', color: 'orangered' }} />
      </div>
    </div>
    <div>
      <div style={{ textAlign: 'center' }}>
        Er is iets misgegaan!<br />
        <br />
        <RaisedButton
          label="Retry"
          primary
          onClick={onRetry}
        />
      </div>
    </div>
  </div>
);

IssueCredentialsError.propTypes = {
  onRetry: PropTypes.func.isRequired,
};

export default IssueCredentialsError;
