
import './App.css';
import Adverstisement from './components/Adverstisement';
import Header from './components/Header';
import Main from './components/Main';
import Navigation from './components/Navigation';
import Subcontent from './components/Subcontent';

function App() {
  return (
    <div className="App">
      <div className='up'>
        <Header/>
      </div>
      <div className='down'>
        <Navigation/>
        <Main>
          <div className='upper-main'>
            <Subcontent/>
            <Subcontent/>
            <Subcontent/>
          </div>
          <div className='down-main'>
            <Adverstisement/>
          </div>
        </Main>
      </div>
    </div>
  );
}

export default App;
