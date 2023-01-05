import './App.css';
import { Footer } from './component/Footer';
import { Header } from './component/Header';
import { UpgradeComnponent } from './component/UpgradeComponent';

function App() {
  return (
    <div className="App">
      <Header/>
      <UpgradeComnponent/>
      <Footer/>
    </div>
  );
}

export default App;
