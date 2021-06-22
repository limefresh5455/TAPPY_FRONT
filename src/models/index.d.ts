import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Tappyfront {
  readonly id: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Tappyfront>);
  static copyOf(source: Tappyfront, mutator: (draft: MutableModel<Tappyfront>) => MutableModel<Tappyfront> | void): Tappyfront;
}