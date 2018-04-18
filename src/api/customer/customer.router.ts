import * as auth from '../../auth/auth.service';
import { Router } from 'express';
import { CustomerController } from './customer.controller';

const router = Router();
const customer = new CustomerController();

// router.post('/', trainer.save);
// router.get('/all', auth.isAuthenticated(), trainer.all);
// router.get('/:id', auth.isAuthenticated(), trainer.one);

export = router;
