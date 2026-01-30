import clsx from "clsx";
import React from "react";

type Props = {
  src: string;
  className?: string;
};

const WeatherIcon = ({ src, className }: Props) => {
  return (
    <img className={clsx("size-8", className)} src="" alt="Weather Icon" />
  );
};

export default WeatherIcon;
