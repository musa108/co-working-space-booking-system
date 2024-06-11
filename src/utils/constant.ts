// utils/constants.ts
type DeskType = 'individual' | 'team';

export const DESKS: { id: number; type: DeskType; booked: boolean }[] = [
  { id: 1, type: 'individual', booked: false },
  { id: 2, type: 'individual', booked: false },
  { id: 3, type: 'individual', booked: false },
  { id: 4, type: 'individual', booked: false },
  { id: 5, type: 'individual', booked: false },
  { id: 6, type: 'individual', booked: false },
  { id: 7, type: 'individual', booked: false },
  { id: 8, type: 'individual', booked: false },
  { id: 9, type: 'individual', booked: false },
  { id: 10, type: 'individual', booked: false },
  { id: 11, type: 'team', booked: false },
  { id: 12, type: 'team', booked: false },
  { id: 13, type: 'team', booked: false },
  { id: 14, type: 'team', booked: false },
  { id: 15, type: 'team', booked: false },
];

  
  export const MEMBERSHIP_PRICING = {
    Basic: 10,
    Premium: 15,
    Executive: 20,
  };
  
