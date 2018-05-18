import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import IssueCredentialsPage from '../IssueCredentialsPage/IssueCredentialsPage';

import './App.css';

import { actions } from '../../reducers/session-reducer';

class App extends Component {
  componentDidMount() {
    this.props.getSessionData();
  }

  deauthenticate() {
    this.props.deauthenticate();
  }

  render() {
    const {
      sessionId,
      error,
    } = this.props;
    return (
      <BrowserRouter>
        <div>
          <nav className="navbar fixed-top navbar-expand-sm scrolling-navbar navbar-primary">
            <div className="container">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <a className="navbar-brand" href="https://www.nijmegen.nl/">
                <div className="navbar-brand-container">
                  <img src="https://componenten.nijmegen.nl/img/beeldmerklabelwit.svg" className="logo-labeled" alt="Logo Nijmegen" />
                  <img src="https://componenten.nijmegen.nl/img/beeldmerkwit.svg" className="logo" alt="Logo Nijmegen" />
                </div>
              </a>
              <div className="collapse navbar-collapse" id="navbar-collapse">
                {/* <ul class="navbar-nav mr-auto smooth-scroll">
                  <li class="nav-item">
                    <a href="#section-1" class="nav-link">Menu 1</a>
                  </li>
                  <li class="nav-item">
                    <a href="#section-2" class="nav-link">Menu 2</a>
                  </li>
                  <li class="nav-item">
                    <a href="#section-3" class="nav-link">Menu 3</a>
                  </li>
                  <li class="nav-item">
                    <a href="#section-4" class="nav-link">Menu 4</a>
                  </li>
                </ul> */}
                {/* <form action="https://www.nijmegen.nl" className="form-inline ml-auto">
                  <label htmlFor="oi-query" className="sr-only">Zoeken</label>
                  <input className="form-control" id="oi-query"
                    type="text" placeholder="Zoeken" autoComplete="off" />
                  <button className="btn-search">
                    <i className="mdi mdi-magnify" aria-hidden="true" />
                  </button>
                </form> */}
              </div>
            </div>
          </nav>
          {/* <Navbar fixed="top" expand="md" scrolling className="navbar-primary">
            <Container>
              <NavbarBrand href="/">
                <div className="navbar-brand-container">
                  <img src="https://componenten.nijmegen.nl/img/beeldmerklabelwit.svg" className="logo-labeled" alt="Logo Nijmegen" />
                  <img src="https://componenten.nijmegen.nl/img/beeldmerkwit.svg" className="logo" alt="Logo Nijmegen" />
                </div>
              </NavbarBrand>
            </Container>
          </Navbar> */}

          <main style={{ paddingTop: '100px', paddingBottom: '20px' }}>
            { sessionId && (
              <Route path="/" component={IssueCredentialsPage} />
            )}
            { error && (
              <div className="container">
                <h3> Error: { error.reason } </h3>
                <i> Er is iets misgegaan </i>
                {/* <i> { error.response.data } </i> */}
              </div>
            )}

            { !sessionId && !error && (
              <div className="container"> Loading... </div>
            )}
          </main>

          <footer className="page-footer">
            <div className="footer-content">
              <div className="container">
                <div className="row">
                  <div className="hidden-sm col-lg-6">
                    &nbsp;
                  </div>
                  <div className="col-md-12 col-lg-6">
                    <div className="row">
                      <div className="hidden-md-down col-lg-5">
                        <p className="title">Over deze site</p>
                        <ul className="link-list">
                          <li><a href="https://www.nijmegen.nl/toegankelijkheid/">Toegankelijkheid</a></li>
                          <li><a href="https://www.nijmegen.nl/privacyverklaring/">Privacyverklaring</a></li>
                          <li><a href="https://www.nijmegen.nl/cookies/">Cookies</a></li>
                          <li><a href="https://www.nijmegen.nl/proclaimer/">Proclaimer</a></li>
                          <li><a href="https://www.nijmegen.nl/sitemap/">Sitemap</a></li>
                        </ul>
                      </div>

                      <div className="col-xs-12 col-md-6 col-lg-7">
                        <p className="title">Contactgegevens</p>
                        <ul className="link-list contact-list">
                          <li><i className="mdi mdi-map-marker" aria-hidden="true" /> Stadswinkel, Mariënburg 30</li>
                          <li><i className="mdi mdi-phone" aria-hidden="true" /> <a href="tel:14024">14 024</a></li>
                          <li><i className="mdi mdi-email" aria-hidden="true" /> <a href="mailto:gemeente@nijmegen.nl">gemeente@nijmegen.nl</a>
                          </li>
                          <li><i className="mdi mdi-facebook-box" aria-hidden="true" /> <a href="https://www.facebook.com/gemeentenijmegen">Gemeente Nijmegen</a></li>
                          <li><i className="mdi mdi-twitter-box" aria-hidden="true" /> <a href="https://twitter.com/gem_nijmegen">@nijmegen</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-copyright text-center">
              <div className="container-fluid">
                <img src="https://componenten.nijmegen.nl/img/beeldmerkwit.svg" height="32" width="25" className="logo-labeled" alt="" /> Gemeente Nijmegen
              </div>
            </div>
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  sessionId: PropTypes.string,
  getSessionData: PropTypes.func,
  deauthenticate: PropTypes.func,
  error: PropTypes.shape({
    reason: PropTypes.string,
    response: PropTypes.object,
  }),
};

const mapStateToProps = state => state.session;

const mapDispatchToProps = {
  getSessionData: actions.getSessionData,
  deauthenticate: actions.deauthenticate,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
