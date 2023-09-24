import './App.css';
import Header from './components/Header';
import Swap from './components/Swap';
import Tokens from './components/Tokens';
import {Routes, Route} from 'react-router-dom';
import {useConnect, useAccount} from 'wagmi';
import {MetaMaskConnector} from 'wagmi/connectors/metaMask';
import background from './assets/bg_img_01.jpg';

function App() {
  const {address, isConnected} = useAccount();
  const {connect} = useConnect({
    connector: new MetaMaskConnector(),
  });

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
      }}
    >
      <Header connect={connect} isConnected={isConnected} address={address} />
      <div className="mainWindow">
        <Routes>
          <Route
            path="/"
            element={<Swap isConnected={isConnected} address={address} />}
          />
          <Route path="/tokens" element={<Tokens />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
