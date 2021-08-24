import { useParams } from "react-router-dom";
import AdminTable from "../../../../../components/AdminTable";

interface ParamsTypes {
  id: string;
}

export default function CareerPathsStages() {
  const { id } = useParams<ParamsTypes>();

  const data = [
    { name: "SWE Level 1", editUrl: `${id}/stages/1` },
    { name: "SWE Level 2" },
    { name: "SWE Level 3" },
    { name: "SWE Level 4" },
    { name: "SWE Level 5" },
  ];

  return (
    <div className='admin-view'>
      <div className='heading5'>Career Stages</div>
      <AdminTable
        data={data}
        columns={[{ name: "Name", id: "name" }]}
        addLabel='Add Stage'
        addUrl={`${id}/stages/new`}
      />
    </div>
  );
}
