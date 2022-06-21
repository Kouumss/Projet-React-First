import logo from './logo.svg';
import './App.css';

function App() {
let dateCourante = new Date();
let tempsJavaScript = dateCourante.getTime()
let tempsPHP = dateCourante.getTime()


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        

          <p>
            Temps JavaScript : {tempsJavaScript} milliseconde
          </p>

          <p>
            Temps PHP : {tempsPHP} milliseconde
          </p>

          <p> Date pour un Humain : {dateCourante.getDate()}/{dateCourante.getMonth()+1}/{dateCourante.getFullYear()}</p>
        
      </header>
      <footer>Un site Molengeek</footer>
    </div>
  
  );
}

export default App;
