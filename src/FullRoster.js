import React from "react";
import ChefAPI from "../api";
import { Link } from "react-router-dom";

const FullRoster = () => (
  <div>
    <ul>
      {ChefAPI.all().map(f => (
        <li key={f.number}>
          <Link to={`/roster/${f.number}`}>{f.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default FullRoster;
