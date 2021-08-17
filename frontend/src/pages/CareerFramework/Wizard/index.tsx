import ChooseSource from "./ChooseSource";

export default function CareerFrameworkWizard() {
  const stage = 1;

  switch (stage) {
    case 1:
      return <ChooseSource />;
    default:
      break;
  }
  return <div></div>;
}
