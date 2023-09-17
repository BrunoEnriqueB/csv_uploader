import { Router } from 'express';
import UserController from '@/controllers/UserControllers';
import multer from 'multer';
import path from 'path';

const router = Router();
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, '/src/public/tmp/csv');
  },
  filename: (req, file, cb) => {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  }
});
const upload = multer({ dest: '@/tmp/csv/' });

router.post('/files', upload.single('file'), UserController.create);

router.get('/files', UserController.getAll);

export default router;
