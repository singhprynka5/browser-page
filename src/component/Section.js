import React from 'react';

function Section(props) {
    return (
        <div className="col">
            <iframe id={props.id} title={props.id} src={props.src}
                style={{ height: document.documentElement.clientHeight, width: "100%" }}>
            </iframe>
        </div>
    );
}

export default Section;