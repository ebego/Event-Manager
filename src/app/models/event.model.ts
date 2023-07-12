export interface Event {
  id?: number;
  title?: string;
  eventDate?: string;
  description?: string;
  banner?: string;
  isPast?: boolean;
  price?: number;
  location?: string
}

export interface User {
  id?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  password?: string
}

