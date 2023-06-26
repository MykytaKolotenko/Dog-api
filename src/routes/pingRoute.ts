import express from 'express';
import pingCTRL from '../controllers/pingCTRL';

const pingRoute = express.Router();

pingRoute.get('/', pingCTRL.getVersion);

export default pingRoute;
