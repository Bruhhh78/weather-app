import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <>
      <label className="text-3xl font-bold ml-8 p-3">Daily Forecast</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton className="bg-gray-200 rounded-md h-12 m-5 p-2 flex items-center cursor-pointer">
                <img
                  alt="weather"
                  className="w-10"
                  src={`icons/${item.weather[0].icon}.png`}
                />
                <label className="ml-3 font-semibold">
                  {" "}
                  {forecastDays[idx]}
                </label>
                <label className="ml-auto">{item.weather[0].description}</label>
                <label className="text-gray-600">
                  {Math.round(item.main.temp_min)}°C /{" "}
                  {Math.round(item.main.temp_max)}°C{" "}
                </label>
              </AccordionItemButton>
            </AccordionItemHeading>
            <div className="max-w-lg mx-auto p-4">
              {" "}
              <AccordionItemPanel>
                <div className="grid grid-cols-2 gap-4">
                  {" "}
                  <div className="flex items-center">
                    {" "}
                    <label className="text-gray-600">Pressure</label>
                    <label className="ml-auto">{item.main.pressure}hPa</label>
                  </div>
                  <div className="flex items-center">
                    {" "}
                    <label className="text-gray-600">Humidity</label>
                    <label className="ml-auto">{item.main.humidity}%</label>
                  </div>
                  <div className="flex items-center">
                    {" "}
                    <label className="text-gray-600">Clouds</label>
                    <label className="ml-auto">{item.clouds.all}%</label>
                  </div>
                  <div className="flex items-center">
                    {" "}
                    <label className="text-gray-600">Wind Speed:</label>
                    <label className="ml-auto">{item.wind.speed}m/s</label>
                  </div>
                  <div className="flex items-center">
                    {" "}
                    <label className="text-gray-600">Sea level:</label>
                    <label className="ml-auto">{item.main.sea_level}m</label>
                  </div>
                  <div className="flex items-center">
                    {" "}
                    <label className="text-gray-600">Feels like:</label>
                    <label className="ml-auto">
                      {Math.round(item.main.feels_like)}°C{" "}
                    </label>
                  </div>
                </div>
              </AccordionItemPanel>
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
