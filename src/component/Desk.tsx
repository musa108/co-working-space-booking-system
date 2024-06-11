// components/Desk.tsx
import React from 'react';
import classNames from 'classnames';

type DeskProps = {
  id: number;
  type: 'individual' | 'team';
  booked: boolean;
  onClick: (id: number) => void;
};

const Desk: React.FC<DeskProps> = ({ id, type, booked, onClick }) => {
  const deskClass = classNames(
    'w-24 h-24 sm:w-28 sm:h-28 m-2 flex items-center justify-center cursor-pointer rounded-lg',
    {
      'bg-red-500 text-white': booked,
      'bg-green-500 text-white hover:bg-green-600': !booked,
      'cursor-not-allowed': booked,
    }
  );

  return (
    <div className={deskClass} onClick={() => !booked && onClick(id)}>
      {type === 'individual' ? 'I' : 'T'}-{id}
    </div>
  );
};

export default Desk;
