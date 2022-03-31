import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const FirstSwitch = ({ register }) => {
  const numberInput = (e) => !/[0-9]/.test(e.key) && e.preventDefault();
  return (
    <div className="FirstSwitch">
      <Form className="form-container">
        <Row className="mb-3">
          <Col xs={6}>
            <Form.Group>
              <Form.Label>Ім'я</Form.Label>
              <Form.Control
                type="text"
                id="form-input"
                {...register('firstName', { required: true })}
              />
            </Form.Group>
          </Col>
          <Col xs={6}>
            <Form.Group as={Col}>
              <Form.Label>Фамілія</Form.Label>
              <Form.Control
                type="text"
                id="form-input"
                {...register('lastName', { required: true })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3">
          <Form.Label>Назва компаніі, організації</Form.Label>
          <Row>
            <Col xs={12} className="position-relative">
              <Form.Control
                id="form-input"
                type="text"
                {...register('orgName', { required: true })}
              />
              <label htmlFor="upload-file" id="btn-upload">
                +Логотип
              </label>
              <input type="file" hidden id="upload-file" />
            </Col>
          </Row>
        </Form.Group>
        <Col xs={12}>
          <Form.Group className="mb-3">
            <Form.Label>Email-адрес</Form.Label>
            <Form.Control
              id="form-input"
              type="email"
              {...register('email', { required: true })}
            />
          </Form.Group>
        </Col>
        <Col xs={12}>
          <Form.Group className="mb-3">
            <Form.Label>Номер телефону</Form.Label>
            <Form.Control
              id="form-input"
              type="text"
              onKeyPress={numberInput}
              maxLength={15}
              {...register('phone', { required: true })}
            />
          </Form.Group>
        </Col>
      </Form>

      <Form className="form-container">
        <Col xs={12}>
          <Form.Group className="mb-3">
            <Form.Label>Країна</Form.Label>
            <Form.Control
              id="form-input"
              type="text"
              {...register('country', { required: true })}
            />
          </Form.Group>
        </Col>
        <Row className="mb-3">
          {' '}
          <Col xs={6}>
            <Form.Group>
              <Form.Label>Місто</Form.Label>
              <Form.Control
                id="form-input"
                type="text"
                {...register('city', { required: true })}
              />
            </Form.Group>
          </Col>
          <Col xs={6}>
            <Form.Group>
              <Form.Label>Штат, район</Form.Label>
              <Form.Control
                id="form-input"
                type="text"
                {...register('state', { required: true })}
              />
            </Form.Group>
          </Col>
        </Row>

        <Col xs={12}>
          <Form.Group className="mb-3">
            <Form.Label>Адреса</Form.Label>
            <Form.Control
              id="form-input"
              type="text"
              {...register('adress', { required: true })}
            />
          </Form.Group>
        </Col>
        <Row className="mb-3">
          <Col xs={6}>
            <Form.Group>
              <Form.Label>Поштовий індекс</Form.Label>
              <Form.Control
                id="form-input"
                type="text"
                maxLength={12}
                {...register('zip', { required: true })}
                onKeyPress={numberInput}
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
export default FirstSwitch;
