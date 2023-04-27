import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const Plant = ({ plant }) => {
  return (
    <Card className="my-3 py-3 rounded">
      <Link to={`/plant/${plant._id}`}>
        <Card.Img src={plant.image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/plant/${plant._id}`}>
          <Card.Title as="div">
            <strong>{plant.name}</strong>
          </Card.Title>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Plant;
