import React from "react";


function Heading({ title = null }) {
    return title ?
        (<h1>{title}</h1>)
        : null;
}

export default Heading