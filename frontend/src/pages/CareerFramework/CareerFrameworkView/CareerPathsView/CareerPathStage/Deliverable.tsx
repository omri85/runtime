import Tooltip from "../../../../../components/Tooltip";
import { RiArrowRightSFill } from "react-icons/ri";

type Props = {
  goal: string;
  tooltip: string;
};

export default function Deliverable(props: Props) {
  const { goal, tooltip } = props;
  return (
    <p className='deliverable'>
      <RiArrowRightSFill />
      {goal} <Tooltip tooltip={tooltip} />
    </p>
  );
}
