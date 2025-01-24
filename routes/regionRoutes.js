const express = require('express');
const router = express.Router();
const regionController = require("../controller/region.controller");


/**
 * @swagger
 * tags:
 *    name: Region
 *    description: region management
 */

/**
 * @swagger
 * /api/getRegion:
 *   get:
 *     summary: Get all region
 *     tags: [region]
 *     responses:
 *       200:
 *         description: List of all region
 *       500:
 *         description: Invalid JSON response
 *       404:
 *         description: not found    
 */
router.get('/getRegion', regionController.getRegion )

/**
 * @swagger
 * /api/getRegion/{id}:
 *   get:
 *     summary: Get a specific region 
 *     tags: [region]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: region found
 *       404:
 *         description: region not found
 *       500: 
 *         description: server error 
 */
router.get('/getRegion/:id', regionController.getRegionById)

/**
 * @swagger
 * /api/createRegion:
 *   post:
 *     summary: Create a new region
 *     tags: [region]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               postpone:
 *                 type: integer
 *     responses:
 *       201:
 *         description: region created
 *       404: 
 *         description: region not found
 *       500: 
 *         description: server error
 */
router.post("/createRegion", regionController.createRegion )

/**
 * @swagger
 * /api/updateRegion/{id}:
 *   put:
 *     tags: [region]
 *     summary: Update Region by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Region ID
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *               name:
 *                 type: string
 *               postpone:
 *                 type: integer
 *
 *     responses:
 *       200:
 *         description: Region updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Region not found
 *       500:
 *         description: Server Error
 */
router.put('/updateRegion/:id', regionController.updateRegion)



/**
 * @swagger
 * /api/deleteRegion/{id}:
 *   delete:
 *     summary: Delete a region
 *     tags: [region]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the region to delete
 *     responses:
 *       200:
 *         description: region deleted
 *       404:
 *         description3A: region not found
 */

router.delete('/deleteRegion/:id', regionController.deleteRegion)

module.exports = router;
