import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Salutation from './components/Salutation';

function App() {
  
  return (
    <div className="App" id='root'>
      <Greet title='TextUtils' />
      <div className="container">
        <Welcome heading='Enter text to Analyze'/>
      </div>
      <Salutation name='Sayantan Kundu'/>
    </div>
  );
}

export default App;
