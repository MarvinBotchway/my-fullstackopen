import { useState } from "react";
import Heading from "./Heading";
import Button from "./Button";
import Statistics from "./Statistics";

import "./App.css";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = (txt) => {
    const BtnTxt = txt;

    if (BtnTxt === "good") setGood(good + 1);
    else if (BtnTxt === "neutral") setNeutral(neutral + 1);
    else if (BtnTxt === "bad") setBad(bad + 1);
  };

  return (
    <div>
      <Heading txt={"give feedback"} />
      <Button txt={"good"} onClick={() => handleClick("good")} />
      <Button txt={"neutral"} onClick={() => handleClick("neutral")} />
      <Button txt={"bad"} onClick={() => handleClick("bad")} />
      <Heading txt={"statistics"} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
