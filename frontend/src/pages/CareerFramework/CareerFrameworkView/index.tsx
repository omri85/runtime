import AdminTable from "../../../components/AdminTable";

export default function CareerFrameworks() {
  const data = [
    { name: "Individual Contributors", editUrl: "/frameworks/1" },
    { name: "Management" },
  ];

  return (
    <div className='admin-view'>
      <div className='heading3'>Career Frameworks</div>
      <AdminTable
        data={data}
        columns={[{ name: "Name", id: "name" }]}
        addLabel='Add Framework'
        addUrl='/frameworks/new'
      />
    </div>
  );
}
