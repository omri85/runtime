import "./style.css";
import { Col, Form } from "react-bootstrap";
import CareerPathsView from "./CareerPathsView";
export default function CareerFrameworkView() {
  return (
    <div>
      <div className='h3'>New Career Framework</div>
      <Form className='admin-form'>
        <Col sm={4}>
          <Form.Control type='text' placeholder='Name' />
        </Col>
      </Form>
      <CareerPathsView />
    </div>
  );
}
