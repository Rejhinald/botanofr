import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector, } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { login } from '../actions/accountActions'

function Loginscreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')  
  
  
  const location = useLocation()
  const redirect = location.search ? location.search.split('=')[1] : '/'

  const userLogin = useSelector(state => state.userLogin)
  const {error, loading, userInfo} = userLogin

  let navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    if (userInfo) {
        navigate(redirect)
    }
  }, [navigate, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }
  return (
    <div className="style" style={{ margin: "2% 15%" }}>  
    <>
        <br/>
        <div class="text-center">
        <h1>Sign In</h1>
        </div><br/><br/>
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
            <Form.Group controlId='email'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                >

                </Form.Control>
            </Form.Group><br/>

            <Form.Group controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                >

                </Form.Control>
            </Form.Group>
            <br/>
            <Button type='submit' variant='primary'>
                Sign In
            </Button>
        </Form>

        <Row className='py-2'>
            <Col>
                Not Registered? <Link
                    to='/register'
                >
                    Register
                </Link>
            </Col>
        </Row>
    </>
  </div>
  )
}

export default Loginscreen