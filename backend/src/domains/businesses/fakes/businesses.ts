import Business from '@domains/businesses/models/Business'

export const fakeOldestBusiness = {
  business_name: 'PALACE OF VENICE GUEST HOME /C',
  location_start_date: '1899-05-15T00:00:00.000'
}

export const fakeBusinessWithMostLocations = {
  business_name: 'A OFICINA CENTRAL HISPANA DE LOS ANGELES /C',
  locations_count: 2
}

const { business_name } = fakeBusinessWithMostLocations

export const fakeBusinesses: Business[] = [
  fakeOldestBusiness,
  {
    business_name,
    location_start_date: '1991-01-01T00:00:00.000'
  },
  {
    business_name,
    location_start_date: '1991-01-01T00:00:00.000'
  },
  {
    business_name: 'VINCENZO LABELLA',
    location_start_date: '1990-01-01T00:00:00.000'
  }
]
