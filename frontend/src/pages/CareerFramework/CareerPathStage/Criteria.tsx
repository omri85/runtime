import "./style.css";
import Objective from "./Objective";

type Props = {
  name: string;
};

export default function Criteria(props: Props) {
  return (
    <div className='criteria'>
      <div className='heading4'>Criteria: {props.name}</div>
      <div className='objectives'>
        <div className='heading5'>Objectives</div>
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
        <br />
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
      </div>
    </div>
  );
}
