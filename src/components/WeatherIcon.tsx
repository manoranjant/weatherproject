import clsx from "clsx";

type Props = {
  src: string;
  className?: string;
};

const WeatherIcon = ({ className }: Props) => {
  return (
    <img className={clsx("size-8", className)} src="" alt="Weather Icon" />
  );
};

export default WeatherIcon;
