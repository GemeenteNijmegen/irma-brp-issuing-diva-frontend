import React from 'react';
import PropTypes from 'prop-types';
import IconActionCheckCircle from 'material-ui/svg-icons/action/check-circle';

const IssueCredentialsDone = ({ onRetry }) => (
  <div id="issuing-completed">
    <div>
      <div style={{ textAlign: 'center' }}>
        <IconActionCheckCircle style={{ width: '100px', height: '100px', color: '#157c68' }} />
      </div>
    </div>
    <div>
      <div style={{ textAlign: 'center' }}>
        Credentials succesvol uitgegeven!<br />
        <br />
        <button type="button" className="btn btn-secondary" onClick={onRetry}>
          Opnieuw
        </button><br />
        <br />
      </div>
    </div>
  </div>
);

IssueCredentialsDone.propTypes = {
  onRetry: PropTypes.func.isRequired,
};

export default IssueCredentialsDone;
