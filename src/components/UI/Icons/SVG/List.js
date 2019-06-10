import React from "react";

function List(props) {
    const {className, ...rest} = props;
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 19 19" 
            className={["custom-svg", className].join(" ")} 
            {...rest}>
            <path className="view-icon-svg" d="M17.5,3H.5a.5.5,0,0,1,0-1h17a.5.5,0,0,1,0,1Z"></path>
            <path className="view-icon-svg" d="M17.5,10H.5a.5.5,0,0,1,0-1h17a.5.5,0,0,1,0,1Z"></path>
            <path className="view-icon-svg" d="M17.5,17H.5a.5.5,0,0,1,0-1h17a.5.5,0,0,1,0,1Z"></path>
        </svg>
    );
}

export default List;
