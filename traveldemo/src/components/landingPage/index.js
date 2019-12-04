import React, { Component } from 'react';
import LandingPage from './LandingPage';
import ImageSection from './ImageSection';
import Categories from './Categories';
import RelatedTrivia from './RelatedTrivia';
import BeautifulImage from './BeautifulImage';
import Info from './Info';
import Footer from './Footer';

class MainLanding extends Component {
    render() {
        return (
            <div>
                <LandingPage />
                <ImageSection />
                <Categories />
                <RelatedTrivia />
                <BeautifulImage />
                <Info />
                <Footer />
            </div>
        );
    }
}

export default MainLanding;