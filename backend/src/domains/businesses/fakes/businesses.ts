import Business from '@domains/businesses/models/Business'

export const fakeOldestBusiness = {
  business_name: 'PALACE OF VENICE GUEST HOME /C',
  location_start_date: '1899-05-15T00:00:00.000'
}

export const fakeBusinesses: Business[] = [
  fakeOldestBusiness,
  {
    business_name: 'VINCENZO LABELLA',
    location_start_date: '1990-01-01T00:00:00.000'
  },
  {
    business_name: 'A A OFICINA CENTRAL HISPANA DE LOS ANGELES /C',
    location_start_date: '1991-01-01T00:00:00.000'
  },
  {
    business_name: 'A A OFICINA CENTRAL HISPANA DE LOS ANGELES /C',
    location_start_date: '1991-01-01T00:00:00.000'
  }
]
