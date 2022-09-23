import { GameBanner } from './components/GameBanner';
import './styles/main.css';
import { CreateAdBanner } from './components/CreateAdBanner';
import logoImg from './assets/logo_nlw.svg';

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
    <img src={logoImg} />
    <h1 className="text-6xl text-white font-black mt-20">
      Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.
    </h1>
        <div className="grid grid-cols-6 gap-6 mt-16">
          <GameBanner  bannerUrl="/game1.png" title="Counter Strike" adsCount={35} />
          <GameBanner  bannerUrl="/game2.png" title="League of Legends" adsCount={6} />
          <GameBanner  bannerUrl="/game3.png" title="Apex Legends" adsCount={4} />
          <GameBanner  bannerUrl="/game4.png" title="Worl of Warcraft" adsCount={1} />
          <GameBanner  bannerUrl="/game5.png" title="Dota 2" adsCount={2} />
          <GameBanner  bannerUrl="/game6.png" title="Fortnite" adsCount={3} />
          
        </div>
        <CreateAdBanner/>
    </div>
  )
}
export default App