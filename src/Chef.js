import React from "react";
import ChefAPI from "../api";
import { Link } from "react-router-dom";

const Chef = props => {
  const chef = ChefAPI.get(parseInt(props.match.params.number, 10));
  if (!chef) {
    return <div>SOrry that chef was not found</div>;
  }
  return (
    <div>
      <h1>{chef.name} </h1>
      <h2>Cusine: {chef.cusine}</h2>
      <h2>Rating: {chef.rating}</h2>
      <Link to="/roster">Back</Link>
    </div>
  );
};

export default Chef;
