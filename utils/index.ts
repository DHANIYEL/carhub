export async function fetchCars() {
  const headers = {
    "x-rapidapi-key": "92d3a26f60msh18d5f52f2fa11d9p150a52jsnaa7e093a53d4",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    }
  );
  const result = await response.json();

  return result;
}
