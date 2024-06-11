// components/BookingForm.tsx
import React, { useState } from 'react';

type BookingFormProps = {
  deskId: number;
  deskType: 'individual' | 'team';
  onSubmit: (id: number, hours: number, membership?: 'Basic' | 'Premium' | 'Executive') => void;
};

const BookingForm: React.FC<BookingFormProps> = ({ deskId, deskType, onSubmit }) => {
  const [hours, setHours] = useState(1);
  const [membership, setMembership] = useState<'Basic' | 'Premium' | 'Executive'>('Basic');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(deskId, hours, membership);
  };

  return (
    <div className="booking">
      <h2 className="booking-header">Booking Desk {deskId}</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <label className="flex flex-col">
          <span className="mb-1">Hours:</span>
          <input
            type="number"
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
            min="1"
            className="input"
          />
        </label>
        {deskType === 'individual' && (
          <label className="flex flex-col">
            <span className="mb-1">Membership:</span>
            <select
              value={membership}
              onChange={(e) => setMembership(e.target.value as 'Basic' | 'Premium' | 'Executive')}
              className="input"
            >
              <option value="Basic">Basic</option>
              <option value="Premium">Premium</option>
              <option value="Executive">Executive</option>
            </select>
          </label>
        )}
        <button type="submit" className="button">
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
