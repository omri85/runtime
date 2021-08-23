import { Button } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import AdminTable from "../../../../components/AdminTable";
import CareerPathSection from "./CareerPathSection";

interface ParamsTypes {
  id: string;
}

export default function CareerPathsView() {
  const history = useHistory();
  const { id } = useParams<ParamsTypes>();

  // const data = [
  //   { name: "SWE Level 1" },
  //   { name: "SWE Level 2" },
  //   { name: "SWE Level 3" },
  //   { name: "SWE Level 4" },
  //   { name: "SWE Level 5" },
  // ];
  const data = [
    { name: "Software Engineer", editUrl: `${id}/stages/1` },
    { name: "QA Engineer" },
  ];
  return (
    <div className='admin-view'>
      <div className='heading5'>Career Paths</div>
      <AdminTable
        data={data}
        columns={[{ name: "Name", id: "name" }]}
        addLabel='Add Path'
        addUrl={`${id}/paths/new`}
      />
    </div>
  );
}
