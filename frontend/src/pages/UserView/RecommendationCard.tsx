import "./style.css";
import { Button, Card } from "react-bootstrap";
import Tooltip from "../../components/Tooltip";

type Props = {
  title: string;
  subtitle: string;
  description: string;
  buttonLabel?: string;
  action?: () => void;
  explanation?: string;
};

export default function RecommendationCard(props: Props) {
  return (
    <Card className='recommendation-card'>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle>{props.subtitle}</Card.Subtitle>
        <br />
        <Card.Text>
          {props.description}
          <Tooltip tooltip={props.explanation} />
        </Card.Text>
        <Button hidden={!props.buttonLabel} onClick={props.action}>
          {props.buttonLabel}
        </Button>
      </Card.Body>
    </Card>
  );
}
