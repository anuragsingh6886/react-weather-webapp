import React from 'react';

export function NotFound(props) {

  return (
    <section id="not-found" className="container">
      <div className="row align-items-center justify-content-center">
        <div className="col-md-8 col-12">
          <h1 className="display-4 text-center mb-4">Whoops! Looks like we couldn't find {props.searchterm}.</h1>
          <p className="lead text-center">{props.error}</p>
          <p className="lead text-center">Don't worry, we can help you get back on track.</p>
          <div className="d-flex justify-content-center mt-4">
          <button onClick={() => window.location.reload()}>Refresh Page</button>
          </div>
        </div>
      </div>
    </section>
  );
}