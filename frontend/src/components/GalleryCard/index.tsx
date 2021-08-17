import React from "react";
import { Button, Card } from "react-bootstrap";

interface Props {
  id?: string | number;
  title: string;
  body?: string;
  button: { label: string; onClick: (id: string | number) => void };
}

export default function GalleryCard(props: Props) {
  const { title, id, button, body } = props;
  return (
    <Card className='gallery-card'>
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        <Card.Text>{body}</Card.Text>
        <Button>{button.label}</Button>
      </Card.Body>
    </Card>
  );
}
