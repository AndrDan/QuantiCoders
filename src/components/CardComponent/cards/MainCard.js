import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const MainCard = ({ register }) => {
  const [expiryDate, setExpiryDate] = useState('');
  const handleNextInput = (e) => {
    const { value, id } = e.target;
    const currId = Number(id.split('card-')[1]);
    if (value.length === 4 && currId < 4)
      document.querySelector(`#card-${currId + 1}`).focus();
  };
  const handleDateChange = (e) => {
    const { value } = e.target;
    setExpiryDate(
      value.replace(/^\d{3}$/g, value.slice(0, 2) + '/' + value[2])
    );
  };

  return (
    <div className="MainCard">
      <Row>
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label id="paycard-label">Номер картки</Form.Label>
          <div className="paycard-inputs">
            <Form.Control
              type="text"
              id="card-1"
              {...register('paycardNum1', { required: true })}
              maxLength={4}
              onChange={handleNextInput}
              onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
            />
            <Form.Control
              type="text"
              id="card-2"
              {...register('paycardNum2', { required: true })}
              maxLength={4}
              onChange={handleNextInput}
              onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
            />
            <Form.Control
              type="text"
              id="card-3"
              {...register('paycardNum3', { required: true })}
              maxLength={4}
              onChange={handleNextInput}
              onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
            />
            <Form.Control
              type="text"
              id="card-4"
              {...register('paycardNum4', { required: true })}
              maxLength={4}
              onChange={handleNextInput}
              onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
            />
          </div>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Col xs={5}>
          <Form.Group controlId="formGridEmail">
            <Form.Label id="paycard-label">Термін дії</Form.Label>
            <Form.Control
              type="text"
              maxLength={5}
              {...register('expiryDate', { required: true })}
              onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
              onChange={handleDateChange}
              value={expiryDate}
            />
          </Form.Group>
        </Col>{' '}
        <Col />
        <Col xs={5}>
          <Form.Group controlId="formGridPassword">
            <Form.Label id="paycard-label">CVC/CVV</Form.Label>
            <Form.Control
              type="password"
              maxLength={3}
              {...register('cvv', { required: true })}
              onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
            />
          </Form.Group>
        </Col>
      </Row>
    </div>
  );
};
export default MainCard;
