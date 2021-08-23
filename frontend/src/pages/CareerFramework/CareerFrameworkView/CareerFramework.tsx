import "./style.css";
import { Col, Form } from "react-bootstrap";
import CareerPathsView from "./CareerPathsView";
import { useState } from "react";
export default function CareerFramework() {
  const [name, setName] = useState("Individual contributors");

  return (
    <div>
      <div className='heading4'>{name}</div>
      <br />
      <CareerPathsView />
    </div>
  );
}
