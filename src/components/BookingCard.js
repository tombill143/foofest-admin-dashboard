import React from "react";
import "./BookingCard.css";

const BookingCard = ({ bookings }) => {
  return (
    <div className="booking-card">
      <h2>Buyers Info</h2>
      <div className="name-container">
        <h3>First Name:</h3>
        <p>{bookings.firstname}</p>
      </div>
      <div className="name-container">
        <h3>Last Name:</h3>
        <p>{bookings.lastname}</p>
      </div>
      <div className="name-container">
        <h3>Ticket Holders:</h3>
        <p>{bookings.ticketHolders}</p>
      </div>
      <div className="name-container">
        <h3>Email:</h3>
        <p>{bookings.email}</p>
      </div>
      <p>{bookings.tickeHolders}</p>
      <div className="numTickets">
        {bookings.numTickets} <span className="tickets-text">tickets</span>
      </div>
    </div>
  );
};

export default BookingCard;
