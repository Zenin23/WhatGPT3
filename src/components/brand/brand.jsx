import React from 'react';
import './brand.css';
import { google, stack, atlassian, dropbox, shopify } from './imports';

const Brand = () => (
    <div className="gpt3_brand section_padding">
        <div>
            <img src={google} />
        </div>
        <div>
            <img src={stack} />
        </div>
        <div>
            <img src={atlassian} />
        </div>
        <div>
            <img src={dropbox} />
        </div>
        <div>
            <img src={shopify} />
        </div>
    </div>
);

export default Brand