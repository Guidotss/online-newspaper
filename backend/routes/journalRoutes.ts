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
        check('content','content is required').not().isEmpty()
    ],
    validateErrors,
    createNews
);

router.put('/edit/:id',editNews);
router.delete('/delete/:id',deleteNews);


export default router; 