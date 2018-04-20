import * as auth from '../../auth/auth.service';
import { Router } from 'express';
import { PlanController } from './plan.controller';

const router = Router();
const plan = new PlanController();

router.post('/', auth.isAuthenticated(), plan.save);
// router.get('/all', auth.isAuthenticated(), trainer.all);
// router.get('/:id', auth.isAuthenticated(), trainer.one);

export = router;
