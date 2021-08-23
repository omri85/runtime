import { useState } from "react";
import CriteriaModel from "../../../../../models/CriteriaModel";
import Criteria from "./Criteria";
import Objective from "./Objective";

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
      <Criteria name='Impact'>
        <Objective
          name='Delivery'
          description='I deliver some of my team’s goals on time and with a high standard of quality'
          deliverables={[
            {
              goal: "Finish every sprint with at least 80% story points completion",
              tooltip:
                "Calculated at the end of every sprint using the Jira board",
            },
          ]}
        />
        <Objective
          name='Understand the business'
          description='I understand my customers, the business’s goals and my team’s goals. I ensure my work will have the greatest customer impact'
          deliverables={[
            {
              goal: "Complete high priority tickets first",
              tooltip: "Using the Priority field of the Jira tickets",
            },
          ]}
        />
      </Criteria>
      <Criteria name='Ownership'>
        <Objective
          name='Data Driven'
          description='I suggest new ideas'
          deliverables={[
            {
              goal: "Provide feedback on new product specs",
              tooltip: "Using your team space on Confluence",
            },
          ]}
        />
      </Criteria>
      <Criteria name='Design'>
        <Objective
          name='Simple Solution'
          description='I design maintainable and simple solutions'
          deliverables={[
            {
              goal: "Receive good feedbacks regarding design on your PRs",
              tooltip:
                "Sending surveys to your team members who reviewed your PRs",
            },
          ]}
        />
        <Objective
          name='Independent designs'
          description='I design myself the solution'
          deliverables={[
            {
              goal: "Get positive feedbacks from your team lead after presenting your designs",
              tooltip:
                "Collecting feedback from your team lead after scheduled design reviews meetings",
            },
          ]}
        />
      </Criteria>
    </div>
  );
}
