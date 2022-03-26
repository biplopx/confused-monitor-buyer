import './App.css';
import Header from './components/Header/Header';
import Questions from './components/Questions/Questions';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className='app'>
      <Header></Header>
      <Shop></Shop>
      <Questions></Questions>
    </div>
  );
}

export default App;
