import React from 'react';
import volunteer from '../images/We Are HIringg.png';

const VolunteerPage = () => {
    return (
        <div className="volunteer-page">

            <img className='join-us' src='https://img.freepik.com/free-vector/flat-design-join-us-message_23-2148954904.jpg' alt='img-join-us' />

            <div className='volunteer-heading'>
                <h1>Volunteer Opportunities</h1>
            </div>

            <div className='volunteer-text'>
                <p>
                    Thank you for your interest in volunteering with MindSpace! We deeply
                    appreciate your willingness to contribute to our mission of promoting
                    mental health and well-being.
                </p>
                <p>
                    As a volunteer, you can make a significant impact by assisting us in
                    various ways, such as:
                </p>
                <ul className='volunteer-list'>
                    <li>Providing support to individuals in need</li>
                    <li>Assisting with community outreach and events</li>
                    <li>Contributing to our social media and marketing efforts</li>
                    <li>Helping with administrative tasks and organization</li>
                </ul>
                <p>
                    No matter your skill set or background, there's a place for you to
                    make a difference at MindSpace.
                </p>
                <p>
                    To learn more about volunteer opportunities and how you can get
                    involved, please contact us at volunteers@mindspace.com.
                </p>
            </div>
            <img className='volunteer-hiring-img' src={volunteer} alt='img-join-us' />
        </div>
    );
};

export default VolunteerPage;

