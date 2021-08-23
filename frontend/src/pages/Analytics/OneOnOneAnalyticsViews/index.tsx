import { Col, Row } from "react-bootstrap";
import { PieChart, Trend } from "../../../components/Analytics";
import AnalyticsTable from "../../../components/Analytics/AnalyticsTable";
import Single from "../../../components/Analytics/Single";

export default function OneOnOneAnalyticsView() {
  return (
    <div>
      <div className='heading4'>One On One</div>
      <br />
      <div className='heading6'>Impact: Plan vs. delivery</div>
      <br />
      <Row sm={2} md={4}>
        <Col>
          <PieChart progress={0.5} title='Plan vs Delivery last sprint' />
        </Col>
        <Col>
          <Trend trend={0.2} period='sprint' />
        </Col>
        <Col md={6}>
          <AnalyticsTable
            title='Missed estimations tickets'
            columns={[
              { name: "Key", id: "key" },
              { name: "Summary", id: "summary" },
            ]}
            data={[
              {
                key: (
                  <a
                    href='https://elevation.atlassian.net/browse/KR2-416'
                    target='_blank'>
                    KR-123
                  </a>
                ),
                summary: "Add tooltips to user dashboard",
              },
              {
                key: <a href=''>KR-126</a>,
                summary:
                  "Change data model to support multiple accounts per user",
              },
            ]}
          />
        </Col>
      </Row>
      <br />
      <div className='heading6'>Ownership: Partake in hiring for the team</div>
      <br />
      <Row sm={2} md={4}>
        <Col md={6}>
          <AnalyticsTable
            columns={[
              { name: "Candidate", id: "name" },
              { name: "Position", id: "position" },
            ]}
            data={[
              { name: "Ohad Frnakfurt", position: "FE Engineer" },
              { name: "Dana Amsalem", position: "FE Engineer" },
            ]}
            title='Candidates in pipeline'
          />
        </Col>
        <Col>
          <Single title='Interviews conducted' value={2} />
        </Col>
      </Row>
    </div>
  );
}
