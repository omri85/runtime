import "./style.css";
import { Card } from "react-bootstrap";
import Deliverable from "./Deliverable";

type Props = {
  name: string;
  description: string;
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
          <Deliverable
            goal='Finish every sprint with at least 80% story points completion'
            tooltip='Calculated at the end of every sprint using the Jira board'
          />
          <Deliverable
            goal='Complete high priority tickets first'
            tooltip='Using the Priority field of the Jira tickets'
          />
        </div>
      </Card.Body>
    </Card>
  );
}
