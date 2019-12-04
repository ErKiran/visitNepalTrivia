import React, { Component } from 'react';
import YouTube from 'react-youtube';

class Video extends Component {
    render() {
        return (
            <div>
                <section
                    className="video1 cid-qZjF6ISX7o"
                >
                    <div className="mbr-overlay" style={{ opacity: 0, backgroundColor: 'rgb(0, 0, 0)' }}>
                        <YouTube
                            videoId="2Rm3YZ8D1rY"
                        />
                    </div>
                </section>
            </div>
        );
    }
}

export default Video;