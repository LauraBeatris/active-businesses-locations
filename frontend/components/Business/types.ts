export interface BusinessProps {
  locationStartDateString?: string;
  locationsNumber?: number;
  badgeText?: string;
  zipCode?: string;
  street?: string;
  name: string;
  city?: string;
}

export interface BusinessDataTextProps {
  label: string;
  value: string | number;
}
