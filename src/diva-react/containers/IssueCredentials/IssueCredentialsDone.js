import React from 'react';
import PropTypes from 'prop-types';
import IconActionCheckCircle from 'material-ui/svg-icons/action/check-circle';
import RaisedButton from 'material-ui/RaisedButton';

const IssueCredentialsDone = ({ onRetry }) => (
  <div id="issuing-completed">
    <div>
      <div style={{ textAlign: 'center' }}>
        <IconActionCheckCircle style={{ width: '100px', height: '100px', color: 'limegreen' }} />
      </div>
    </div>
    <div>
      <div style={{ textAlign: 'center' }}>
        Credentials succesvol uitgegeven!<br />
        <br />
        <RaisedButton
          label="Opnieuw Uitgeven"
          primary
          onClick={onRetry}
        /><br />
        <br />
      </div>
    </div>
  </div>
);

IssueCredentialsDone.propTypes = {
  onRetry: PropTypes.func.isRequired,
};

export default IssueCredentialsDone;
