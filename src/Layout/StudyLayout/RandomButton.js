import React from "react"

/**
 * @param {object} parameters
 * 
 * @param {bool} parameters.shuffled
 * Check if shuffle is turned on
 * 
 * @param {function} parameters.shuffleFunction
 * Function used to toggle shuffle
 * 
 * @param {null|string} [parameters.className] 
 * additional classes to give the button
 *  
 * @returns A button object used to switch between shuffle and not shuffle
 */
function RandomButton({ shuffled, shuffleFunction, className = "" }) {

    const icon = shuffled ? "bi-arrow-right" : "bi-shuffle"
    return <button onClick={shuffleFunction} className={`btn btn-primary ${icon} ${className}`}> {shuffled ? "Stop Shuffle" : "Shuffle"}</button>
}

export default RandomButton