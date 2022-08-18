import './App.css';
import MainPageContainer from './features/MainPage/MainPageContainer';
import Header from './features/Header/Header'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import NewAnimal from './features/MainPage/NewAnimal/NewAnimal'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<MainPageContainer />} />
        <Route path='/newanimal' element={<NewAnimal />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
