import React, { useState, useEffect } from "react";
import axios from "axios";

import Plant from "../components/Plant";
import { Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listPlants } from "../actions/plantActions";
import { Link, useParams, useNavigate } from "react-router-dom";




function Homescreen() {
  document.body.style.backgroundImage =
    "url('https://scx2.b-cdn.net/gfx/news/2021/philippinefo.jpg')";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const plantList = useSelector((state) => state.plantList);
  const { loading, error, plants } = plantList;

  useEffect(() => {
    dispatch(listPlants());
  }, [dispatch]);

  const handleStartSearch = () => {
    navigate("/search");
  };

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  
  if (!userInfo) {
    navigate("/login");
  } else {
    if (!userInfo.isSubscriber) {
      navigate("/subscription");
    }
  }

  return (
    <div className="container">
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <div className="text-center">
          <h1>Welcome to a Plant Finder Website!</h1>
          <Button variant="success" onClick={handleStartSearch}>
            Start Searching
          </Button>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : (
            <div>
              <Row className="mt-5">
                {plants.map((plant) => (
                  <Col key={plant._id} xs={12} sm={6} md={4} lg={3}>
                    <Plant plant={plant} />
                  </Col>
                ))}
              </Row>
              <div className="mt-5">
                <h2>About our website</h2>
                <p>
                  Our website is dedicated to providing information about
                  plants, including their characteristics, uses, and care.
                  Whether you're a plant enthusiast or just starting out, we've
                  got you covered!
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Homescreen;
