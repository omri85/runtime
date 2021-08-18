import "./style.css";
import { Table } from "react-bootstrap";

type Props = {
  columns: { name: string; id: string }[];
  data: any[];
  title: string;
};

export default function AnalyticsTable(props: Props) {
  const { columns, data, title } = props;
  return (
    <div className='widget'>
      <div className='heading6 center'>
        <strong>{title}</strong>
      </div>
      <Table bordered>
        <thead>
          {columns.map((column) => (
            <th>{column.name}</th>
          ))}
        </thead>
        <tbody>
          {data.map((record) => (
            <tr>
              {columns.map((column) => (
                <td>{record[column.id]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
