import axios from 'axios';

function startIrmaSession(irmaSessionType, options) {
  // TODO: send options and parse in backend based on type?
  return axios
    .post(`${window.env.baseUrl}/api/start-irma-session`, {
      type: irmaSessionType,
      content: options.attributesRequired,
      credentialType: options.credentialType,
    }, {
      withCredentials: true,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.data);
}

function poll(irmaSessionType, irmaSessionId) {
  // TODO: a more elegant solution that uses one endpoint
  switch (irmaSessionType) {
    case 'ISSUE':
      return axios
        .get(`${window.env.baseUrl}/api/issue-status?irmaSessionId=${irmaSessionId}`, {
          withCredentials: true,
        })
        .then(response => response.data);

    case 'DISCLOSE':
      return axios
        .get(`${window.env.baseUrl}/api/disclosure-status?irmaSessionId=${irmaSessionId}`, {
          withCredentials: true,
        })
        .then(response => response.data);

    default:
      return Promise.reject('Unkown irmaSessionType');
  }
}

const service = {
  startIrmaSession,
  poll,
};

export default service;
