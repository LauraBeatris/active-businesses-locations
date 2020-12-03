export enum BusinessFiltersValue {
  MostLocations = "MostLocations",
  Oldest = "Oldest",
  All = "All"
}

export interface BusinessFiltersProps {
  handleBusinessFilterValueChange: (filterValue: BusinessFiltersValue) => void;
  businessFilterValue: BusinessFiltersValue;
}
