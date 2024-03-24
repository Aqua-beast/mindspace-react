import React from "react";
import { FaArrowRight } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';
import story2 from '../images/story2.png';
import story3 from '../images/story3.png';

const Stories = () => {
    return (
        <>
            <div className="stories-page">
                <h2>MINDSPACE STORIES</h2>
                <div className="stories">
                    <div className="arrow">
                        <FaArrowLeft size={'2.3rem'} />
                    </div>
                    <div className="story-box">
                        <div className="sub-story-box">
                            <p>I overcame my phase of depression within a span of few days. All Thanks to mindspace.</p>
                            <a href='/'>show more</a>
                        </div>
                    </div>

                    <div className="story-box" style={{ backgroundImage: `url(${story2})` }}>
                        <div className="sub-story-box">
                            <p>Recovery from anxiety is possible.</p>
                            <a href='/'>show more</a>
                        </div>
                    </div>

                    <div className="story-box" style={{ backgroundImage: `url(${story3})` }}>
                        <div className="sub-story-box">
                            <p>How to help a person who is having some negative intrusive thoughts</p>
                            <a href='/'>show more</a>
                        </div>
                    </div>
                    <div className="arrow">
                        <FaArrowRight size={'2.2rem'} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Stories