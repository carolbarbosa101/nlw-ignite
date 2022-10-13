import { GameBanner } from './components/GameBanner';
import { useEffect, useState } from 'react';
import './styles/main.css';
import { CreateAdBanner } from './components/CreateAdBanner';
import logoImg from './assets/logo_nlw.svg';
import * as Dialog from '@radix-ui/react-dialog';
import { GameController } from 'phosphor-react';


interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: { ads: number;
  }
}
function App() {
  const  [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    fetch('http://localhost:3333/games').then(response => response.json()).then(data => {
      setGames(data)
    })
  }, [])
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
    <img src={logoImg} />
    <h1 className="text-6xl text-white font-black mt-20">
      Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.
    </h1>

        <div className="grid grid-cols-6 gap-6 mt-16">
          {games.map(game => {
            return (
              <GameBanner 
              key={game.id}
              title={game.title}
              bannerUrl={game.bannerUrl}
              adsCount={game._count.ads}
              />
            )
          })}
        </div>
        <Dialog.Root>
          <CreateAdBanner/>

          <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
          <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px]">
            <Dialog.Title className="text-3xl font-black"> Publique um anúncio</Dialog.Title>
            <form className="mt-8">
              <div className="flex flex-col gap-8">
                <label htmlFor="game" className="font-semibold">Qual o game?</label>
                <input id="game" type="text" placeholder="Selecione o game que deseja jogar"
                className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"/>
              </div>
              <div>
                <label htmlFor="name">Seu nome ou nickname</label>
                <input id="name" type="text" placeholder="Como te chamam dentro do game?"/>
              </div>
             <div>
                <div>
                  <label htmlFor="yearsPlaying">Joga ha quantos anos?</label>
                  <input id="yearsPlaying" type="number" placeholder="tudo bem ser zero"/>
                </div>
                <div>
                  <label htmlFor="discord">Qual seu Discord</label>
                  <input id="discord" type="text" placeholder="usuario#0000"/>
                </div>
              </div>

              <div>
                  <div>
                  <label htmlFor="weekDays">Quando costuma jogar</label>
                  </div>
              <div>
                  <label htmlFor="weekDays">Qual horario do dia?</label>
                    <div>
                      <input id="hourStart" type="time" placeholder="De"/>
                      <input id="hourEnd" type="time" placeholder="Ate"/>
                    </div>
              </div>
              </div>
              <div>
                <input type="checkbox" />
                Costumo me conectar ao chat de voz
              </div>
              <footer>
                <button>Cancelar</button>
                <button type="submit">
                  <GameController/>
                  Encontrar Duo
                </button>
              </footer>
            </form>
          </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
        
  </div>
  )
}
export default App