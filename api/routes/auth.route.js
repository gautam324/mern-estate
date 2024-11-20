import express from 'express';
//import { signup } from '../controllers/auth.controller.js';  // Corrected import
import { signin,signup } from '../controllers/auth.controller.js';  // Corrected import

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);

export default router;
