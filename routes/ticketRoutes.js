const express = require("express");
const router = express.Router();
const ticketController = require("../controller/ticket.controller");

/**
 * @swagger
 * tags:
 *   name: Ticket
 *   description: Ticket management
 */

/**
 * @swagger
 * /api/ticket:
 *  post:
 *     tags: [Ticket]
 *     summary: Create a new Ticket
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *               type: object
 *               properties:
 *                  event_id:
 *                    type: number
 *                  seat_id:
 *                    type: number
 *                  price:
 *                    type: number
 *                  service_fee:
 *                    type: number
 *                  status_id:
 *                    type: number
 *                  ticket_type:
 *                    type: string
 *     responses:
 *      201:
 *        description: Ticket created
 *      400:
 *        description: Invalid input
 *      500:
 *        description: Server error
 */
router.post("/ticket", ticketController.createTicket);

/**
 * @swagger
 * /api/ticket:
 *   get:
 *     tags: [Ticket]
 *     summary: Get all Tickets
 *     responses:
 *       200:
 *         description: List of Tickets
 *       500:
 *         description: Server error
 */
router.get("/ticket", ticketController.getTickets);

/**
 * @swagger
 * /api/ticket/{id}:
 *  get:
 *    tags: [Ticket]
 *    summary: Get Ticket by ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Ticket ID
 *    responses:
 *      200:
 *        description: Ticket details
 *      404:
 *        description: Ticket not found
 *      500:
 *        description: Server error
 */
router.get("/ticket/:id", ticketController.getTicketById);

/**
 * @swagger
 * /api/ticket/{id}:
 *   put:
 *     tags: [Ticket]
 *     summary: Update Ticket by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Ticket ID
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                  event_id:
 *                    type: number
 *                  seat_id:
 *                    type: number
 *                  price:
 *                    type: number
 *                  service_fee:
 *                    type: number
 *                  status_id:
 *                    type: number
 *                  ticket_type:
 *                    type: string
 *     responses:
 *       200:
 *         description: Ticket updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Ticket not found
 *       500:
 *         description: Server Error
 */
router.put("/ticket/:id", ticketController.updateTicket);

/**
 * @swagger
 * /api/ticket/{id}:
 *   delete:
 *     tags: [Ticket]
 *     summary: Delete Ticket by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Ticket ID
 *     responses:
 *       204:
 *         description: Ticket deleted
 *       404:
 *         description: Ticket not found
 *       500:
 *         description: Server error
 */
router.delete("/ticket/:id", ticketController.deleteTicket);

module.exports = router;
