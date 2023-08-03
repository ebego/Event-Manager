export interface Event {
  id?: string;
  title?: string;
  eventDate?: string;
  description?: string;
  banner?: string;
  isPast?: boolean;
  price?: number;
  location?: string;
  maxBooking?: number;
}

export interface User {
  id?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  password?: string
}

