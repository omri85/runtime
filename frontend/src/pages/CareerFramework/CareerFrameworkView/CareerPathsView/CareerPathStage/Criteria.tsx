import "./style.css";
import Objective from "./Objective";

type Props = {
  name: string;
  children: any | any[];
};

export default function Criteria(props: Props) {
  return (
    <div className='criteria'>
      <div className='heading4'>Criteria: {props.name}</div>
      <div className='objectives'>
        {Array.isArray(props.children)
          ? props.children.map((i) => i)
          : props.children}
      </div>
    </div>
  );
}
