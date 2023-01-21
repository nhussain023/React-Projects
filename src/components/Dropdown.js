import React from "react";

export default function Dropdown() {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Dropdown button
      </button>
      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" href="/" value ="All">
            All
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/" value ="Incomplete">
            Incomplete
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/" value="Completed">
            Completed
          </a>
        </li>
      </ul>
    </div>
  );
}
