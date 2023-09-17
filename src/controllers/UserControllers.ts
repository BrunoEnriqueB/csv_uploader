import { File } from 'buffer';
import { Request, Response } from 'express';

import { HttpError } from '@/helpers/httpError';
import { User } from '@prisma/client';
import UserServices from '@/services/UserServices';

export default class UserController {
  static async create(req: Request, res: Response): Promise<void> {
    const file = req.file;

    if (!file) {
      throw new HttpError('File must be filled', 403);
    }

    if (file.originalname.split('.')[1] !== 'csv') {
      throw new HttpError('File must be a csv', 403);
    }

    try {
      const data = await UserServices.saveUsersByCsv(file);

      res.status(200).send({ success: true });
    } catch (error) {
      res.status(500).send({ success: false, error: error });
    }
  }

  static async getAll(req: Request, res: Response) {}
}
