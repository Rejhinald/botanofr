import React from 'react'
import FormContainer from '../components/FormContainer'
import {Form, Button} from 'react-bootstrap'

function Shippingscreen() {

    // <div>Shippingscreen</div>
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [postalCode, setPostalCode] = useState('')
    const [country, setCountry] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        console.log('Shipping')
    }
return (
    <FormContainer>
        <h1>Shipping</h1>
        <Form onSubmit={submitHandler}>
            <Form.Group controlId='address'>
                <Form.Lablel>Address</Form.Lablel>
                <Form.Control
                    required
                    type='text'
                    placeholder='Address'
                    value={address ? address : ''}
                    onChange={(e) => setAddress(e.target.value)}
                >
                </Form.Control>
            </Form.Group>

            <Button type='submit' variant='primary'>
                Continue
            </Button>
        </Form>
    </FormContainer>
  
  )
}

export default Shippingscreen