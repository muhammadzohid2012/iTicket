const express = require("express");
const router = express.Router();
const distractController = require("../controller/distract.controller");

/**
 * @swagger
 * tags:
 *   name: Distract
 *   description: Distract management
 */

/**
 * @swagger
 * /api/distract:
 *  post:
 *     tags: [Distract]
 *     summary: Create a new Distract
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *               type: object
 *               properties:
 *                  name:
 *                    type: string
 *                  region_id:
 *                    type: number
 *          
 *     responses:
 *      201:
 *        description: Distract created
 *      400:
 *        description: Invalid input
 *      500:
 *        description: Server error
 */
router.post("/distract", distractController.createDistract);

/**
 * @swagger
 * /api/distract:
 *   get:
 *     tags: [Distract]
 *     summary: Get all Distract
 *     responses:
 *       200:
 *         description: List of Distract
 *       500:
 *         description: Server error
 */
router.get("/distract", distractController.getDistract);

/**
 * @swagger
 * /api/distract/{id}:
 *  get:
 *    tags: [Distract]
 *    summary: Get Distract by ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Distract ID
 *    responses:
 *      200:
 *        description: Distract details
 *      404:
 *        description: Distract not found
 *      500:
 *        description: Server error
 */
router.get("/distract/:id", distractController.getDistractById);

/**
 * @swagger
 * /api/distract/{id}:
 *   put:
 *     tags: [Distract]
 *     summary: Update Distract by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Distract ID
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                  name:
 *                    type: string
 *                  region_id:
 *                    type: number
 *     responses:
 *       200:
 *         description: Distract updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Distract not found
 *       500:
 *         description: Server Error
 */
router.put("/distract/:id", distractController.updateDistract);

/**
 * @swagger
 * /api/distract/{id}:
 *   delete:
 *     tags: [Distract]
 *     summary: Delete Distract by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Distract ID
 *     responses:
 *       204:
 *         description: Distract deleted
 *       404:
 *         description: Distract not found
 *       500:
 *         description: Server error
 */
router.delete("/distract/:id", distractController.deleteDistract);

module.exports = router;
