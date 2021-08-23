import { Button, Card, Col, Row } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
// import { CareerFrameworkWizardType } from "./CareerFrameworkWizardType";

export default function ChooseCareerPathSource() {
  const history = useHistory();
  return (
    <div>
      <div className='heading4'>Create Career Framework</div>
      <div className='gallery'>
        <Row xs={1} md={3} className='g-4'>
          <Col>
            <Card>
              <Card.Header className='card-header'>From scratch</Card.Header>
              <Card.Body>
                <Card.Text>
                  Create a new career path from an empty template
                </Card.Text>
                <Button>Start</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header className='card-header'>Upload CSV</Card.Header>
              <Card.Body>
                <Card.Text>
                  Upload a CSV file with the career path definition
                </Card.Text>
                <Button>Upload</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <div className='heading5'>Use a template</div>
      <div className='gallery'>
        <Row xs={1} md={3} className='g-4'>
          <Col>
            <Card>
              <Card.Header className='card-header'>
                Software Engineer
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  Create a new career path based on the Software Engineer
                  template
                </Card.Text>
                <Button>Use Template</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header className='card-header'>QA Engineer</Card.Header>
              <Card.Body className='d-flex flex-column'>
                <Card.Text>
                  Create a new career path based on the QA Engineer template.
                </Card.Text>
                <Button className='mt-auto' style={{ alignSelf: "center" }}>
                  Use Template
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header className='card-header'>
                Engineering Manager
              </Card.Header>
              <Card.Body className='d-flex flex-column'>
                <Card.Text>
                  Create a new career path based on the Engineer Manager
                  template, from team lead to Senior VP Engineering.
                </Card.Text>
                <Button className='mt-auto' style={{ alignSelf: "center" }}>
                  Use Template
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header className='card-header'>
                Solution Architect
              </Card.Header>
              <Card.Body className='d-flex flex-column'>
                <Card.Text>
                  Create a new career path based on the Solution architect.
                  template, from associate to Senior Solution Architect.
                </Card.Text>
                <Button className='mt-auto' style={{ alignSelf: "center" }}>
                  Use Template
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
