

function Market({ items }) {
    console.log(items);
    return (
      <div>
        <center><h2>Welcome to the Market!</h2></center>
        <center><p>Add and remove items from your list</p></center>
  
        <div>
          {items.map((items, index) => (
            <p key={index}>{items.items}</p>
          ))}
        </div>
      </div>
    );
  }
  
  export default Market;