import express from 'express';

import SurveyController from '../controllers/survey.controller';

const router = express.Router();

SurveyController(router);

export default router;
