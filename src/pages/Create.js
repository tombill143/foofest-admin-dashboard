import { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../config/supabaseClient";
import BackToHomeButton from "../components/BackToHomeButton";

const Create = () => {
  const navigate = useNavigate();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [ticketHolders, setTicketHolders] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [numTickets, setNumTickets] = useState("");
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !firstname ||
      !lastname ||
      !ticketHolders ||
      !email ||
      !address ||
      !numTickets
    ) {
      setFormError("Please fill in all the fields correctly.");
      return;
    }

    const { data, error } = await supabase
      .from("bookings")
      .insert([
        { firstname, lastname, ticketHolders, email, address, numTickets },
      ]);

    if (error) {
      console.log(error);
      setFormError("Please fill in all the fields correctly.");
    }
    if (data) {
      console.log(data);
      setFormError(null);
      navigate("/");
    }
  };

  return (
    <div className="page create">
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">First Name:</label>
        <input
          type="text"
          id="firstname"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />

        <label htmlFor="lastname">Last Name:</label>
        <input
          type="text"
          id="lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />

        <label htmlFor="ticketHolders">TicketHolders:</label>
        <textarea
          id="ticketHolders"
          value={ticketHolders}
          onChange={(e) => setTicketHolders(e.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <textarea
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="email">Address:</label>
        <textarea
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <label htmlFor="numTickets">Number of Tickets:</label>
        <input
          type="number"
          id="numtickets"
          value={numTickets}
          onChange={(e) => setNumTickets(e.target.value)}
        />

        <button>Create Festival Booking</button>
        {formError && <p className="error">{formError}</p>}
        <BackToHomeButton />
      </form>
    </div>
  );
};

export default Create;
