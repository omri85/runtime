import AdminTable from "../../../components/AdminTable";

export default function CareerFrameworksView() {
  const data = [
    { name: "Individual Contributors", editUrl: "/frameworks/1" },
    { name: "Management" },
  ];

  return (
    <div>
      <div className='heading3'>Career Frameworks</div>
      <AdminTable
        data={data}
        columns={[{ name: "Name", id: "name" }]}
        addLabel='Add Framework'
        addUrl=''
      />
    </div>
  );
}
