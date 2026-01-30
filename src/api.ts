import { AirPollutionSchema } from "./schemas/airPollutionSchema";
import { geocodeSchema } from "./schemas/geocodeSchema";
import { WeatherResponseSchema } from "./schemas/weatherSchemas";

const API_KEY = import.meta.env.VITE_API_KEY;

const mockData = {
  lat: 33.44,
  lon: -94.04,
  timezone: "America/Chicago",
  timezone_offset: -18000,

  current: {
    dt: 1684929490,
    sunrise: 1684926645,
    sunset: 1684977332,
    temp: 292.55,
    feels_like: 292.87,
    pressure: 1014,
    humidity: 89,
    dew_point: 290.69,
    uvi: 0.16,
    clouds: 53,
    visibility: 10000,
    wind_speed: 3.13,
    wind_deg: 93,
    wind_gust: 6.71,
    weather: [
      {
        id: 803,
        main: "Clouds",
        description: "broken clouds",
        icon: "04d",
      },
    ],
  },

  hourly: [
    {
      dt: 1684926000,
      temp: 292.01,
      feels_like: 292.33,
      pressure: 1014,
      humidity: 91,
      dew_point: 290.51,
      uvi: 0,
      clouds: 54,
      visibility: 10000,
      wind_speed: 2.58,
      wind_deg: 86,
      wind_gust: 5.88,
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      pop: 0.15,
    },
  ],

  daily: [
    {
      dt: 1684951200,
      sunrise: 1684926645,
      sunset: 1684977332,
      moonrise: 1684941060,
      moonset: 1684905480,
      moon_phase: 0.16,
      summary: "Expect a day of partly cloudy with rain",

      temp: {
        day: 299.03,
        min: 290.69,
        max: 300.35,
        night: 291.45,
        eve: 297.51,
        morn: 292.55,
      },

      feels_like: {
        day: 299.21,
        night: 291.37,
        eve: 297.86,
        morn: 292.87,
      },

      pressure: 1016,
      humidity: 59,
      dew_point: 290.48,
      wind_speed: 3.98,
      wind_deg: 76,
      wind_gust: 8.92,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: 92,
      pop: 0.47,
      rain: 0.15,
      uvi: 9.23,
    },
    {
      dt: 1685023200,
      sunrise: 1684926645,
      sunset: 1684977332,
      moonrise: 1684941060,
      moonset: 1684905480,
      moon_phase: 0.16,
      summary: "Expect a day of partly cloudy with rain",

      temp: {
        day: 299.03,
        min: 290.69,
        max: 300.35,
        night: 291.45,
        eve: 297.51,
        morn: 292.55,
      },

      feels_like: {
        day: 299.21,
        night: 291.37,
        eve: 297.86,
        morn: 292.87,
      },

      pressure: 1016,
      humidity: 59,
      dew_point: 290.48,
      wind_speed: 3.98,
      wind_deg: 76,
      wind_gust: 8.92,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: 92,
      pop: 0.47,
      rain: 0.15,
      uvi: 9.23,
    },
    {
      dt: 1685109600,
      sunrise: 1684926645,
      sunset: 1684977332,
      moonrise: 1684941060,
      moonset: 1684905480,
      moon_phase: 0.16,
      summary: "Expect a day of partly cloudy with rain",

      temp: {
        day: 299.03,
        min: 290.69,
        max: 300.35,
        night: 291.45,
        eve: 297.51,
        morn: 292.55,
      },

      feels_like: {
        day: 299.21,
        night: 291.37,
        eve: 297.86,
        morn: 292.87,
      },

      pressure: 1016,
      humidity: 59,
      dew_point: 290.48,
      wind_speed: 3.98,
      wind_deg: 76,
      wind_gust: 8.92,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: 92,
      pop: 0.47,
      rain: 0.15,
      uvi: 9.23,
    },
    {
      dt: 1685196000,
      sunrise: 1684926645,
      sunset: 1684977332,
      moonrise: 1684941060,
      moonset: 1684905480,
      moon_phase: 0.16,
      summary: "Expect a day of partly cloudy with rain",

      temp: {
        day: 299.03,
        min: 290.69,
        max: 300.35,
        night: 291.45,
        eve: 297.51,
        morn: 292.55,
      },

      feels_like: {
        day: 299.21,
        night: 291.37,
        eve: 297.86,
        morn: 292.87,
      },

      pressure: 1016,
      humidity: 59,
      dew_point: 290.48,
      wind_speed: 3.98,
      wind_deg: 76,
      wind_gust: 8.92,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: 92,
      pop: 0.47,
      rain: 0.15,
      uvi: 9.23,
    },
    {
      dt: 1685282400,
      sunrise: 1684926645,
      sunset: 1684977332,
      moonrise: 1684941060,
      moonset: 1684905480,
      moon_phase: 0.16,
      summary: "Expect a day of partly cloudy with rain",

      temp: {
        day: 299.03,
        min: 290.69,
        max: 300.35,
        night: 291.45,
        eve: 297.51,
        morn: 292.55,
      },

      feels_like: {
        day: 299.21,
        night: 291.37,
        eve: 297.86,
        morn: 292.87,
      },

      pressure: 1016,
      humidity: 59,
      dew_point: 290.48,
      wind_speed: 3.98,
      wind_deg: 76,
      wind_gust: 8.92,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: 92,
      pop: 0.47,
      rain: 0.15,
      uvi: 9.23,
    },
    {
      dt: 1685368800,
      sunrise: 1684926645,
      sunset: 1684977332,
      moonrise: 1684941060,
      moonset: 1684905480,
      moon_phase: 0.16,
      summary: "Expect a day of partly cloudy with rain",

      temp: {
        day: 299.03,
        min: 290.69,
        max: 300.35,
        night: 291.45,
        eve: 297.51,
        morn: 292.55,
      },

      feels_like: {
        day: 299.21,
        night: 291.37,
        eve: 297.86,
        morn: 292.87,
      },

      pressure: 1016,
      humidity: 59,
      dew_point: 290.48,
      wind_speed: 3.98,
      wind_deg: 76,
      wind_gust: 8.92,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: 92,
      pop: 0.47,
      rain: 0.15,
      uvi: 9.23,
    },
    {
      dt: 1685455200,
      sunrise: 1684926645,
      sunset: 1684977332,
      moonrise: 1684941060,
      moonset: 1684905480,
      moon_phase: 0.16,
      summary: "Expect a day of partly cloudy with rain",

      temp: {
        day: 299.03,
        min: 290.69,
        max: 300.35,
        night: 291.45,
        eve: 297.51,
        morn: 292.55,
      },

      feels_like: {
        day: 299.21,
        night: 291.37,
        eve: 297.86,
        morn: 292.87,
      },

      pressure: 1016,
      humidity: 59,
      dew_point: 290.48,
      wind_speed: 3.98,
      wind_deg: 76,
      wind_gust: 8.92,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: 92,
      pop: 0.47,
      rain: 0.15,
      uvi: 9.23,
    },
    {
      dt: 1684951201,
      sunrise: 1684926645,
      sunset: 1684977332,
      moonrise: 1684941060,
      moonset: 1684905480,
      moon_phase: 0.16,
      summary: "Expect a day of partly cloudy with rain",

      temp: {
        day: 299.03,
        min: 290.69,
        max: 300.35,
        night: 291.45,
        eve: 297.51,
        morn: 292.55,
      },

      feels_like: {
        day: 299.21,
        night: 291.37,
        eve: 297.86,
        morn: 292.87,
      },

      pressure: 1016,
      humidity: 59,
      dew_point: 290.48,
      wind_speed: 3.98,
      wind_deg: 76,
      wind_gust: 8.92,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: 92,
      pop: 0.47,
      rain: 0.15,
      uvi: 9.23,
    },
  ],
};

