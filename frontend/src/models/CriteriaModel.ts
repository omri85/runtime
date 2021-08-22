import DeliverableModel from "./DeliverableModel";

export default class CriteriaModel {
  name: string;
  description: string;
  deliverables: DeliverableModel[];

  /**
   *
   */
  constructor(
    name: string,
    description: string,
    deliverables: DeliverableModel[]
  ) {
    this.name = name;
    this.description = description;
    this.deliverables = deliverables;
  }
}
