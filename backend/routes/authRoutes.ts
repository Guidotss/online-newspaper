
import { NextFunction, Router } from 'express';
import { Request,Response } from 'express';
import { check } from 'express-validator';
import { validateErrors } from '../middlewares/validate-errors';
import { isAuth } from './../middlewares/isAuth';
import { loginUser, registeUser,renewToken } from '../controllers/authControllers';

const router = Router();

router.get('/renew',isAuth,renewToken);
router.post(
    '/register', 
    [
        check('name','Name is required').not().isEmpty(),
        check('lastName','Last name is required').not().isEmpty(),
        check('email','Email is required').isEmail(),
        check('password','Password is required').not().isEmpty(),
        check('password', 'Password should be at least 6 characters').isLength({min:6})

    ],
    validateErrors,
    registeUser
);
router.post(
    '/login',
    [
        check('email','Email is required').isEmail(),
        check('password','Password is required').not().isEmpty()
    ],
    validateErrors,
    loginUser
);

export default router;
