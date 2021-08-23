import sequelize from "../db";
import { DataTypes, Model, Optional } from "sequelize";

interface CareerPathAttributes {
  id: number;
  name: string;
}

interface CareerPathCreationAttributes
  extends Optional<CareerPathAttributes, "id"> {}

class CareerPath extends Model<
  CareerPathAttributes,
  CareerPathCreationAttributes
> {
  public id!: number;
  public name!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

CareerPath.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { tableName: "careerPaths", sequelize }
);

export default CareerPath;
