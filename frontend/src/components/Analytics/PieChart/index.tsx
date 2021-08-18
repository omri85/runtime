import { PieChart as MinimalPieChart } from "react-minimal-pie-chart";

type Props = {
  progress: number;
  title: string;
};

export default function PieChart(props: Props) {
  const { progress, title } = props;
  return (
    <div className='widget center'>
      <div className='heading5 center'>{title}</div>
      <MinimalPieChart
        style={{ width: "60%" }}
        data={[
          { value: progress, color: "blue", key: "show" },
          { value: 1 - progress, color: "lightgray" },
        ]}
        lineWidth={7}
        // label only the "blue" and not the green
        label={(p) => (p.dataEntry.key ? `${Math.ceil(progress * 100)}%` : "")}
        labelPosition={0}
        startAngle={270}
        animate={true}
      />
    </div>
  );
}
