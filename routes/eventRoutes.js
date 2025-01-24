const express = require("express");
const router = express.Router();
const eventController = require("../controller/event.controller");

/**
 * @swagger
 * tags:
 *   name: Event
 *   description: Event management
 */

/**
 * @swagger
 * /api/event:
 *  post:
 *     tags: [Event]
 *     summary: Create a new Event
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *               type: object
 *               properties:
 *                  name:
 *                    type: string
 *                  photo:
 *                    type: string
 *                  start_date:
 *                    type: string
 *                    format: date
 *                  start_time:
 *                    type: string
 *                    format: date-time
 *                  finish_date:
 *                    type: string
 *                    format: date
 *                  finish_time:
 *                    type: string
 *                  info:
 *                    type: string
 *                  event_type_id:
 *                    type: integer
 *                  human_category_id:
 *                    type: integer
 *                  venue_id:
 *                    type: integer
 *                  lang_id:
 *                    type: integer
 *                  release_date:
 *                    type: string
 *                    format: date
 *     responses:
 *      201:
 *        description: Event created
 *      400:
 *        description: Invalid input
 *      500:
 *        description: Server error
 */
router.post("/event", eventController.createEvent);

/**
 * @swagger
 * /api/event:
 *   get:
 *     tags: [Event]
 *     summary: Get all Events
 *     responses:
 *       200:
 *         description: List of Events
 *       500:
 *         description: Server error
 */
router.get("/event", eventController.getEvents);

/**
 * @swagger
 * /api/event/{id}:
 *  get:
 *    tags: [Event]
 *    summary: Get Event by ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Event ID
 *    responses:
 *      200:
 *        description: Event details
 *      404:
 *        description: Event not found
 *      500:
 *        description: Server error
 */
router.get("/event/:id", eventController.getEventById);

/**
 * @swagger
 * /api/event/{id}:
 *   put:
 *     tags: [Event]
 *     summary: Update Event by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Event ID
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                  name:
 *                    type: string
 *                  photo:
 *                    type: string
 *                  start_date:
 *                    type: string
 *                    format: date
 *                  start_time:
 *                    type: string
 *                    format: date-time
 *                  finish_date:
 *                    type: string
 *                    format: date
 *                  finish_time:
 *                    type: string
 *                  info:
 *                    type: string
 *                  event_type_id:
 *                    type: integer
 *                  human_category_id:
 *                    type: integer
 *                  venue_id:
 *                    type: integer
 *                  lang_id:
 *                    type: integer
 *                  release_date:
 *                    type: string
 *                    format: date
 *     responses:
 *       200:
 *         description: Event updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Event not found
 *       500:
 *         description: Server Error
 */
router.put("/event/:id", eventController.updateEvent);

/**
 * @swagger
 * /api/event/{id}:
 *   delete:
 *     tags: [Event]
 *     summary: Delete Event by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Event ID
 *     responses:
 *       204:
 *         description: Event deleted
 *       404:
 *         description: Event not found
 *       500:
 *         description: Server error
 */
router.delete("/event/:id", eventController.deleteEvent);

module.exports = router;
