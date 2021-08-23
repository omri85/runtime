import "../style.css";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Gallery from "../../../components/Gallery";
import GalleryCard from "../../../components/GalleryCard";
import { CareerFrameworkWizardType } from "./CareerFrameworkWizardType";

export default function ChooseSource(props: CareerFrameworkWizardType) {
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
                  Create a new career framework from an empty template
                </Card.Text>
                <Button onClick={() => props.nextStage()}>Start</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header className='card-header'>Upload CSV</Card.Header>
              <Card.Body>
                <Card.Text>
                  Upload a CSV file with the career framework definition
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
              <Card.Header className='card-header'>DropBox</Card.Header>
              <Card.Body>
                <Card.Text>
                  Create a new career framework based on the{" "}
                  <a href=''>Dropbox Career Framework</a> template
                </Card.Text>
                <Button>Use Template</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header className='card-header'>Nomzo</Card.Header>
              <Card.Body className='d-flex flex-column'>
                <Card.Text>
                  Create a new career framework based on the{" "}
                  <a href=''>Nomzo</a> template
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
