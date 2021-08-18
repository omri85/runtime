import "./style.css";
import { Card } from "react-bootstrap";
import Deliverable from "./Deliverable";

type Props = {
  name: string;
  description: string;
  deliverables: { goal: string; tooltip: string }[];
};

export default function Objective(props: Props) {
  return (
    <Card className='objective'>
      <Card.Header>{props.name}</Card.Header>
      <Card.Body>
        <Card.Text>{props.description}</Card.Text>
        <div>
          <Card.Text>
            <strong>Deliverables</strong>
          </Card.Text>
          {props.deliverables.map((d) => (
            <Deliverable goal={d.goal} tooltip={d.tooltip} />
          ))}
        </div>
      </Card.Body>
    </Card>
  );
}
