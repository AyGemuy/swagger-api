
/**
 * Values Routes
 * @module routes/values
 * @requires controllers/values
 */

import { Router } from 'express';

const router = Router();

import * as gpt from '../controllers/values.js';

/**
 * @swagger
 * /gpt:
 *   get:
 *     tags:
 *       - "Values"
 *     description: "Get values"
 *     operationId: gpt.gpt
 *     produces:
 *       - application/json
 *     responses:
 *       '200':
 *         description: Add Value Response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 status:
 *                   type: string
 *       '400':
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Message = Invalid request
 *                 status:
 *                   type: string
 *                   description: Status = failure
 */
router.get('/gpt', gpt.gpt);

export default router;
