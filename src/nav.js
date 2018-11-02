import React from 'react';

import './nav.css';

export default function TopNav(props) {
  return (
    <nav>
      <ul className="clearfix">
        <li>
          <a 
            href="#what"
            className="what"
          >
            What?
          </a>
        </li>
        <li>
          <a
            href="#feedback"
            className="new"
            onClick={() => props.onRestartGame()}
          >
            Start Over
          </a>
        </li>
      </ul>
    </nav>
  );
}