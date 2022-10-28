import { Request, Response, Router } from 'express';

const routes = Router();

routes.get('/', (_: Request, response: Response) => {
  return response.json({ message: `Hello Word` });
});

export default routes;
