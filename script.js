const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3209f8fe5fmsha35fa2b6ffb9952p1197e5jsnefcb8628ea56",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
