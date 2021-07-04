import React from 'react';

function SearchField(props) {
    return (
        <input className="col" type="text"
            onChange={(el) => props.onChange(el.target.value)}
            placeholder="Search" />
    );
}

export default SearchField;