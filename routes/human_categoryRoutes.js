const express = require("express");
const router = express.Router();
const humanCategoryController = require("../controller/human_category.controller");

/**
 * @swagger
 * tags:
 *   name: Human
 *   description: Human management
 */

/**
 * @swagger
 * /api/human:
 *  post:
 *     tags: [Human]
 *     summary: Create a new Human
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *               type: object
 *               properties:
 *                  name:
 *                    type: string
 *                  Start_age:
 *                    type: number
 *                  Finish_age:
 *                    type: number
 *                  gender_id:
 *                    type: number
 *          
 *     responses:
 *      201:
 *        description: Human created
 *      400:
 *        description: Invalid input
 *      500:
 *        description: Server error
 */
router.post("/human", humanCategoryController.createHuman);

/**
 * @swagger
 * /api/human:
 *   get:
 *     tags: [Human]
 *     summary: Get all Human
 *     responses:
 *       200:
 *         description: List of Human
 *       500:
 *         description: Server error
 */
router.get("/human", humanCategoryController.getHuman);

/**
 * @swagger
 * /api/human/{id}:
 *  get:
 *    tags: [Human]
 *    summary: Get Human by ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Human ID
 *    responses:
 *      200:
 *        description: Human details
 *      404:
 *        description: Human not found
 *      500:
 *        description: Server error
 */
router.get("/human/:id", humanCategoryController.getHumanById);

/**
 * @swagger
 * /api/human/{id}:
 *   put:
 *     tags: [Human]
 *     summary: Update Human by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Human ID
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                  name:
 *                    type: string
 *                  Start_age:
 *                    type: number,
 *                  Finish_age:
 *                    type: number
 *                  gender_id:
 *                    type: number
 *     responses:
 *       200:
 *         description: Human updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Human not found
 *       500:
 *         description: Server Error
 */
router.put("/human/:id", humanCategoryController.updateHuman);

/**
 * @swagger
 * /api/human/{id}:
 *   delete:
 *     tags: [Human]
 *     summary: Delete Human by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Human ID
 *     responses:
 *       204:
 *         description: Human deleted
 *       404:
 *         description: Human not found
 *       500:
 *         description: Server error
 */
router.delete("/human/:id", humanCategoryController.deleteHuman);

module.exports = router;
