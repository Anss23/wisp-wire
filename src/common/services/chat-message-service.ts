import * as DDB from '../utils/ddb';

export const createItem = async (item: Record<string, any>) => {
  console.log('Creating item:', item);
  return DDB.createItem(item);
};

export const updateItem = async (id: string, sortKey: string, updateKey: string, updateValue: any) => {
  console.log(`Updating item with id: ${id}, sortKey: ${sortKey}, updateKey: ${updateKey}, updateValue: ${updateValue}`);
  const result = await DDB.updateItem(id, sortKey, updateKey, updateValue);
  return result;
};

export const deleteItem = async (id: string, sortKey: string) => {
  console.log(`Deleting item with id: ${id}, sortKey: ${sortKey}`);
  return DDB.deleteItem(id, sortKey);
};