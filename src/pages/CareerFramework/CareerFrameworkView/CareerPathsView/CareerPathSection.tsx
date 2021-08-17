import React from "react";
import CollapseDiv from "../../../../components/CollapseDiv";
import CareerPathCard from "./CareerPathCard";

export default function CareerPathSection() {
  return (
    <CollapseDiv title='Software Engineer'>
      <React.Fragment>
        <CareerPathCard title='Level 1' />
        <CareerPathCard title='Level 2' />
        <CareerPathCard title='Level 3' />
        <CareerPathCard title='Level 4' />
        <CareerPathCard title='Level 5' />
      </React.Fragment>
    </CollapseDiv>
  );
}
