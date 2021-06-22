// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Tappyfront } = initSchema(schema);

export {
  Tappyfront
};