import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
    return (
        <div className='gpt3_header section_padding' id='home'>
            <div className='gpt3_header-content'>
                <h1 className='gradient_text'>Lets Build Something Amazing With GPT-3</h1>
                <p>Yet bed any for travelling </p>

                <div className='gpt3_header-content_input'>
                    <input type='email' placeholder='your email'></input>
                    <button type='button'>Get Started</button>
                </div>

                <div className='gpt3_header-content_poeple'>
                    <img src={people} alt='people' />
                    <p>Have accessed and visited in the last 24 hours</p>
                </div>
            </div>
            <div className='gpt3_header-image'>
                <img src={ai} alt='ai' />
            </div>
        </div>
    )
}

export default Header 