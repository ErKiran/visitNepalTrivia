import React, { Component } from 'react';

class LandingPage extends Component {
    render() {
        return (
            <div>
                <section className="menu cid-qZj84acmgI" id="menu1-1e">
                    <nav className="navbar navbar-dropdown align-items-center navbar-fixed-top navbar-toggleable-sm bg-color transparent">
                        <div className="menu-content-top">
                            <div className="menu-logo">
                                <div className="navbar-brand">
                                    <span className="navbar-logo">
                                        <img src="assets/images/logo.png" alt="Trivia Visit Nepal" />
                                    </span>
                                    <span className="navbar-caption-wrap">
                                        Visit Nepal</span>
                                </div>
                            </div>
                            <div className="menu-content-right">
                                <div className="mbr-section-btn"><a className="btn btn-md btn-primary display-4" href="https://visitnepal2020.com"><span className="mbri-arrow-next mbr-iconfont mbr-iconfont-btn"></span>
                                    Official Site</a></div>
                            </div>
                        </div>
                        <div className="menu-bottom">
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav nav-dropdown js-float-line" data-app-modern-menu="true"><li className="nav-item">
                                    <a className="nav-link link mbr-black text-danger display-4" href="index.html">
                                        Home</a>
                                </li>
                                </ul>
                            </div>
                            <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <div className="hamburger">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </button>
                        </div>
                    </nav>
                </section>
            </div>
        );
    }
}

export default LandingPage;