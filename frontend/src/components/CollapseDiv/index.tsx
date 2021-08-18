import "./style.css";
import { Collapse } from "react-bootstrap";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
import { useState } from "react";

interface Props {
  children: any;
  title: string;
  open?: boolean;
  className?: string;
}

export default function CollapseDiv(props: Props) {
  const { title, children } = props;
  const [open, setOpen] = useState(props.open || false);
  return (
    <div className='collapse-div'>
      <div
        className='title'
        onClick={() => {
          setOpen(!open);
        }}>
        {open ? (
          <RiArrowUpSLine className='collapse-button' />
        ) : (
          <RiArrowDownSLine className='collapse-button' />
        )}
        <div className='heading6'>{title}</div>
      </div>
      <Collapse in={open} className='collapse'>
        <div className='collapse-items'>{children}</div>
      </Collapse>
    </div>
  );
}
