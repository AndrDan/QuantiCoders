import React from 'react';
import Placeholder from 'react-bootstrap/Placeholder';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const FourthTab = () => {
  return (
    <div className="FourthTab">
      <Row>
        <Col xs={4}>
          <Placeholder animation="glow">
            <Placeholder xs={6} size="lg" />
          </Placeholder>
          <Placeholder animation="glow">
            <Placeholder xs={7} size="lg" /> <Placeholder xs={4} size="lg" />{' '}
            <Placeholder xs={4} size="lg" /> <Placeholder xs={6} size="lg" />{' '}
            <Placeholder xs={8} size="lg" />
          </Placeholder>
          <Placeholder animation="glow">
            <Placeholder xs={7} size="lg" /> <Placeholder xs={4} size="lg" />{' '}
            <Placeholder xs={4} size="lg" /> <Placeholder xs={6} size="lg" />{' '}
          </Placeholder>{' '}
          <Placeholder animation="glow">
            <Placeholder xs={6} size="lg" />
          </Placeholder>
        </Col>
        <Col></Col>
        <Col xs={4}>
          <Placeholder animation="glow">
            <Placeholder xs={6} size="lg" />
          </Placeholder>
          <Placeholder animation="glow">
            <Placeholder xs={7} size="lg" /> <Placeholder xs={4} size="lg" />{' '}
            <Placeholder xs={4} size="lg" /> <Placeholder xs={6} size="lg" />{' '}
            <Placeholder xs={8} size="lg" />
          </Placeholder>{' '}
          <Placeholder animation="glow">
            <Placeholder xs={7} size="lg" /> <Placeholder xs={4} size="lg" />{' '}
            <Placeholder xs={4} size="lg" /> <Placeholder xs={6} size="lg" />{' '}
            <Placeholder xs={8} size="lg" />
          </Placeholder>
        </Col>
      </Row>
    </div>
  );
};
export default FourthTab;
