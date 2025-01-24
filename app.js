const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv"); 
const { sequelize } = require("./models");
const setupSwagger = require("./swagger/swagger");

const Admin = require("./routes/adminRoutes");
const Booking = require("./routes/bookingRoute");
const Cart = require("./routes/cartRoutes");
const Country = require("./routes/countryRoutes");
const Address = require("./routes/customerAddressRoutes");
const CustomerCart = require("./routes/customerCardRoutes");
const Customer = require("./routes/customerRoutes");
const Deliver = require("./routes/deliveryRoutes");
const Discount = require("./routes/discountRoutes");
const Distract = require("./routes/distractRoutes");
const Event_type = require("./routes/event_typeRoutes");
const Event = require("./routes/eventRoutes");
const Flat = require("./routes/flatRoutes");
const Gender = require("./routes/genderRoutes");
const Human = require("./routes/human_categoryRoutes");
const Language = require("./routes/languageRoutes");
const Payment = require("./routes/paymentRoutes");
const Region = require("./routes/regionRoutes");
const Seat_type = require("./routes/seat_typeRoutes");
const Seat = require("./routes/seatRoutes");
const Sector = require("./routes/sectorRoutes");
const Status = require("./routes/statusRoutes");
const Ticket = require("./routes/ticketRoutes");
const Venue_photo = require("./routes/venue_photoRoutes");
const Venue_type = require("./routes/venueTypeRoutes");
const Venue = require("./routes/venueRoutes");

dotenv.config();

const app = express();

app.use(express.json()) ;
app.use(cors()) ;

setupSwagger(app);

app.use("/api", Admin);
app.use("/api", Booking);
app.use("/api", Cart);
app.use("/api", Country);
app.use("/api", Address);
app.use("/api", CustomerCart);
app.use("/api", Customer);
app.use("/api", Deliver);
app.use("/api", Discount);
app.use("/api", Distract);
app.use("/api", Event_type);
app.use("/api", Event);
app.use("/api", Flat);
app.use("/api", Gender);
app.use("/api", Human);
app.use("/api", Language);
app.use("/api", Payment);
app.use("/api", Region);
app.use("/api", Seat_type);
app.use("/api", Seat);
app.use("/api", Sector);
app.use("/api", Status);
app.use("/api", Ticket);
app.use("/api", Venue_photo);
app.use("/api", Venue_type);
app.use("/api", Venue);

sequelize.sync().then(() => {
  const PORT = process.env.PORT || 3333;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
