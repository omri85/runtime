import Tooltip from "../../../components/Tooltip";

type Props = {
  goal: string;
  tooltip: string;
};

export default function Deliverable(props: Props) {
  const { goal, tooltip } = props;
  return (
    <p className='deliverable'>
      {goal} <Tooltip tooltip={tooltip} />
    </p>
  );
}
