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
    <div className="flex flex-col w-full max-w-md m-5 p-6 border border-gray-300 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl mb-4 font-semibold">Booking Desk {deskId}</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <label className="flex flex-col">
          <span className="mb-1">Hours:</span>
          <input
            type="number"
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
            min="1"
            className="p-2 border border-gray-300 rounded"
          />
        </label>
        {deskType === 'individual' && (
          <label className="flex flex-col">
            <span className="mb-1">Membership:</span>
            <select
              value={membership}
              onChange={(e) => setMembership(e.target.value as 'Basic' | 'Premium' | 'Executive')}
              className="p-2 border border-gray-300 rounded"
            >
              <option value="Basic">Basic</option>
              <option value="Premium">Premium</option>
              <option value="Executive">Executive</option>
            </select>
          </label>
        )}
        <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
