import "./style.css";
import { Card } from "react-bootstrap";
import Deliverable from "./Deliverable";
import { RiDeleteBinLine, RiEditLine } from "react-icons/ri";

type Props = {
  name: string;
  description: string;
  deliverables: { goal: string; tooltip: string }[];
};

export default function Objective(props: Props) {
  return (
    <Card className='objective'>
      <Card.Header className='objective-header'>
        Objective: {props.name}
        <div className='clickable'>
          <RiDeleteBinLine />
          <RiEditLine />
        </div>
      </Card.Header>
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
