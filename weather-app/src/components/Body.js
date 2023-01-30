import React, { useState } from "react";
import CardHumidity from "./CardHumidity";
import CardTemp from "./CardTemp";
import CardWind from "./CardWInd";
import degree from "../resources/celsius_icon.png";
import CountryJson from "../data/countries_states_cities.json";

export default function Body() {
  const [state_names, setstate_names] = useState([]);
  const [city_names, setcity_names] = useState([]);

  const [SearchVal, setSearchVal] = useState("");
  const [TempInCVal, setTempInCVal] = useState("");
  const [TempInFVal, setTempInFVal] = useState("");
  const [HumidityVal, setHumidityVal] = useState("");
  const [Feelslike_cVal, setFeelslike_cVal] = useState("");
  const [Feelslike_fVal, setfeelslike_fVal] = useState("");
  const [Wind_kphVal, setWind_kphVal] = useState("");
  const [Wind_degreeVal, setWind_degreeVal] = useState("");
  const [Wind_dirVal, setWind_dirVal] = useState("");

  const HandleSubmit = (e) => {
    Apicall(e.target.value);
  };

  const HandleCountryChange = (e) => {
    const country = e.target.value;
    const country_obj = CountryJson.filter((ctry) => ctry.name === country);
    const state = country_obj[0].states;
    setstate_names(state);
  };

  const HandleStateChange = (e) => {
    const state_got = e.target.value;
    console.log(state_names);
    const state_obj = state_names.filter((state) => state.name === state_got);
    setcity_names(state_obj[0].cities);
  };

  const Apicall = async (city) => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "c5c06fe2a2msh9c12825e508c5b7p1b21aajsn0672eedd9686",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };
    await fetch(
      `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}%3CREQUIRED%3E`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setSearchVal(response.location.name);
        setTempInCVal(response.current.temp_c);
        setTempInFVal(response.current.temp_f);
        setHumidityVal(response.current.humidity);
        setFeelslike_cVal(response.current.feelslike_c);
        setfeelslike_fVal(response.current.feelslike_f);
        setWind_kphVal(response.current.wind_kph);
        setWind_degreeVal(response.current.wind_degree);
        setWind_dirVal(response.current.wind_dir);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div style={{ textAlign: "center" }}>
      <nav className="navbar navbar-light bg-light justify-content-between">
        <div className="navbar-brand" href="#">
          Weather App
        </div>
        <div className="form-inline ">
          <select
            className="form-select mx-3"
            aria-label="Default select example"
            onChange={HandleCountryChange}
            style={{ width: "300px" }}
          >
            <option selected disabled>
              Country
            </option>
            {CountryJson.map((user) => (
              <option data-tokens={user.name} value={user.name}>
                {user.name}
              </option>
            ))}
          </select>

          <select
            className="form-select"
            aria-label="Default select example"
            style={{ width: "300px" }}
            onChange={HandleStateChange}
          >
            <option selected disabled>
              State
            </option>
            {state_names.map((user) => (
              <option value={user.name}>{user.name}</option>
            ))}
          </select>

          <select
            className="form-select mx-3"
            aria-label="Default select example"
            onChange={HandleSubmit}
            style={{ width: "300px" }}
          >
            <option selected disabled>
              City
            </option>
            {city_names.map((user) => (
              <option value={user.name}>{user.name}</option>
            ))}
          </select>
          {/* <input
            className="form-control mr-sm-2"
            type="search"
            id="searchInput"
            placeholder="Search"
            aria-label="Search"
          />*/}
          {/* <button
            className="btn btn-outline-success my-2 my-sm-0"
            onClick={HandleSubmit}
          >
            Search
          </button> */}
        </div>
      </nav>
      <h2 style={{ marginTop: "30px" }}>Weather For {SearchVal}</h2>
      <div className="container my-5">
        <div className="row">
          <div className="col">
            <CardTemp
              heading="Temperature"
              btn_text="Sign up for free"
              ip1={degree}
              ip2={TempInCVal}
              ip3={TempInCVal}
              ip4={TempInFVal}
            />
          </div>
          <div className="col">
            <CardHumidity
              heading="Humidity Info"
              btn_text="Get Started"
              ip1={"%"}
              ip2={HumidityVal}
              ip3={Feelslike_cVal}
              ip4={Feelslike_fVal}
            />
          </div>
          <div className="col">
            <CardWind
              heading="Wind Info"
              btn_text="Contact Us"
              ip1={"km/hr"}
              ip2={Wind_kphVal}
              ip3={Wind_degreeVal}
              ip4={Wind_dirVal}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
