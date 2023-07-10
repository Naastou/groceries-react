const SingleItem = ({ item, editItem, removeItem, completed }) => {
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => editItem(item.id, !item.completed)}
      />
      {item.completed ? (
        <p style={{ textDecoration: "line-through" }}>{item.item}</p>
      ) : (
        <p>{item.item}</p>
      )}
      <button onClick={() => removeItem(item.id)} className="btn remove-btn">
        Remove
      </button>
    </div>
  );
};
export default SingleItem;
