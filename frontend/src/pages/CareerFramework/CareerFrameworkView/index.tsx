import "./style.css";
import { Col, Form } from "react-bootstrap";
import CareerPathsView from "./CareerPathsView";
import { useState } from "react";
export default function CareerFrameworkView() {
  const [name, setName] = useState("Individual contributors");

  return (
    <div>
      <div className='heading4'>{name}</div>
      {/* <Form className='admin-form'>
        <Col sm={4}>
          <Form.Control type='text' placeholder='Name' />
        </Col>
      </Form> */}
      <br />
      <CareerPathsView />
    </div>
  );
}
