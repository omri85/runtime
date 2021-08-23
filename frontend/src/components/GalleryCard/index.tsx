import React from "react";
import { Button, Card } from "react-bootstrap";

const doNothing = function () {};

interface Props {
  id?: string | number;
  title: string;
  body?: string;
  buttonLabel: string;
  onClick?: (id: string | number) => void;
}

export default function GalleryCard(props: Props) {
  const { title, buttonLabel, onClick, body } = props;
  return (
    <Card className='gallery-card'>
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        <Card.Text>{body}</Card.Text>
        <Button>{buttonLabel}</Button>
      </Card.Body>
    </Card>
  );
}
