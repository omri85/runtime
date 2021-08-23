import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { post } from "../../../../api";

type ParamsType = {
  fid: string;
};

export default function ChooseCareerPathName() {
  const [name, setName] = useState("");
  const { fid } = useParams<ParamsType>();
  const history = useHistory();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    post(`careerFramework/${fid}/paths`, { name }).then((res) => {
      const { id } = res;
      history.push(`${id}/stages`);
    });
  };
  return (
    <div>
      <div className='heading5'>Give the Career Path a name</div>
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
        <Button type='submit'>Create Path</Button>
      </Form>
    </div>
  );
}
