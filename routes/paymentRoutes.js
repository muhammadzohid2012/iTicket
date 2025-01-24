const express = require("express");
const router = express.Router();
const paymentController = require("../controller/payment.controller");

/**
 * @swagger
 * tags:
 *   name: Payment
 *   description: Payment management
 */

/**
 * @swagger
 * /api/payment:
 *  post:
 *     tags: [Payment]
 *     summary: Create a new Payment
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *               type: object
 *               properties:
 *                  name:
 *                    type: string
 *     responses:
 *      201:
 *        description: Payment created
 *      400:
 *        description: Invalid input
 *      500:
 *        description: Server error
 */
router.post("/payment", paymentController.createPayment);

/**
 * @swagger
 * /api/payment:
 *   get:
 *     tags: [Payment]
 *     summary: Get all Payments
 *     responses:
 *       200:
 *         description: List of Payments
 *       500:
 *         description: Server error
 */
router.get("/payment", paymentController.getPayments);

/**
 * @swagger
 * /api/payment/{id}:
 *  get:
 *    tags: [Payment]
 *    summary: Get Payment by ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Payment ID
 *    responses:
 *      200:
 *        description: Payment details
 *      404:
 *        description: Payment not found
 *      500:
 *        description: Server error
 */
router.get("/payment/:id", paymentController.getPaymentById);

/**
 * @swagger
 * /api/payment/{id}:
 *   put:
 *     tags: [Payment]
 *     summary: Update Payment by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Payment ID
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                  name:
 *                    type: string
 *     responses:
 *       200:
 *         description: Payment updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Payment not found
 *       500:
 *         description: Server Error
 */
router.put("/payment/:id", paymentController.updatePayment);

/**
 * @swagger
 * /api/payment/{id}:
 *   delete:
 *     tags: [Payment]
 *     summary: Delete Payment by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Payment ID
 *     responses:
 *       204:
 *         description: Payment deleted
 *       404:
 *         description: Payment not found
 *       500:
 *         description: Server error
 */
router.delete("/payment/:id", paymentController.deletePayment);

module.exports = router;
