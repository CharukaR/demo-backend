import { Router } from 'express';
import { getAllRequests, createRequest } from '../controllers/request.controller';

const router = Router();

router.get('/', getAllRequests);
router.post('/', createRequest);

export default router;
