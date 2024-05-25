import { Model, ModelObject } from "objection";
import { CarsModel } from "./carlist.model";
import { UsersModel } from "./users.model";

export class OrdersModel extends Model {
  id!: number;
  user_id!: number;
  car_id!: number;
  start_rent!: Date;
  finish_rent!: Date;
  total_cost!: number;
  created_at!: Date;
  updated_at!: Date;

  static get tableName() {
    return "orders";
  }

  static get relationMappings() {
    return {
      car: {
        relation: Model.BelongsToOneRelation,
        modelClass: CarsModel,
        join: {
          from: "orders.car_id",
          to: "carlist.id",
        },
      },
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: UsersModel,
        join: {
          from: "orders.user_id",
          to: "users.id",
        },
      },
    };
  }
}

export type Orders = ModelObject<OrdersModel>;
