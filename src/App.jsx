import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';



function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting={"Saludos"}/>
    </div>
  );
}

export default App;
