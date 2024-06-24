const Anecdote = ({ anecdote, points }) => {
  return (
    <>
      <p>
        {anecdote}
        <br />
        has {points} votes
      </p>
    </>
  );
};

export default Anecdote;
