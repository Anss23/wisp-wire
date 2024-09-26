import express from 'express';
import serverless from 'serverless-http';
import { APIGatewayProxyEvent, Context, APIGatewayProxyResult } from 'aws-lambda';
import routes from './routes';

const app = express();

app.use((req, res, next) => {
  console.log('Request received:', req.method, req.path);
  next();
});

app.use(express.json());
app.use('/', routes);

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Internal Server Error' });
});

const serverlessHandler = serverless(app);

export const handler = async (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> => {
  const result = await serverlessHandler(event, context);
  return result as APIGatewayProxyResult;
};