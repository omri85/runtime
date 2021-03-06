import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { post } from "../../../api";
import { CareerFrameworkWizardType } from "./CareerFrameworkWizardType";

export default function ChooseFrameworkName(props: CareerFrameworkWizardType) {
  const [name, setName] = useState("");
  const history = useHistory();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    post("careerFramework", { name }).then((res) => {
      const { id } = res;
      history.push(`/frameworks/${id}`);
    });
  };
  return (
    <div>
      <div className='heading5'>Give the framework a name</div>
      <br />
      <Form className='admin-form' onSubmit={handleSubmit}>
        <Col sm={4}>
          <Form.Control
            type='text'
            required
            placeholder='Name'
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Col>
        <br />
        <Button type='submit'>Next stage</Button>
      </Form>
    </div>
  );
}
