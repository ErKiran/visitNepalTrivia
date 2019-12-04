import React, { Component } from 'react';
import CategoryItem from './CategoryItem';

class Categories extends Component {
    render() {
        return (
            <div>
                <section className="features1 cid-qZjDwSbT7N" id="features1-1o">
                    <div className="container">
                        <h2 className="mbr-section-title pb-2 mbr-bold mbr-fonts-style align-left display-2">Trivia Categories</h2>
                        <h3 className="mbr-section-sub-title pb-4 mbr-normal mbr-fonts-style align-left display-4">Explore Knowledge On</h3>
                        <div className="row row-content justify-content-center">
                            <CategoryItem
                                image="assets/images/Adventure.jpg"
                                title="Adventure"
                            />
                            <CategoryItem
                                image="assets/images/tiger.jpg"
                                title="Wildlife"
                            />
                            <CategoryItem
                                image="assets/images/temple.jpeg"
                                title="Religious"
                            />
                            <CategoryItem
                                image="assets/images/dance.jpg"
                                title="Culture"
                            />
                        </div>
                    </div>
                </section>
            </div>

        );
    }
}

export default Categories;