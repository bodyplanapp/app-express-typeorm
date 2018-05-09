'use strict';

import { Router } from 'express';
import * as controller from './user.controller';
import * as auth from '../../auth/auth.service';
import { UserController } from './user.controller';

const user = new UserController();
const router = Router();

router.post('/', user.save);
router.post('/signIn', user.signIn);
router.put('/update/:id', user.update);
// router.put('/:id', auth.isAuthenticated(), user.changePassword);

// router.get('/', auth.hasRole('admin'), UserController.prototype.all);
// router.delete('/:id', auth.hasRole('admin'), controller.destroy);
// router.get('/me', auth.isAuthenticated(), controller.me);
// router.put('/:id/password', auth.isAuthenticated(), controller.changePassword);
// router.get('/:id', auth.isAuthenticated(), controller.show);
// router.post('/', controller.create);

export = router;

