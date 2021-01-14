import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { sendDrop } from './Handlers'

const toastId = 'akirunku'
const FormI = ({ toast, setHash, hash }) => {
  const [requested, setRequested] = useState(false)

  return (
    <Row>
      <Col md={{ span: 6, offset: 3 }} >
        <Form onSubmit={(e) => sendDrop(e, toast, setHash, toastId, setRequested)}>
          <Form.Group controlId="address">
            <Form.Label>Enter Your Address</Form.Label>
            <Form.Control type="text" placeholder="Ethereum Address (0x...)" name="address" />
          </Form.Group>
          <Button variant="primary" type="submit" disabled={requested}>
            Get Droplet
          </Button>
        </Form>
        <div>
          {requested ? 'Request sent, waiting for response...' : null}
        </div>
        
        <div>
          {hash}
        </div>
      </Col>
    </Row>  
  )
}

export default FormI
