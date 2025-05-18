export const Card = () => {
  return (
    <div className="block">
      {[...Array(3)].map((_, i) => {
        return (
          <div className="card" key={i}>
            <h5>category</h5>
            <h2>Example {i + 1}</h2>
            <h2>Card </h2>
            <h2>Heading </h2>
          </div>
        );
      })}
    </div>
  );
};
