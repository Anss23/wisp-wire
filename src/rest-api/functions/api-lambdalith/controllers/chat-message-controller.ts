import { Request, Response } from 'express';
import * as chatMessageService from '../../../../common/services/chat-message-service'

export const getApple = async (req: Request, res: Response) => {
  console.log('Apple route hit2s');
  
  const item = {
    id: 'test' + Date.now(),
    sortKey: 'test'
  }
  await chatMessageService.createItem(item); 
  res.status(200).json({ message: process.env.DDB_TABLE});
};

export const createItem = async (req: Request, res: Response) => {
  try {
    //sawait chatMessageService.createItem(req.body);
    res.status(201).json({ message: 'Item created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not create item' });
  }
};

export const updateItem = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { sortKey, updateKey, updateValue } = req.body;
  try {
    const result = await chatMessageService.updateItem(id, sortKey, updateKey, updateValue);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not update item' });
  }
};

export const deleteItem = async (req: Request, res: Response) => {
  const { id, sortKey } = req.params;
  try {
    await chatMessageService.deleteItem(id, sortKey);
    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not delete item' });
  }
};