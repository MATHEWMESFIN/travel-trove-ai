'use client'
import { useSearchParams } from "next/navigation"

var Amadeus = require('amadeus');

var amadeus = new Amadeus({
  clientId: process.env.AMADEUS_CLIENT_ID,
  clientSecret: process.env.AMADEUS_CLIENT_SECRET
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

  var res = "Invalid Search";
  if (validSearch) {
    res = amadeus.shopping.flightOffersSearch.get({
      originLocationCode: originLocationCode,
      destinationLocationCode: destinationLocationCode,
      departureDate: departureDate,
      adults: adults
    }).then(function (response) {
      console.log(response);
      return JSON.stringify(response.data);   //=> The data attribute taken from the result
    }).catch(function (response) {
      console.error(response);
    });
  }

  return (
    <div>
        <h1>Flights</h1>
        <p>{res}</p>
    </div>
  )
}