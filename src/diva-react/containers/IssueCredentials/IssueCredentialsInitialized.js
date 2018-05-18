import React from 'react';
import PropTypes from 'prop-types';
import QRCode from 'qrcode.react';

const IssueCredentialsInitialized = ({ credentialType, qrContent }) => (
  <div style={{ padding: '20px' }}>
    <div>
      <div style={{ textAlign: 'center', display: 'none' }}>
        Credential(s) type: {credentialType}<br />
        <br />
      </div>
    </div>
    <div>
      <div style={{ textAlign: 'center' }}>
        <QRCode value={JSON.stringify(qrContent)} size={256} /><br />
        <span style={{ display: 'none' }} id="qr-content">{JSON.stringify(qrContent)}</span>
        <br />
      </div>
    </div>
    <div>
      <div style={{ textAlign: 'center' }}>
        Scan de QR-code met de IRMA app om de credentials te ontvangen.
        <br />
      </div>
    </div>
  </div>
);

IssueCredentialsInitialized.propTypes = {
  credentialType: PropTypes.string.isRequired,
  qrContent: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default IssueCredentialsInitialized;
