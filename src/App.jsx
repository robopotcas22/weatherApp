import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [country, setCountry] = useState();
  const [days, setDays] = useState([]);
  useEffect(() => {
    const urlIp = "http://ip-api.com/json/";
    const optionsIp = {
      method: "GET",
    };
    fetch(urlIp, optionsIp)
      .then((res) => res.json())
      .then((response) => {
        setLat(response.lat);
        setLon(response.lon);
        setCountry(response.city);
      });
  }, []);

  useEffect(() => {
    if (lat && lon) {
      const urlWeather = `https://easy-weather1.p.rapidapi.com/daily/5?latitude=${lat}&longitude=${lon}`;
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "5fdc39144emshaa9bd53da48a37cp186589jsna3a63fe8392b",
          "x-rapidapi-host": "easy-weather1.p.rapidapi.com",
        },
      };

      fetch(urlWeather, options)
        .then((res) => res.json())
        .then((data) => {
          setDays(data.forecastDaily.days);
          console.log(data);
        });
    }
  }, [lat, lon]);
  console.log(days[0]);
  return (
    <section className="appBody">
      <h2>{country ? "El Clima en " + country : "Cargando..."}</h2>

      <article className="weatherContainer">
        {days.length > 0 ? (
          <>
            <section className="weatherCard">
              <h3>{days[0]?.forecastStart?.slice(8, 10)}</h3>
              <p>Condición: {days[0]?.conditionCode}</p>
              <p>Max: {Math.floor(days[0]?.temperatureMax)}</p>
              <p>Min: {Math.floor(days[0]?.temperatureMin)}</p>
            </section>
            <section className="weatherCard">
              <h3>{days[1]?.forecastStart?.slice(8, 10)}</h3>
              <p>Condición: {days[1]?.conditionCode}</p>
              <p>Max: {Math.floor(days[1]?.temperatureMax)}</p>
              <p>Min: {Math.floor(days[1]?.temperatureMin)}</p>
            </section>
            <section className="weatherCard">
              <h3>{days[2]?.forecastStart?.slice(8, 10)}</h3>
              <p>Condición: {days[2]?.conditionCode}</p>
              <p>Max: {Math.floor(days[2]?.temperatureMax)}</p>
              <p>Min: {Math.floor(days[2]?.temperatureMin)}</p>
            </section>
            <section className="weatherCard">
              <h3>{days[3]?.forecastStart?.slice(8, 10)}</h3>
              <p>Condición: {days[3]?.conditionCode}</p>
              <p>Max: {Math.floor(days[3]?.temperatureMax)}</p>
              <p>Min: {Math.floor(days[3]?.temperatureMin)}</p>
            </section>
            <section className="weatherCard">
              <h3>{days[4]?.forecastStart?.slice(8, 10)}</h3>
              <p>Condición: {days[4]?.conditionCode}</p>
              <p>Max: {Math.floor(days[4]?.temperatureMax)}</p>
              <p>Min: {Math.floor(days[4]?.temperatureMin)}</p>
            </section>
          </>
        ) : null}
      </article>
    </section>
  );
}

export default App;
