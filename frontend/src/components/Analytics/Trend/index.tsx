import "./style.css";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

type Props = {
  trend: number;
  period: string;
};

export default function Trend(props: Props) {
  const { trend, period } = props;
  return (
    <div className='trend'>
      <p>
        {trend > 0 ? (
          <FaArrowUp className='up-arrow' />
        ) : (
          <FaArrowDown className='down-arrow' />
        )}
      </p>
      <p>
        {trend > 0 ? "+" : "-"}
        {trend * 100}% since last {period}
      </p>
    </div>
  );
}
