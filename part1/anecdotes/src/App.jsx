import { useState } from "react";
import Button from "./Button";
import Anecdote from "./Anecdote";
import Heading from "./Heading";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0));
  const [highestPointsIndex, setHighestPointsIndex] = useState(0);

  const handleShowingNext = () => {
    const RandomAnecdoteIndex = Math.floor(Math.random() * 7);
    setSelected(RandomAnecdoteIndex);
  };

  const handleVote = () => {
    const currentPoints = [...points];
    currentPoints[selected] += 1;

    setPoints(currentPoints);

    checkHighest(currentPoints);
  };

  const checkHighest = (currentPoints) => {
    let highestIndex = 0;
    for (let i = 0; i < currentPoints.length - 1; i++) {
      if (currentPoints[highestIndex] < currentPoints[i + 1]) {
        highestIndex = i + 1;
      }
    }
    setHighestPointsIndex(highestIndex);
  };

  return (
    <div>
      <Heading text={"Anecdote of the day"} />
      <Anecdote
        anecdote={anecdotes[selected]}
        points={points[selected]}
      ></Anecdote>
      <Button onClick={handleVote} text={"vote"}></Button>
      <Button onClick={handleShowingNext} text={"next anecdote"}></Button>
      <Heading text={"Anecdote with most votes"} />
      <Anecdote
        anecdote={anecdotes[highestPointsIndex]}
        points={points[highestPointsIndex]}
      ></Anecdote>
    </div>
  );
};

export default App;
