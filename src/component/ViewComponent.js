import React from 'react';
import Section from './Section';

function ViewComponent(props) {
    return (
        <div className="mainContainer">
            <div className="row">
               <Section src={props.inputOne} id="gfgFrame1" />
               <Section src={props.inputTwo} id="gfgFrame2" />
            </div>
        </div>
    );
}

export default ViewComponent;