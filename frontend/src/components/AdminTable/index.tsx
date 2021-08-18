import { Table, Button, Form, Row, Col } from "react-bootstrap";
import { RiDeleteBinLine, RiEditLine } from "react-icons/ri";
import { useHistory } from "react-router-dom";
import "./style.css";

type Props = {
  data: TableDataType[];
  columns: TableColumnType[];
  addUrl: string;
  addLabel: string;
};

interface TableDataType {
  editUrl?: string;
  deleteUrl?: string;
  [key: string]: any;
}

type TableColumnType = {
  name: string;
  id: string | number;
};

export default function AdminTable(props: Props) {
  const history = useHistory();
  const { data, columns, addUrl, addLabel } = props;

  return (
    <div>
      <div className='top-buttons'>
        <Form>
          <Form.Group as={Row}>
            <Col md={{ span: 9, offset: 9 }}>
              <Button
                className='add-button'
                onClick={() => {
                  history.push(addUrl);
                }}>
                {addLabel}
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
      <Table className='admin-table' striped>
        <thead>
          {columns.map((column) => (
            <th>{column.name}</th>
          ))}
          <th className='action-buttons-column'>Actions</th>
        </thead>
        <tbody>
          {data.map((record) => (
            <tr>
              {columns.map((column) => (
                <td>{record[column.id]}</td>
              ))}
              <td>
                <button
                  className='action-button'
                  title='delete'
                  onClick={record.delete}>
                  <RiDeleteBinLine />
                </button>
                <button
                  className='action-button'
                  title='edit'
                  onClick={() => {
                    history.push(record.editUrl || "");
                  }}>
                  <RiEditLine />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
