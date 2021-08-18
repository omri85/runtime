import { Card } from "react-bootstrap";
import Objective from "./Objective";

type Props = {
  name: string;
};

export default function Criteria(props: Props) {
  return (
    <div>
      <div className='h5'>{props.name}</div>
      <div>
        <div className='h6'>Objectives</div>
        <Objective
          name='Delivery'
          description='I deliver some of my team’s goals on time and with a high standard of quality'
        />
      </div>
    </div>
  );
}
