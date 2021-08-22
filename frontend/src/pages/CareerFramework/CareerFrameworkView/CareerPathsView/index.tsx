import { Button } from "react-bootstrap";
import CareerPathSection from "./CareerPathSection";

export default function CareerPathsView() {
  return (
    <div className='admin-view'>
      <div className='admin-header'>
        <div className='heading5'>Career Paths</div>
        {/* <Button>Add a Career Path</Button> */}
      </div>
      <br />
      <CareerPathSection title='Software Engineer'>
        <div className='career-path-level-title'>
          <a href='1/stages/1'>SWE Level 1</a>
        </div>
        <div className='career-path-level-title'>
          <a href=''>SWE Level 2</a>
        </div>
        <div className='career-path-level-title'>
          <a href=''>SWE Level 3</a>
        </div>
        <div className='career-path-level-title'>
          <a href=''>SWE Level 4</a>
        </div>
        <div className='career-path-level-title'>
          <a href=''>SWE Level 5</a>
        </div>
        <div className='career-path-level-title'>
          <a href=''>SWE Level 6</a>
        </div>
      </CareerPathSection>
      <br />
      <CareerPathSection title='QA Engineer'>
        <div className='career-path-level-title'>Junior QA</div>
        <div className='career-path-level-title'>Mid-senior QA</div>
        <div className='career-path-level-title'>Senior QA</div>
      </CareerPathSection>
    </div>
  );
}
