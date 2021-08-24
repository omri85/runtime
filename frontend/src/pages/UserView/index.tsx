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
        subtitle='Understand the business: deliver high value features first'
        description='Tickets with higher priority are still pending. Consider starting with
          them first.'
        buttonLabel='To the Jira board'
        explanation='In previous sprint, tickets with lower priority were completed while more important ones were not'
      />
      <RecommendationCard
        title='Finish the sprint with a higher completion rate'
        subtitle='I deliver what I committed to'
        description='Ask for guidance on task estimations'
        buttonLabel='To the Jira board'
        explanation='In past few sprints your delivery was significantly different than the commitment'
      />
      <RecommendationCard
        title='Estimating more accurately'
        subtitle='I deliver what I committed to'
        description='Ask for guidance on task estimations'
        buttonLabel='To the Jira board'
        explanation='In past few sprints your the actual work time on the tickets was  significantly different than original estimation'
      />
      <br />
      <div className='heading6'>Criteria: Engagement</div>
      <RecommendationCard
        title='Team member needs assistance'
        subtitle='Team work: Help team members'
        description='One of your team members raised a question in the team slack. See if you can help them'
        buttonLabel='To the channel'
      />
      <br />
      <div className='heading6'>Criteria: Mentorship</div>
      <RecommendationCard
        title='New Opening in your team'
        subtitle='Mentorship - partake in hiring process: Take part in the hiring process for your team'
        description='A new opening for an engineer in your team was opened. See if you can give a hand in the interviewing process.'
        buttonLabel='To Greenhouse'
      />
      <RecommendationCard
        title='Provide feedback on a team member'
        subtitle='Mentorship - mentor new joiners: Provide valuable feedback for new joiner to help them succeed in their onboarding'
        description='One of your team members is about to have their probation period review. Your feedback can very helpful.'
        buttonLabel='To feedback form'
      />
    </div>
  );
}
