import React from "react"

/**
 * @param {object} [params]
 * 
 * @param {React.ReactNode} params.children
 * 
 * @param {React.ReactNode} [params.nav=null]
 */
function ContentLayer({ children, nav = null }) {

    return (
        <React.Fragment>
            {nav}
            <div className="content">
                {children}
            </div>
        </React.Fragment>

    )
}

export default ContentLayer