import RecommendationCard from "./RecommendationCard";

export default function UserView() {
  return (
    <div>
      <div className='h2'>Hello, Ben</div>
      <div className='h3'>Recommendations</div>
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
