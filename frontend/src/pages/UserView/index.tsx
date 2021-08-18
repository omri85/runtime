import RecommendationCard from "./RecommendationCard";

export default function UserView() {
  return (
    <div className='user-view'>
      <div className='h2'>Hello, Ben</div>
      <div className='subtitle'>
        Here are some recommendations that will help you reaching the goals of
        your next career stage
      </div>
      <br />
      <div className='h5'>Criteria: Impact</div>
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
    </div>
  );
}
