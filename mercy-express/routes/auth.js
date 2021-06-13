import express from 'express';

import AuthController from '../controllers/auth.controller';

const router = express.Router();

AuthController(router);

export default router;
