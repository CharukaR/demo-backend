import { Router } from 'express';
import { getAllQuotations, createQuotation } from '../controllers/quotation.controller';

const router = Router();

router.get('/', getAllQuotations);
router.post('/', createQuotation);

export default router;