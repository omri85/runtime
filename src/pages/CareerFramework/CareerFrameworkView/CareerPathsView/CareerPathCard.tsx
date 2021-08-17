import React from "react";
import { Card } from "react-bootstrap";

type Props = {
  title: string;
};

export default function CareerPathCard(props: Props) {
  const { title } = props;
  return (
    <Card className='career-path-card'>
      <Card.Body>
        <Card.Text>{title}</Card.Text>
      </Card.Body>
    </Card>
  );
}
