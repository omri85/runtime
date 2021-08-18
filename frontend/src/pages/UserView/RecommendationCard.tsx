import "./style.css";
import { Button, Card } from "react-bootstrap";

type Props = {
  title: string;
  subtitle: string;
  description: string;
  buttonLabel?: string;
  action?: () => void;
};

export default function RecommendationCard(props: Props) {
  return (
    <Card className='recommendation-card'>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle>{props.subtitle}</Card.Subtitle>
        <br />
        <Card.Text>{props.description}</Card.Text>
        <Button hidden={!props.buttonLabel} onClick={props.action}>
          {props.buttonLabel}
        </Button>
      </Card.Body>
    </Card>
  );
}