const mockGeocodeData = [
  {
    name: "London",
    local_names: {
      ms: "London",
      gu: "લંડન",
      feature_name: "London",
      ascii: "London",
      fr: "Londres",
      ja: "ロンドン",
      ur: "علاقہ لندن",
    },
    lat: 51.5073219,
    lon: -0.1276474,
    country: "GB",
    state: "England",
  },
];

const mockAirPollutionData = {
  coord: [50, 50],
  list: [
    {
      dt: 1605182400,
      main: {
        aqi: 1,
      },
      components: {
        co: 201.94053649902344,
        no: 0.01877197064459324,
        no2: 0.7711350917816162,
        o3: 68.66455078125,
        so2: 0.6407499313354492,
        pm2_5: 0.5,
        pm10: 0.540438711643219,
        nh3: 0.12369127571582794,
      },
    },
  ],
};
export const getWeather = async ({
  lat,
  lon,
}: {
  lat: number;
  lon: number;
}) => {
  //   const res = await fetch(
  //     `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  //   );
  //   const data = await res.json();
  WeatherResponseSchema.parse(mockData);
  return mockData;
};

export const getGeocode = async (location: string) => {
  geocodeSchema.parse(mockGeocodeData);
  return mockGeocodeData;
};

export const getAirPollution = async ({
  lat,
  lon,
}: {
  lat: number;
  lon: number;
}) => {
  AirPollutionSchema.parse(mockAirPollutionData);
  return mockAirPollutionData;
};
