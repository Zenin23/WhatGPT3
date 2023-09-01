import React from 'react';
import './feature.css';
import Feature from '../../components/feature/feature';

const featuresData = [
    {
        title: 'Improving and distrusts instantly',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet libero sit amet lectus cursus eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis bibendum velit sed massa varius, id porttitor magna pretium. Phasellus porttitor id erat et commodo. Fusce et purus nec enim congue ultricies eu vitae sapien.',

    },
    {
        title: 'Improving and distrusts instantly',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet libero sit amet lectus cursus eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis bibendum velit sed massa varius, id porttitor magna pretium. Phasellus porttitor id erat et commodo. Fusce et purus nec enim congue ultricies eu vitae sapien.',

    },
    {
        title: 'Improving and distrusts instantly',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet libero sit amet lectus cursus eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis bibendum velit sed massa varius, id porttitor magna pretium. Phasellus porttitor id erat et commodo. Fusce et purus nec enim congue ultricies eu vitae sapien.',

    },
    {
        title: 'Improving and distrusts instantly',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet libero sit amet lectus cursus eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis bibendum velit sed massa varius, id porttitor magna pretium. Phasellus porttitor id erat et commodo. Fusce et purus nec enim congue ultricies eu vitae sapien.',

    }
]

const Features = () => {
    return (
        <div className='gpt3_features section_padding'>
            <div className='gpt3_features-heading'>
                <div className='gradient_text'>
                    <p>Request Early Access To Get Ready</p>
                </div>
                <div className='gpt3_features-container'>
                    {featuresData.map((item, index) => (
                        <Feature title={item.title} text={item.text} key={item.title + index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Features