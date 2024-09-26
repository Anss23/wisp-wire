// dynamodbClient.ts

import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

// Configure the DynamoDB client based on the environment
const getClientConfig = () => {
  console.log('creating client');
  console.log(process.env);
  if (process.env.ENV === 'local') {
    console.log('setting up localstack');
    return {
      endpoint: 'http://localhost:4566',
      region: 'us-east-1', // LocalStack default region
      credentials: {
        accessKeyId: 'dummy',
        secretAccessKey: 'dummy'
      }
    };
  }
  return {}; // Default configuration for production
};

const client = new DynamoDBClient(getClientConfig());
export const docClient = DynamoDBDocumentClient.from(client);