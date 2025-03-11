const Item = ({ item, onDelete }) => {
    return (
      <div>
        <p>{item.name} - {item.status}</p>
        <button onClick={() => onDelete(item.id)}>Delete</button>
      </div>
    );
  };
  
  export default Item;
  