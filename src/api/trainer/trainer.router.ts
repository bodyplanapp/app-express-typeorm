import * as auth from '../../auth/auth.service';
import { Router } from 'express';
import { TrainerController } from './trainer.controller';

const router = Router();
const trainer = new TrainerController();

router.post('/', trainer.save);
router.get('/all', auth.isAuthenticated(), trainer.all);
router.get('/:id', auth.isAuthenticated(), trainer.one);

export = router;
