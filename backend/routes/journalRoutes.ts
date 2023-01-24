import { Router } from 'express';
import { check,param } from 'express-validator';
import { getNews,createNews, editNews, deleteNews } from '../controllers/journalControllers';
import { validateErrors } from '../middlewares/validate-errors';

const router = Router();

router.get('/',getNews);
router.post(
    '/create',
    [
        check('title','title is required').not().isEmpty(),
        check('content','body is required').not().isEmpty()
    ],
    validateErrors,
    createNews
);

router.put(
    '/edit/:id',
    [
        check('title','title is required').not().isEmpty(),
        check('author','author is required').not().isEmpty(),
        check('body','body is required').not().isEmpty()
    ],
    validateErrors,
    editNews
);
router.delete('/delete/:id',deleteNews);


export default router; 