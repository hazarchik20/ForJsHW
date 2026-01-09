import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <main className='notFound'>
            <h1>404 - Page not found</h1>
            <p>That page not exist</p>
            <div className="link-wrapper">
                <Link to="/">Back to Home page</Link>
            </div>
        </main>
    )
}

export default NotFound