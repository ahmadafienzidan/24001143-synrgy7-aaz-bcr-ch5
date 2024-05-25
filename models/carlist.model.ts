import { Model, ModelObject } from "objection";
import { OrdersModel } from "./orders.model";

export class CarsModel extends Model {
  id!: number;
  name!: string;
  rent_cost!: number;
  size!: string;
  image!: string;
  created_at!: Date;
  updated_at!: Date;

  static get tableName() {
    return "carlist";
  }

  static get relationMappings() {
    return {
      orders: {
        relation: Model.HasManyRelation,
        modelClass: OrdersModel,
        join: {
          from: "carlist.id",
          to: "orders.car_id",
        },
      },
    };
  }
}

export type Cars = ModelObject<CarsModel>;
