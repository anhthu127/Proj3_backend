import { Router } from 'express';
import LocationController from '../Controllers/LocationController.js';
import { Response } from '../libs/handle_response.js';
const router = Router();

router.get('/city', Response(LocationController.city))
router.get('/district', Response(LocationController.dist))
router.get('/village', Response(LocationController.village))
router.get('/', Response(LocationController.location))

export default router;