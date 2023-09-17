import { Request, Response, Router } from 'express';
import UserRouter from '@/routes/UserRoutes';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  return res.send('<h1>Hello World!</h1>');
});

router.use(UserRouter);

export default router;
