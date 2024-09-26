 import { 
    PutCommand, 
    UpdateCommand, 
    DeleteCommand,
    GetCommand,
    PutCommandInput,
    UpdateCommandInput,
    DeleteCommandInput,
    GetCommandInput
  } from "@aws-sdk/lib-dynamodb";
  import { docClient } from './aws-clients';

  export const DDB_TABLE = process.env.DDB_TABLE || '';
  
  export const createItem = (item: Record<string, any>): Promise<any> => {
    const params: PutCommandInput = {
      TableName: DDB_TABLE,
      Item: item
    };
    const command = new PutCommand(params);
    return docClient.send(command);
  };
  
  export const getItem = (id: string, sortKey: string): Promise<any> => {
    const params: GetCommandInput = {
      TableName: DDB_TABLE,
      Key: { 
        id: id,
        sortKey: sortKey
      }
    };
    const command = new GetCommand(params);
    return docClient.send(command).then(result => result.Item);
  };
  
  export const updateItem = (id: string, sortKey: string, updateKey: string, updateValue: any): Promise<any> => {
    const params: UpdateCommandInput = {
      TableName: DDB_TABLE,
      Key: { 
        id: id,
        sortKey: sortKey
      },
      UpdateExpression: 'set #key = :value',
      ExpressionAttributeNames: {
        '#key': updateKey
      },
      ExpressionAttributeValues: {
        ':value': updateValue
      },
      ReturnValues: 'ALL_NEW'
    };
    const command = new UpdateCommand(params);
    return docClient.send(command).then(result => result.Attributes);
  };
  
  export const deleteItem = (id: string, sortKey: string): Promise<any> => {
    const params: DeleteCommandInput = {
      TableName: DDB_TABLE,
      Key: { 
        id: id,
        sortKey: sortKey
      }
    };
    const command = new DeleteCommand(params);
    return docClient.send(command);
  };