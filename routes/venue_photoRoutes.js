const express = require("express");
const router = express.Router();
const venuePhotoController = require("../controller/venue_photo.controller");

/**
 * @swagger
 * tags:
 *   name: VenuePhoto
 *   description: VenuePhoto management
 */

/**
 * @swagger
 * /api/venuePhoto:
 *  post:
 *     tags: [VenuePhoto]
 *     summary: Create a new VenuePhoto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *               type: object
 *               properties:
 *                  venue_id:
 *                    type: number
 *                  url:
 *                    type: string
 *  
 *     responses:
 *      201:
 *        description: VenuePhoto created
 *      400:
 *        description: Invalid input
 *      500:
 *        description: Server error
 */
router.post("/venuePhoto", venuePhotoController.createVenuePhoto);

/**
 * @swagger
 * /api/venuePhoto:
 *   get:
 *     tags: [VenuePhoto]
 *     summary: Get all VenuePhoto
 *     responses:
 *       200:
 *         description: List of Venue
 *       500:
 *         description: Server error
 */
router.get("/venuePhoto", venuePhotoController.getVenuePhoto);

/**
 * @swagger
 * /api/venuePhoto/{id}:
 *  get:
 *    tags: [VenuePhoto]
 *    summary: Get VenuePhoto by ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: VenuePhoto ID
 *    responses:
 *      200:
 *        description: VenuePhoto details
 *      404:
 *        description: VenuePhoto not found
 *      500:
 *        description: Server error
 */
router.get("/venuePhoto/:id", venuePhotoController.getVenuePhotoById);

/**
 * @swagger
 * /api/venuePhoto/{id}:
 *   put:
 *     tags: [VenuePhoto]
 *     summary: Update VenuePhoto by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: VenuePhoto ID
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
*                  venue_id:
 *                    type: number
 *                  url:
 *                    type: string
 *                  
 *     responses:
 *       200:
 *         description: VenuePhoto updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: VenuePhoto not found
 *       500:
 *         description: Server Error
 */
router.put("/venuePhoto/:id", venuePhotoController.updateVenuePhoto);

/**
 * @swagger
 * /api/venuePhoto/{id}:
 *   delete:
 *     tags: [VenuePhoto]
 *     summary: Delete VenuePhoto by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: VenuePhoto ID
 *     responses:
 *       204:
 *         description: VenuePhoto deleted
 *       404:
 *         description: VenuePhoto not found
 *       500:
 *         description: Server error
 */
router.delete("/venuePhoto/:id", venuePhotoController.deleteVenuePhoto);

module.exports = router;
