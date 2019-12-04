import React from 'react';

const CategoryItem = (prop) => {
    return (
        <div className="card col-12 col-lg-3 col-md-6">
            <div className="card-wrapper">
                <div className="card-img small">
                    <img src={prop.image} title="" alt="" />
                </div>
                <div className="card-box">
                    <h4 className="card-title mbr-fonts-style mbr-white mbr-bold display-5">{prop.title}</h4>
                </div>
            </div>
        </div>
    );
};

export default CategoryItem;