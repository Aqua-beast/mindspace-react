import React from 'react';
import midPageImg from '../images/mid-page.png';

const MidPage = () => {
    return (
        <>
            <div className='mid-page'>
                <div className='mid-page-img'>
                    <img src={midPageImg} alt="/"></img>
                </div>
                <div className='text'>
                    <span>Mindspace</span> is a cutting-edge mental health app designed to help individuals improve their overall well-being and cope with the challenges of everyday life. With the rise of stress, anxiety, and other mental health issues, it is here to provide users with accessible and effective tools to manage their emotions, thoughts, and behaviors. The app offers a variety of features, including mindfulness exercises, mood tracking, guided meditation, and cognitive behavioral therapy (CBT) techniques, all backed by scientific research and proven to promote mental wellness. Whether you're looking to reduce stress, improve your sleep, or boost your mood, it is a valuable resource that can help you achieve your mental health goals.
                </div>
            </div>
        </>
    )
}

export default MidPage