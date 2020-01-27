import React from "react";
import { Col, Card, CardHeader } from 'reactstrap'

const Deathstar = props => {
  return (
      <Col xs='12' md="6" xl="4">
          <Card>
              <CardHeader>{props.name}</CardHeader>
          </Card>
      </Col>
  );
};
export default Deathstar;