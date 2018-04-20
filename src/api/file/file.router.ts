import * as auth from '../../auth/auth.service';
import { Router } from 'express';
import { FileController } from './file.controller';

const router = Router();
const file = new FileController();

router.post('/', auth.isAuthenticated(), file.save);
// router.get('/all', auth.isAuthenticated(), file.all);
// router.get('/:id', auth.isAuthenticated(), file.one);

export = router;
