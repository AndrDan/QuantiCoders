import React from 'react';
import Placeholder from 'react-bootstrap/Placeholder';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const FirstCard = () => {
  return (
    <div className="FirstCard">
      <Row>
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label id="paycard-label">Номер картки</Form.Label>
          <Placeholder as={Form} animation="glow">
            <Placeholder xs={2} size="lg" /> <Placeholder xs={2} size="lg" />{' '}
            <Placeholder xs={2} size="lg" /> <Placeholder xs={2} size="lg" />
          </Placeholder>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Col xs={5}>
          <Form.Group controlId="formGridEmail">
            <Form.Label id="paycard-label">Термін дії</Form.Label>
            <Placeholder as={Form} animation="glow">
              <Placeholder xs={8} size="lg" />
            </Placeholder>
          </Form.Group>
        </Col>{' '}
        <Col />
        <Col xs={5}>
          <Form.Group controlId="formGridPassword">
            <Form.Label id="paycard-label">CVC/CVV</Form.Label>
            <Placeholder as={Form} animation="glow">
              <Placeholder xs={8} size="lg" />
            </Placeholder>
          </Form.Group>
        </Col>
      </Row>
    </div>
  );
};
export default FirstCard;
