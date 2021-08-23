import "./style.css";
import React from "react";
import { Col, Row } from "react-bootstrap";

type Props = {
  children: any[];
};

export default function Gallery(props: Props) {
  return (
    <div className='gallery'>
      <Row sm={3}>
        {props.children.map((item, index) => (
          <Col key={index}>{item}</Col>
        ))}
      </Row>
    </div>
  );
}
