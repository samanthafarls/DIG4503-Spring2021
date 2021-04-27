import Create from './Components/Create';
import Update from './Components/Update';
import Read from './Components/Read';
import Delete from './Components/Delete';
import './App.css';

function App() {
  return (
    <div className="App">
      <Create />
      <Update/>
      <Read/>
      <Delete/>
    </div>
  );
}

export default App;
