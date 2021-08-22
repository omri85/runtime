import sequelize from "../db";
import { DataTypes, Model, Optional } from "sequelize";

interface CareerFrameworkAttributes {
  id: number;
  name: string;
}

interface CareerFrameworkCreationAttributes
  extends Optional<CareerFrameworkAttributes, "id"> {}

class CareerFramework extends Model<
  CareerFrameworkAttributes,
  CareerFrameworkCreationAttributes
> {
  public id!: number;
  public name!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

CareerFramework.init(
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
  { tableName: "careerFrameworks", sequelize }
);

export default CareerFramework;
