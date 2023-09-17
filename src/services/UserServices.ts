import { HttpError } from '@/helpers/httpError';
import readCsvAsync from '@/utils/readCsvAsync';
import validateUsersCsv from '@/utils/validateUsersCsv';
import { promises } from 'fs';

export default class UserServices {
  static async saveUsersByCsv(file: Express.Multer.File): Promise<void> {
    try {
      const data = await promises.readFile(file.path);
      const csvValidation = validateUsersCsv(data.toString());

      if (csvValidation) {
        throw new HttpError(csvValidation, 400);
      }
    } catch (error) {
      throw error;
    }
  }
}
