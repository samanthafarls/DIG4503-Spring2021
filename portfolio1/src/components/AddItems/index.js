import './AddItems.css';

function AddItems({ handleAdd, handleValue, value }) {
    return (
      <div>
        <input type="text" value={value} onChange={handleValue} />
        <button onClick={handleAdd}> Add Items!</button>
      </div>
    );
  }
  
  export default AddItems;