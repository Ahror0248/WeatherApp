import searchicon from "./assets/search.png";
import sunny from "./assets/sunny1.svg";
import cloudy from "./assets/cloudy.svg";
import axios from "axios";
import {
  AllSections,
  Container,
  Data,
  Gradus,
  LeftData,
  LeftSection,
  Location,
  Region,
  RightSection,
  Dates,
  SearchInput,
  LocalRegions,
  RegionNames,
  HR,
  Details,
  WeatherText,
  Cloudy,
  Search,
  SearchBox,
  SearchImg,
  Desc,
  DescIcon,
  DescInfo,
  Display,
} from "./AppStyle.js";
import { useEffect, useState } from "react";

const dateBuilder = (d) => {
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();
  let hour = d.getHours();
  let minute = d.getMinutes();

  return ` ${hour}:${minute} - ${day}, ${date} ${month} ${year} `;
};

const apiKey = {
  key: "cb6f1ea58cfe648a4e61cefed12625d8",
  base: "http://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, SetQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState("Tashkent");

  const search = (e) => {
    if (e.key === "Enter") {
      setLocation(query);
    }
  };

  const searchBtn = () => {
    setLocation(query);
  };

  useEffect(() => {
    axios
      .get(
        `${apiKey.base}weather?q=${location}&units=metric&APPID=${apiKey.key}`
      )
      .then((data) => {
        setWeather(data.data);
        SetQuery("");
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, [location]);

  if (!weather.weather) {
    return <span>Loading...</span>;
  }

  return (
    <Container gradus={weather?.main?.temp < 10}>
      <AllSections>
        <RightSection>
          <Data>
            <Gradus>{weather?.main?.temp?.toFixed(0)}°</Gradus>
            <Display>
              <Location>
                <Region>{weather.name}</Region>
                <Dates>{dateBuilder(new Date())}</Dates>
              </Location>
              <Desc>
                <DescIcon
                  src={
                    weather?.weather[0]?.description === "clear sky"
                      ? sunny
                      : cloudy
                  }
                  alt="sunny"
                />
                <DescInfo
                  
                >
                  {weather?.weather[0]?.description === "clear sky"
                    ? "sunny"
                    : "cloudy"}
                </DescInfo>
              </Desc>
            </Display>
          </Data>
        </RightSection>
        <LeftSection>
          <LeftData>
            <Search>
              <SearchInput
                type="text"
                placeholder="Another location"
                onChange={(e) => SetQuery(e.target.value)}
                value={query}
                onKeyPress={search}
              />
              <SearchBox onClick={() => searchBtn()}>
                <SearchImg src={searchicon} alt="search" />
              </SearchBox>
            </Search>
            <LocalRegions>
              <RegionNames onClick={() => setLocation("Toshkent")} first>
                Tashkent
              </RegionNames>
              <RegionNames onClick={() => setLocation("Namangan")}>
                Namangan
              </RegionNames>
              <RegionNames onClick={() => setLocation("Samarqand")}>
                Samarqand
              </RegionNames>
              <RegionNames onClick={() => setLocation("Andijon")}>
                Andijon
              </RegionNames>
              <HR />
              <Details>
                <WeatherText>Weather Details</WeatherText>
                <Cloudy firstdetail>
                  <Cloudy.Text>Cloudy</Cloudy.Text>
                  <Cloudy.Data>{weather?.main?.humidity}%</Cloudy.Data>
                </Cloudy>
                <Cloudy>
                  <Cloudy.Text>Humidity</Cloudy.Text>
                  <Cloudy.Data>{weather?.clouds?.all}%</Cloudy.Data>
                </Cloudy>
                <Cloudy>
                  <Cloudy.Text>Wind</Cloudy.Text>
                  <Cloudy.Data>{weather?.wind?.speed}km/h</Cloudy.Data>
                </Cloudy>
                <Cloudy>
                  <Cloudy.Text>Rain</Cloudy.Text>
                  <Cloudy.Data>{weather?.wind?.deg}mm</Cloudy.Data>
                </Cloudy>
              </Details>
              <HR margin />
            </LocalRegions>
          </LeftData>
        </LeftSection>
      </AllSections>
    </Container>
  );
}

export default App;
