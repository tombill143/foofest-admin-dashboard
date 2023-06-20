import supabase from "../config/supabaseClient";
import { useEffect, useState } from "react";

// components
import BookingCard from "../components/BookingCard";

const Home = () => {
  const [fetchError, setFetchError] = useState(null);
  const [bookings, setBookings] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      const { data, error } = await supabase.from("bookings").select();

      if (error) {
        setFetchError("Could not fetch the bookings");
        setBookings(null);
      }
      if (data) {
        setBookings(data);
        setFetchError(null);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="page home">
      {fetchError && <p>{fetchError}</p>}
      {bookings && (
        <div className="bookings">
          {/* order-by buttons */}
          <div className="booking-grid">
            {bookings.map((bookings) => (
              <BookingCard key={bookings.id} bookings={bookings} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
