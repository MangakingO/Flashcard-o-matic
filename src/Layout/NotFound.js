import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <div className="NotFound">
        <div className="jumbotron bg-light text-dark shadow-lg">
          <h1 className="display-3">Not Found</h1>

          <p className="lead font-weight-bold">
            The page you have requested does not exist. Fear not! Simply click
            the button below to navigate to the home page.
          </p>
          <p>Happy Studying!</p>
          <Link
            to="/"
            className="btn btn-primary btn-lg"
            href="#"
            role="button"
          >
            <span className="oi oi-home p-1" />
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
