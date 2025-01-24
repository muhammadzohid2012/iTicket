const express = require("express");
const router = express.Router();
const venueTypeController = require("../controller/venue_type.controller");

/**
 * @swagger
 * tags:
 *   name: Venue_Type
 *   description: Venue_Type management
 */

/**
 * @swagger
 * /api/venue_Type:
 *  post:
 *     tags: [Venue_Type]
 *     summary: Create a new Venue_Type
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
 *        description: Venue_Type created
 *      400:
 *        description: Invalid input
 *      500:
 *        description: Server error
 */
router.post("/venue_Type", venueTypeController.createVenueType);

/**
 * @swagger
 * /api/venue_Type:
 *   get:
 *     tags: [Venue_Type]
 *     summary: Get all Venue_Type
 *     responses:
 *       200:
 *         description: List of Venue_Type
 *       500:
 *         description: Server error
 */
router.get("/venue_Type", venueTypeController.getVenueType);

/**
 * @swagger
 * /api/venue_Type/{id}:
 *  get:
 *    tags: [Venue_Type]
 *    summary: Get Venue_Type by ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Venue_Type ID
 *    responses:
 *      200:
 *        description: Venue_Type details
 *      404:
 *        description: Venue_Type not found
 *      500:
 *        description: Server error
 */
router.get("/venue_Type/:id", venueTypeController.getVenueTypeById);

/**
 * @swagger
 * /api/venue_Type/{id}:
 *   put:
 *     tags: [Venue_Type]
 *     summary: Update Venue_Type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Venue_Type ID
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                  name:
 *                    type: string
 *                  
 *     responses:
 *       200:
 *         description: Venue_Type updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Venue_Type not found
 *       500:
 *         description: Server Error
 */
router.put("/venue_Type/:id", venueTypeController.updateVenueType);

/**
 * @swagger
 * /api/venue_Type/{id}:
 *   delete:
 *     tags: [Venue_Type]
 *     summary: Delete Venue_Type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Venue_Type ID
 *     responses:
 *       204:
 *         description: Venue_Type deleted
 *       404:
 *         description: Venue_Type not found
 *       500:
 *         description: Server error
 */
router.delete("/venue_Type/:id", venueTypeController.deleteVenueType);

module.exports = router;
