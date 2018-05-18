import React from 'react';
import { withRouter } from 'react-router-dom';

import IssueCredentials from '../../diva-react/containers/IssueCredentials/IssueCredentials';

const IssueCredentialsPage = () => (
  <div className="container">
    <div className="row">
      <div className="col-xs-12 col-lg-8 col-centered">
        <IssueCredentials
          viewId="issue-brp1"
          credentialType="BRP1"
        />
      </div>
    </div>
  </div>

);

export default withRouter(IssueCredentialsPage);
