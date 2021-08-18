import { useState } from "react";
import Criteria from "./Criteria";

export default function CareerPathStage() {
  const [name, setName] = useState("SWE Level 1");
  return (
    <div>
      <div className='h3'>{name}</div>
      <Criteria name='Impact' />
    </div>
  );
}