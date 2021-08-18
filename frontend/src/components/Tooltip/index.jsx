import { OverlayTrigger, Tooltip as ReactTooltip } from "react-bootstrap";
import { IoInformationCircleOutline } from "react-icons/io5";

export default function Tooltip(props) {
  const { tooltip } = props;
  const renderTooltip = (overlayProps) => (
    <ReactTooltip id='information-tooltip' {...overlayProps}>
      {tooltip}
    </ReactTooltip>
  );
  return (
    <OverlayTrigger
      placement='right'
      overlay={renderTooltip}
      delay={{ show: 250, hide: 400 }}>
      <span style={{ width: "fit-content" }}>
        <IoInformationCircleOutline />
      </span>
    </OverlayTrigger>
  );
}
