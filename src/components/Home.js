import React from "react";
import homeImg from '../images/home-astronaut.png';
import SearchBox from './SearchBox';

const Home = () => {
    return (
        <>
            <div className='home bg'>
                <div className='home-container'>
                    <div className="home-text">
                        <h1>
                            <span className="purple">L</span><span className="white">ETS</span>
                        </h1>
                        <h1>
                            <span className="purple">H</span><span className="white">ELP</span>
                        </h1>
                        <h1>
                            <span className="purple">Y</span><span>OU</span>
                        </h1>
                        <h1>
                            <span className="purple">L
                            </span><span>AUNCH</span>
                        </h1>

                        <p>TO THE SPACE OF MIND</p>
                    </div>
                    <div className="home-astro">
                        <img className='home-img' src={homeImg} alt="/"></img>
                    </div>
                    <div>
                        <SearchBox />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home