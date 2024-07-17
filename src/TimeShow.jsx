import { useEffect, useState } from "react";

function TimeShow() {
  const [date, setTime] = useState(new Date());

  useEffect(() => {
     console.log("set the interval ")
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
      console.log("cancelled the interval ");
    };
  }, []);
  return (
    <p style={{"fontSize":"40px",'color':'violet'}}>
      This Is a Current Time : {date.toDateString()} -
      {date.toLocaleTimeString()}{" "}
    </p>
  );
}
export default TimeShow;
