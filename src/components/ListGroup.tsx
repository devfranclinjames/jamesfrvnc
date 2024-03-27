function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const gotNothing = () => {
    return items.length === 0 && <p>Nothing is Found</p>;
  };

  return (
    <>
      <h1>List</h1>
      {gotNothing()}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
