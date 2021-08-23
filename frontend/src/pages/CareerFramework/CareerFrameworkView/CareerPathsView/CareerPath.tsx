import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../../../../api";
import AdminTable from "../../../../components/AdminTable";

type ParamsType = {
  id: string;
  fid: string;
};

export default function CareerPath() {
  const { fid, id } = useParams<ParamsType>();
  const [name, setName] = useState("");
  const [stages, setStages] = useState([{ name: "SWE 1" }]);

  const fetchPath = () => {
    get(`careerFramework/${fid}/paths/${id}`).then((res) => {
      setName(res.name);
    });
  };
  useEffect(fetchPath, []);

  return (
    <div className='admin-view'>
      <div className='heading4'>{name}</div>
      <div className='heading5'>Stages</div>
      <AdminTable
        data={stages}
        columns={[{ name: "Name", id: "name" }]}
        addLabel='Add a stage'
        addUrl='paths/'
      />
    </div>
  );
}
