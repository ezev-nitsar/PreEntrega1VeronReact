import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos al Sitio Web más completo para vehículos'} />
    </div>
  );
}
export default App;