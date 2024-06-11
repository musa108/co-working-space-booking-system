'use client'
import React, { useState } from 'react';
import Desk from '../component/Desk';
import BookingForm from '../component/BookingForm';
import Dashboard from '../component/Dashboard';
import { DESKS, MEMBERSHIP_PRICING } from '../utils/constant';

const IndexPage: React.FC = () => {
  const [desks, setDesks] = useState(DESKS);
  const [revenue, setRevenue] = useState({ Basic: 0, Premium: 0, Executive: 0, Team: 0 });
  const [selectedDesk, setSelectedDesk] = useState<number | null>(null);

  const handleBooking = (id: number, hours: number, membership: 'Basic' | 'Premium' | 'Executive' = 'Basic') => {
    setDesks(desks.map(desk => desk.id === id ? { ...desk, booked: true } : desk));

    let cost = 0;
    const deskType = desks.find(desk => desk.id === id)?.type;

    if (deskType === 'individual') {
      cost = MEMBERSHIP_PRICING[membership] * hours;
      setRevenue({ ...revenue, [membership]: revenue[membership] + cost });
    } else {
      cost = 25 * hours;
      setRevenue({ ...revenue, Team: revenue.Team + cost });
    }

    if (hours > 3) {
      cost *= 0.9;
    }

    alert(`Desk ${id} booked for ${hours} hours. Total cost: $${cost.toFixed(2)}`);
    setSelectedDesk(null);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-4xl my-4 font-bold">Co-working Space Booking System</h1>
      <div className="flex flex-wrap max-w-4xl justify-center mb-8">
        {desks.map(desk => (
          <Desk
            key={desk.id}
            id={desk.id}
            type={desk.type}
            booked={desk.booked}
            onClick={(id) => setSelectedDesk(id)}
          />
        ))}
      </div>
      {selectedDesk && (
        <BookingForm
          deskId={selectedDesk}
          deskType={desks.find(desk => desk.id === selectedDesk)?.type || 'individual'}
          onSubmit={handleBooking}
        />
      )}
      <Dashboard revenue={revenue} />
    </div>
  );
};

export default IndexPage;
