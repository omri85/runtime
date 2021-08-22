import { Button, Col, Form } from "react-bootstrap";
import { CareerFrameworkWizardType } from "./CareerFrameworkWizardType";

export default function ChooseFrameworkName(props: CareerFrameworkWizardType) {
  return (
    <div>
      <div className='heading5'>Give the framework a name</div>
      <br />
      <Form className='admin-form'>
        <Col sm={4}>
          <Form.Control
            type='text'
            placeholder='Name'
            onChange={(e) => {
              props.careerFramework.name = e.target.value;
              props.nextStage();
            }}
          />
        </Col>
        <br />
        <Button>Next stage</Button>
      </Form>
    </div>
  );
}
