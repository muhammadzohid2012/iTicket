const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const EventType = require("./event_type.model")(sequelize, Sequelize);
const VenueType = require("./venueType.model")(sequelize, Sequelize);
const Human = require("./human_category.model")(sequelize, Sequelize);
const SeatType = require("./seat_type.model")(sequelize, Sequelize);
const Region = require("./region.model")(sequelize, Sequelize);
const Gender = require("./gender.model")(sequelize, Sequelize);
const Venue = require("./venue.model")(sequelize, Sequelize);
const VenuePhoto = require("./venue_photo.model")(sequelize, Sequelize);
const Admin = require("./admin.model")(sequelize, Sequelize);
const Seat = require("./seat.model")(sequelize, Sequelize);
const Event = require("./event.model")(sequelize, Sequelize);
const Ticket = require("./ticket.model")(sequelize, Sequelize);
const Cart = require("./cart.model")(sequelize, Sequelize);
const Customer = require("./customer.model")(sequelize, Sequelize);
const Booking = require("./booking.model")(sequelize, Sequelize);
const CustomerAddress = require("./customer_address.model")(sequelize, Sequelize);
const CustomerCard = require("./customerCard.model")(sequelize, Sequelize);
const Status = require("./status.model")(sequelize, Sequelize);
const Country = require("./country.model")(sequelize, Sequelize);
const Delivery = require("./deliver.model")(sequelize, Sequelize);
const Discount = require("./discount.model")(sequelize, Sequelize);
const Distract = require("./district.model")(sequelize, Sequelize);
const Language = require("./language.model")(sequelize, Sequelize);
const Flat = require("./flat.model")(sequelize, Sequelize);
const Sector = require("./sector.model")(sequelize, Sequelize);
const Payment = require("./payment.model")(sequelize, Sequelize);

Gender.associate(sequelize.models);
Human.associate(sequelize.models);
SeatType.associate(sequelize.models);
Seat.associate(sequelize.models);
VenueType.associate(sequelize.models);
Venue.associate(sequelize.models);
VenuePhoto.associate(sequelize.models);
Cart.associate(sequelize.models);
Customer.associate(sequelize.models);
Ticket.associate(sequelize.models);
Booking.associate(sequelize.models);
EventType.associate(sequelize.models);
Event.associate(sequelize.models);
Status.associate(sequelize.models);
Region.associate(sequelize.models);
Country.associate(sequelize.models);
Discount.associate(sequelize.models);
Delivery.associate(sequelize.models);
Distract.associate(sequelize.models);
Language.associate(sequelize.models);
Payment.associate(sequelize.models);
CustomerAddress.associate(sequelize.models);
CustomerCard.associate(sequelize.models);
Flat.associate(sequelize.models);
Sector.associate(sequelize.models);


module.exports = {
  EventType,
  VenueType,
  Gender,
  Human,
  SeatType,
  Region,
  sequelize,
  Venue,
  VenuePhoto,
  Admin,
  Seat,
  Region,
  Event,
  Ticket,
  Cart,
  Customer,
  Booking,
  CustomerAddress,
  CustomerCard,
  Status,
  Country,
  Delivery,
  Discount,
  Distract,
  Language,
  Flat,
  Sector,
  Payment
};
