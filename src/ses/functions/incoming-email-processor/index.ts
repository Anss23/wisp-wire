import { S3Event, Context } from 'aws-lambda';
export const handler = async (event: S3Event, context: Context) => {
  console.log('Received event:', JSON.stringify(event));
};