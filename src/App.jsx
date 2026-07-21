import'./App.css';
import Tarjeta from './components/Tarjeta';
import Footer from './components/Footer';
import Header from './components/Header';

function App(){
    return(
      <div>
        <header/>
          <main>
            <Tarjeta />
            <Tarjeta />
            <Tarjeta />
          </main>
        <footer/>
      </div>
    )
};
export default App;