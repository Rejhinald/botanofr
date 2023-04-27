import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Col, Row, Image, ListGroup, ListGroupItem, Card, Button, Form } from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { useDispatch, useSelector } from 'react-redux'
import { listPlantDetails } from '../actions/plantActions'

const Plantscreen = ({ match }) => {
    const { id } = useParams();
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const plantDetails = useSelector(state => state.plantDetails)
    const { loading, error, plant } = plantDetails

    useEffect (() => {
        dispatch(listPlantDetails(id))
  
  }, [dispatch, match])

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
    <>
        <Link className='btn btn-dark my-3' to='/search '>
            Go Back
        </Link>
        {loading ?
            <Loader/>
            : error
                ? <Message variant='danger'>{error}</Message>
            : (
                <Row>
            <Col md={6}>
                <Image src={plant.image} alt={plant.name} fluid />
            </Col>
            <Col md={3}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h3>{plant.name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Description: {plant.description}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Location: {plant.location}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Local Areas: {plant.local_areas}
                    </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Season:
                                </Col>
                                <Col>
                                    <strong>{plant.season}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>

                    </ListGroup>
                </Card>
            </Col>
        </Row>
            )
        }
        
    </>
  )
}


export default Plantscreen