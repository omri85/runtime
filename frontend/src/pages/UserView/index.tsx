import RecommendationCard from "./RecommendationCard";

export default function UserView() {
  return (
    <div className='user-view'>
      <div className='heading4'>Hello, Ben</div>
      <div className='subtitle'>
        Here are some recommendations that will help you reaching the goals of
        your next career stage
      </div>
      <br />
      <div className='heading6'>Criteria: Impact</div>
      <RecommendationCard
        title='Prefer higher priority tickets'
        subtitle='Impact for SWE Level 3'
        description='Tickets with higher priority are still pending. Consider starting with
          them first.'
        buttonLabel='To the Jira board'
      />
      <br />
      <RecommendationCard
        title='Team member needs assistance'
        subtitle='Team work for SWE Level 3'
        description='One of your team members raised a question in the team slack. See if you can help them'
        buttonLabel='To the channel'
      />
      <br />
      <div className='heading6'>Criteria: Mentorship</div>
      <RecommendationCard
        title='New Opening in your team'
        subtitle='Mentorship for SWE Level 3'
        description='A new opening for an engineer in your team was opened. See if you can give a hand in the interviewing process.'
        buttonLabel='To Greenhouse'
      />
      <RecommendationCard
        title='Provide feedback on a team member'
        subtitle='Mentorship for SWE Level 3'
        description='One of your team members is about to have their probation period review. Your feedback can very helpful.'
        buttonLabel='To feedback form'
      />
    </div>
  );
}
