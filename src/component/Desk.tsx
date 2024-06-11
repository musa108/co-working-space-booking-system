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
    'deskClass',
    {
      'booked': booked,
      'not-booked': !booked,
      'cursor-disabled': booked,
    }
  );

  return (
    <div className={deskClass} onClick={() => !booked && onClick(id)}>
      {type === 'individual' ? 'I' : 'T'}-{id}
    </div>
  );
};

export default Desk;
