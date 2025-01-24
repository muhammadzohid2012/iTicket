const express = require("express");
const router = express.Router();
const seatTypeController = require("../controller/seat_type.controller");

/**
 * @swagger
 * tags:
 *   name: Seat_Type
 *   description: Seat_Type management
 */

/**
 * @swagger
 * /api/seat_Type:
 *  post:
 *     tags: [Seat_Type]
 *     summary: Create a new Seat_Type
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *               type: object
 *               properties:
 *                  name:
 *                    type: string
 *
 *     responses:
 *      201:
 *        description: Seat_Type created
 *      400:
 *        description: Invalid input
 *      500:
 *        description: Server error
 */
router.post("/seat_Type", seatTypeController.createSeatType);

/**
 * @swagger
 * /api/seat_Type:
 *   get:
 *     tags: [Seat_Type]
 *     summary: Get all Seat_Type
 *     responses:
 *       200:
 *         description: List of Seat_Type
 *       500:
 *         description: Server error
 */
router.get("/seat_Type", seatTypeController.getSeatType);

/**
 * @swagger
 * /api/seat_Type/{id}:
 *  get:
 *    tags: [Seat_Type]
 *    summary: Get Seat_Type by ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Seat_Type ID
 *    responses:
 *      200:
 *        description: Seat_Type details
 *      404:
 *        description: Seat_Type not found
 *      500:
 *        description: Server error
 */
router.get("/seat_Type/:id", seatTypeController.getSeatTypeById);

/**
 * @swagger
 * /api/seat_Type/{id}:
 *   put:
 *     tags: [Seat_Type]
 *     summary: Update Seat_Type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Seat_Type ID
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                name:
 *                  type: string
 *     responses:
 *       200:
 *         description: Seat_Type updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Seat_Type not found
 *       500:
 *         description: Server Error
 */
router.put("/seat_Type/:id", seatTypeController.updateSeatType);

/**
 * @swagger
 * /api/seat_Type/{id}:
 *   delete:
 *     tags: [Seat_Type]
 *     summary: Delete Seat_Type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Seat_Type ID
 *     responses:
 *       204:
 *         description: Venue_Type deleted
 *       404:
 *         description: Venue_Type not found
 *       500:
 *         description: Server error
 */
router.delete("/seat_Type/:id", seatTypeController.deleteSeatType);

module.exports = router;
