import React, { useEffect, useState } from "react";
import { Table, Button, Form, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { listPlants } from "../actions/plantActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useDispatch, useSelector } from "react-redux";


const PlantsListScreen = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const plantList = useSelector((state) => state.plantList);
  const [setPlants] = useState([]);
  const { error, loading, plants } = plantList;
  useEffect(() => {
    dispatch(listPlants());
  }, []);
  const userLogin = useSelector((state) => state.userLogin);
  let navigate = useNavigate();
  const { userInfo } = userLogin;

  
  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    } else if (!userInfo.isAdmin) {
      navigate("/", { state: { message: "You're not permitted to view this page" } });
    }
  }, [userInfo, navigate]);
  
  return (
    <div style={{ margin: "2% 15%" }}>
      <div className="text-center">
        <br />
        <br></br>
        <h3>Plant List</h3>
        <br></br>
        <Form>
          <Row>
            <Col md={3} />
            <Col md={6}>
              <Form.Control
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                placeholder="Search"
                className="me-1"
                aria-label="Search"
              />
            </Col>
          </Row>
        </Form>
        <br />
      </div>
      <br></br>
      <br />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Description</th>
            <th>Location</th>
            <th>Season</th>
            <th>Local Areas</th>
          </tr>
        </thead>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <tbody>
            {plants
              .filter((plant) => {
                return (
                  search === "" ||
                  plant.name.toLowerCase().includes(search.toLowerCase()) ||
                  plant.description
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  plant.location.toLowerCase().includes(search.toLowerCase()) ||
                  plant.season.toLowerCase().includes(search.toLowerCase()) ||
                  plant.local_areas.toString().toLowerCase().includes(search.toLowerCase())
                );
              })
              .map((plant) => {
                return (
                  <tr key="">
                    <td>{plant.name}</td>
                    <td>
                      <img
                        className="rounded"
                        src={plant.image}
                        width="200"
                        height="200"
                      />
                    </td>
                    <td>{plant.description}</td>

                    <td>{plant.location}</td>
                    <td>{plant.season}</td>
                    <td>{plant.local_areas}</td>
                  </tr>
                );
              })}
          </tbody>
        )}
      </Table>
    </div>
  );
};

export default PlantsListScreen;
