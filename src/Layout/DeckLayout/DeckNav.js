import React from "react"
import { Link, useLocation } from "react-router-dom"

/**
 * 
 * @param {object} paramList
 * 
 * @param {string} paramList.name
 * The name of the navigation link
 * 
 * @param {string} paramList.to
 * the link to navigate to
 * 
 * @param {string} [paramList.className]
 * Optional, additioanl classes to give the nav link
 * 
 * @param {bool}  [paramList.disabled]
 * Sets if the link is disabled.
 * 
 * @returns A navigation link component for the deck nav
 */
function NavLink({ name, to, className = "", disabled = false }) {

    const colorOverride = disabled ? "disabled" : "text-primary" // sets primary color when active; disables link when disabled
    return <Link to={to} className={`p-0 mr-1 ml-1 btn ${className} ${colorOverride}`}>{name}</Link>
}

/**
 * 
 * @param {object} params 
 * 
 * @param {string} deck
 * The name of the deck
 *  
 * @returns A nav component listing all of the links up to the current location
 */
function DeckNav({ deck = "" }) {
    const { pathname } = useLocation()

    /**
     * @param {string} path Path of the link
     * @param {string} name Name of the link
     * @returns {object.<string, string, bool>}
     * An link object with a `path` string, a `name` string, and a `disabled` check bool
     */
    const createLink = (path, name) => { return { "path": path, "name": name, "disabled": false } } // makes a link for navLink list

    /**
     * Turns the naviation into a set of links
     * 
     * @returns {Array.<object>} An array of links given the path name
     */
    const getNav = () => {
        const pathitems = pathname.split('/')

        let links = []

        let skipNext = false
        let modifier = ""

        const updateLastLink = (link) => links[links.length - 1] = { ...links[links.length - 1], ...link }

        pathitems.forEach((pathNode, index) => {

            const getPath = (pullid = false) => { //gets the path of either the current node of of the node with the ID
                const pullAheadAmount = pullid ? 1 : 0 // pulls one from the amount if you need the ID
                return `${pathitems.slice(0, index + 1 + pullAheadAmount).join("/")}`
            }

            const peek = () => pathitems[index + 1] // gets the next element in pathitems

            if (pathNode === "" || skipNext) {
                skipNext = false // skips the curent index
                return
            }

            switch (pathNode) {
                case "decks":
                    links.push(createLink(getPath(true), deck))
                    skipNext = true
                    break
                case "cards":

                    const modify = (peek() !== "new") //don't modify if next is labelled as new

                    modifier = `Card${modify ? ` ${peek()}` : ""}`

                    links.push(createLink(getPath(modify), modifier))
                    skipNext = modify
                    return //returns early to avoid skip next check
                case "new":
                    if (modifier)
                        updateLastLink(createLink(getPath(false), `Add ${modifier}`))

                    break
                case "edit":
                    if (modifier) // update the last link to say "edit if last link can be modified"
                    {
                        updateLastLink(createLink(getPath(), `Edit ${modifier}`))
                        modifier = ""
                        break
                    }
                //falls through to default
                default:
                    const linkNameUpperCase = pathNode.charAt(0).toUpperCase() + pathNode.slice(1) //makes the first letter uppercase
                    links.push(createLink(getPath(), linkNameUpperCase))
            }
            if (!skipNext) modifier = "" // turns off the modifier if not skipping the next item
        })

        updateLastLink({ disabled: true }) // disabled the last link

        return links
    }

    return (
        <nav className="nav bg-light p-3 mb-2 d-flex">
            <NavLink name="Home" to="/" className="bi-house-door-fill" />
            {
                getNav().map(({ name, path, disabled }, index) => (
                    <React.Fragment key={index}>
                        <span>{` / `}</span>
                        <NavLink name={name} to={path} disabled={disabled} />
                    </React.Fragment>
                ))}
        </nav>
    )
}

export default DeckNav