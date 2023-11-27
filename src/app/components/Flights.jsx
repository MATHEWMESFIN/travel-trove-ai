'use client'
import { useSearchParams } from "next/navigation"
import '../style/Flights.css'

var Amadeus = require('amadeus');

var amadeus = new Amadeus({
  clientId: process.env.NEXT_PUBLIC_AMADEUS_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_AMADEUS_CLIENT_SECRET
});

export default function Flights() {
  const searchParams = useSearchParams()
  var validSearch = true;
  
  const originLocationCode = searchParams.get('originLocationCode');
  const destinationLocationCode = searchParams.get('destinationLocationCode');
  const departureDate = searchParams.get('departureDate');
  const returnDate = searchParams.get('returnDate');
  const adults = searchParams.get('adults')
  const children = searchParams.get('children')
  const infants = searchParams.get('infants')
  const cabin = searchParams.get('cabin')
  const currency = searchParams.get('currency')
  const maxPrice = searchParams.get('maxPrice');

  if (!searchParams.has('originLocationCode') || !searchParams.has('destinationLocationCode') || !searchParams.has('departureDate')) {
    validSearch = false;
  }

  var searchResult;
  if (validSearch) {
    searchResult = amadeus.shopping.flightOffersSearch.get({
        originLocationCode: originLocationCode,
        destinationLocationCode: destinationLocationCode,
        departureDate: departureDate,
        adults: adults
      }).then(function (response) {
        // return a display of the flight results
        return (
          <div>
            <div className="flights-list">
              {response.data.map((flight) => (
                <div className="flight">
                  <h2>{flight.itineraries[0].segments[0].departure.iataCode} to {flight.itineraries[0].segments[0].arrival.iataCode}</h2>
                  <h3>Departure: {flight.itineraries[0].segments[0].departure.at}</h3>
                  <h3>Arrival: {flight.itineraries[0].segments[0].arrival.at}</h3>
                  <h3>Price: {flight.price.grandTotal}</h3>
                </div>
              ))}
            </div>
          </div>
        )
      }).catch(function (responseError) {
        console.log(responseError);
      });

    return (
      <div>
          <h1>Flights</h1>
          <div>
            {searchResult}
          </div>
      </div>
    )
  }
}