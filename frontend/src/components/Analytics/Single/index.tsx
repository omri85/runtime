import "./style.css";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

type Props = {
  title: string;
  value: number;
};

export default function Single(props: Props) {
  const { title, value } = props;
  return (
    <div className='single'>
      <div className='heading5'>
        <strong>{title}</strong>
      </div>
      <div className='heading4'>{value}</div>
    </div>
  );
}
