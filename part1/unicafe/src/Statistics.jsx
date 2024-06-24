import StatisticLine from "./StatisticLine";

const Statistics = ({ good, neutral, bad }) => {
  const All = good + neutral + bad;
  const Average = All > 0 ? (good - bad) / All : 0;
  const Positive = All > 0 ? (good / All) * 100 : 0;

  if (All) {
    return (
      <div>
        <table>
          <tbody>
            <StatisticLine text={"good"} value={good} />
            <StatisticLine text={"neutral"} value={neutral} />
            <StatisticLine text={"bad"} value={bad} />
            <StatisticLine text={"all"} value={All} />
            <StatisticLine text={"average"} value={Average} />
            <StatisticLine text={"positive"} value={Positive + "%"} />
          </tbody>
        </table>
      </div>
    );
  } else {
    return <p>No feedback given</p>;
  }
};

export default Statistics;
