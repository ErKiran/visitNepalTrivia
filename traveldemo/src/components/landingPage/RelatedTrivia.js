import React, { Component } from 'react';
import TriviaItems from './TriviaItems';

class RelatedTrivia extends Component {
    render() {
        return (
            <div>
                <section className="features6 cid-qZjEM9sTKH" id="features6-21">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-12">
                                <h2 className="mbr-section-title title pb-2 mb-1 mbr-bold mbr-fonts-style align-left display-5">Others Trivia</h2>
                            </div>
                        </div>
                        <div className="row row-content justify-content-center">
                            <TriviaItems
                                image="assets/images/sports.jpg"
                                title="Sports"
                                subTitle="For Sports Savvy"
                                price="Free"
                                stars="4 review"
                            />
                            <TriviaItems
                                image="assets/images/programmer.png"
                                title="Programmers"
                                subTitle="For Programmers in You"
                                price="Free"
                                stars="4 review"
                            />
                            <TriviaItems
                                image="assets/images/iq.png"
                                title="IQ"
                                subTitle="IQ Savvy"
                                price="Free"
                                stars="4 review"
                            />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default RelatedTrivia;