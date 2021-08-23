import { useState } from "react";
import CriteriaModel from "../../../../../models/CriteriaModel";
import Criteria from "./Criteria";

const data = [
  new CriteriaModel(
    "Impact",
    "I deliver some of my team’s goals on time and with a high standard of quality",
    [
      {
        goal: "Finish every sprint with at least 80% story points completion",
        tooltip: "Calculated at the end of every sprint using the Jira board",
      },
    ]
  ),
];

export default function CareerPathStage() {
  const [name, setName] = useState("SWE Level 1");
  return (
    <div>
      <div className='heading4'>Career Stage: {name}</div>
      {/* {data.map((rec) => (
        <Criteria data={rec} />
      ))} */}
      <Criteria name='Impact' />
      {/* <Criteria name='Decision Making' /> */}
    </div>
  );
}
