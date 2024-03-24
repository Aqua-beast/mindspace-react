import React, { useState } from 'react'
import { ReactTyped } from "react-typed";
import axios from 'axios';

const SharedExp = () => {
    const [text, setText] = useState('I am happy.');
    const [content, setContent] = useState('🤗')
    const dummy_data = {'WEAK_POSITIVE': '🙂', 'POSITIVE': '🤗', 'NEUTRAL': '😐', 'WEAK_NEGATIVE': '😬', 'NEGATIVE': '😫'};

    const SharedExpHandle = (e) => {
        const val = e.target.value;
        console.log(val);
        setText(val);
    }

    const SharedExpButton = async (e) => {
        e.preventDefault();
        const url = "https://api.api-ninjas.com/v1/sentiment?text="+text;
        console.log(text);
        const res = await axios.get(url, {
            headers: {
                'X-Api-Key': process.env.REACT_APP_API_Key
            }
        })
        const check = res.data.sentiment;
        console.log(dummy_data[check]);
        setContent(dummy_data[check]);

    }
    return (
        <div className='sharedBg'>
            <div className='sharedHead-1'>Let's Talk</div>
            <div className='sharedHead-2'>Stay  <ReactTyped className='sharedHead-2' strings={["In Touch!", "Happy :)"]} typeSpeed={30} backSpeed={40} /></div>
           
            <form className='sharedExp-form'>
                <div className='sharedExp-form-box' >
                    <input type='text' name='content' required minLength={5} placeholder={"add a small description of length atleast 5 eg: "+text} onChange={SharedExpHandle}/>
                    <div className="sharedSentimentBox">{content}</div>
                </div>
                <button className='sharedButton' onClick={SharedExpButton}>Submit</button>
            </form>
        </div>
    )
}

export default SharedExp
