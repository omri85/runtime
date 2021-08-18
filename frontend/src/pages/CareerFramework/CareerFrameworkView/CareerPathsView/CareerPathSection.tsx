import React, { Children } from "react";
import CollapseDiv from "../../../../components/CollapseDiv";

type Props = {
  children: any;
  title: string;
};

export default function CareerPathSection(props: Props) {
  return (
    <CollapseDiv title={props.title}>
      <React.Fragment>{props.children}</React.Fragment>
    </CollapseDiv>
  );
}
