import logo from './logo.svg';
import './App.css';
import Header from './Componants/Header/Header';
import Home from './Componants/Home/Home';
import Blog from './Componants/Blog/Blog';

function App() {
  return (
    <div className="App">
     <Header></Header>
    <Home></Home>
    <Blog></Blog>
    </div>
  );
}

export default App;
