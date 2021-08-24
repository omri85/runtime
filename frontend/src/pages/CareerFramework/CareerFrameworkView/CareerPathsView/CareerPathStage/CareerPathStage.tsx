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
            {
              goal: "Estimate the work accurately to allow predictability",
              tooltip:
                "Calculated using the Jira board by measuring the difference between the original estimation and actual work",
            },
          ]}
        />
        <Objective
          name='Deliver high value features'
          description='I understand my customers, the business’s goals and my team’s goals. I ensure my work will have the greatest customer impact'
          deliverables={[
            {
              goal: "Complete high priority tickets first",
              tooltip: "Using the Priority field of the Jira tickets",
            },
            {
              goal: "Features delivered made an impact on our business",
              tooltip:
                "measured by feedback sent to PM 3 months after feature was delivered",
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
              tooltip: `# of tickets created with label "Suggested by" employee`,
            },
          ]}
        />
      </Criteria>
      <Criteria name='Code Fluency'>
        <Objective
          name='High quality code'
          description='I deliver high quality code - readable and bug free'
          deliverables={[
            {
              goal: "Ship high quality code to QA",
              tooltip:
                "measured by # of tickets assigned to team member which has been rejected by QA",
            },
            {
              goal: "Fast merge lifecycle to production",
              tooltip: "Measured by the number of iterations on a PR",
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
      <Criteria name='Engagement'>
        <Objective
          name='Contribute to PRs'
          description='I contribute to PRs which I am asked to review'
          deliverables={[
            {
              goal: "Review PRs which you were assigned as a reviewer before they are merged",
              tooltip:
                "Measured by the number of PRs that were assigned to you and the that you reviewed",
            },
            {
              goal: "Provide valuable feedback on the PRs that you review",
              tooltip:
                "Measured using feedback surveys collected from the authors",
            },
          ]}
        />
      </Criteria>
      <Criteria name='Talent Development'>
        <Objective
          name='Partake in team hiring'
          description='I take part in the hiring process of new members to my team'
          deliverables={[
            {
              goal: "Participate in any of the phases of the hiring process",
              tooltip:
                "Measured by # of hiring process this employee participated in ",
            },
          ]}
        />
        <Objective
          name='Mentor new-joiners'
          description='I mentor new team members in my team'
          deliverables={[
            {
              goal: "Mentor new team members who join your team as their buddy",
              tooltip: "Measured by the number of new employees you mentored",
            },
            {
              goal: "Support new employees in their first months to allow good and smooth onboarding",
              tooltip:
                "Measured using feedback survey from the new joiners you mentored",
            },
          ]}
        />
      </Criteria>
    </div>
  );
}
