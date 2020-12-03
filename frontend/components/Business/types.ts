export interface BusinessProps {
  name: string;
  city?: string;
  street?: string;
  zipCode?: string;
  badgeText?: string;
  locationsNumber?: number;
}

export interface BusinessDataTextProps {
  label: string;
  value: string | number;
}
