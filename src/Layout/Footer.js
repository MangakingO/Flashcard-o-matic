import React from "react"
import GitHub from "../images/GitHub-Light.png"

function FooterLink({ to, newWindow = false, imageLink = "", imageAlt, name }) {
    return (
        <li className="d-inline">
            <a className="nav-link text-white d-flex flex-column" href={to} target={newWindow ? "_blank" : "_self"} rel="noreferrer noopener" >
                {imageLink !== "" ? <img src={imageLink} className="h-1" alt={imageAlt} /> : null}
                <p className="m-0">{name}</p>
            </a>
        </li>
    )
    //return <a href={to} target={newWindow ? "_blank" : "_self"} rel="noreferrer noopener">{children} </a>
}

function Footer() {
    //imageLink={GitHub}
    const externalLink = "https://github.com/MangakingO"

    return (
        <footer className="bg-dark mt-2 justify-self-end">
            <nav>
                <ul className="col-12 d-flex justify-content-center m-0">
                    <FooterLink to={externalLink} newWindow imageLink={GitHub} imageAlt="GitHub" name="Repository" />
                </ul>
            </nav>


        </footer>
    )
}

export default Footer