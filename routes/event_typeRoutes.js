const express = require("express");
const router = express.Router();
const eventTypeController = require("../controller/event_type.controller");

/**
 * @swagger
 * tags:
 *   name: Event_Type
 *   description: Event_Type management
 */

/**
 * @swagger
 * /api/event_type:
 *  post:
 *     tags: [Event_Type]
 *     summary: Create a new Event_Type
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *               type: object
 *               properties:
 *                  name:
 *                    type: string
 *                  parent_event_type_id:
 *                    type: number
 *          
 *     responses:
 *      201:
 *        description: Event_Type created
 *      400:
 *        description: Invalid input
 *      500:
 *        description: Server error
 */
router.post("/event_type", eventTypeController.createEventType);

/**
 * @swagger
 * /api/customer:
 *   get:
 *     tags: [Event_Type]
 *     summary: Get all Event_Type
 *     responses:
 *       200:
 *         description: List of Event_Type
 *       500:
 *         description: Server error
 */
router.get("/customer", eventTypeController.getEventTypes);

/**
 * @swagger
 * /api/event_types/{id}:
 *  get:
 *    tags: [Event_Type]
 *    summary: Get Event_Type by ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: event_type ID
 *    responses:
 *      200:
 *        description: Event_Type details
 *      404:
 *        description: Event_Type not found
 *      500:
 *        description: Server error
 */
router.get("/event_types/:id", eventTypeController.getEventTypeById);

/**
 * @swagger
 * /api/event_types/{id}:
 *   put:
 *     tags: [Event_Type]
 *     summary: Update Event_Type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Event_Type ID
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                  name:
 *                    type: string
 *                  parent_event_type_id:
 *                    type: number
 *     responses:
 *       200:
 *         description: Event_Type updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Event_Type not found
 *       500:
 *         description: Server Error
 */
router.put("/event_types/:id", eventTypeController.updateEventType);

/**
 * @swagger
 * /api/event_types/{id}:
 *   delete:
 *     tags: [Event_Type]
 *     summary: Delete Event_Type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Event_Type ID
 *     responses:
 *       204:
 *         description: Event_Type deleted
 *       404:
 *         description: Event_Type not found
 *       500:
 *         description: Server error
 */
router.delete("/event_types/:id", eventTypeController.deleteEventType);

module.exports = router;
