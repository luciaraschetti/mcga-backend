import './style.css';
import React from 'react';
import Aside from './Aside/index';


const Index = (props: any) => {
    return (
        <React.Fragment>
            <div className="containerLayoutPrivate">
                <Aside />
                <div className="title">
                    <h1>{props.headerText}</h1>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Index;