import React from 'react';

const TriviaItems = (props) => {
    return (
        <div className="card p-3 col-12 col-md-6 col-lg-4">
            <div className="card-wrapper">
                <div className="card-img">
                    <div className="price-box">
                        <h5 className="price mbr-fonts-style mbr-bold display-4">{props.price}</h5>
                    </div>
                    <img src={props.image} title="" alt="" />
                </div>
                <div className="card-box">
                    <h4 className="card-title mbr-fonts-style pb-1 mbr-bold display-5">{props.title}</h4>
                    <p className="mbr-text mbr-fonts-style mbr-normal display-4">
                        {props.subTitle}</p>

                    <div className="ico-line-wrap">
                        <div className="ico-line">
                            <div className="px-1 pb-3 mbr-iconfont mbr-iconfont-social mbri-star" style={{ color: 'rgb(30,198,182)' }} media-simple="true"></div>
                            <div className="px-1 pb-3 mbr-iconfont mbr-iconfont-social mbri-star" style={{ color: 'rgb(30,198,182)' }} media-simple="true"></div>
                            <div className="px-1 pb-3 mbr-iconfont mbr-iconfont-social mbri-star" style={{ color: 'rgb(30,198,182)' }} media-simple="true"></div>
                            <div className="px-1 pb-3 mbr-iconfont mbr-iconfont-social mbri-star" style={{ color: 'rgb(158,158,158)' }} media-simple="true"></div>
                            <div className="px-1 pb-3 pr-2 mbr-iconfont mbr-iconfont-social mbri-star" style={{ color: 'rgb(158,158,158)' }} media-simple="true"></div>
                            <h3 className="rev mbr-fonts-style mbr-bold display-4">{props.stars}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TriviaItems;