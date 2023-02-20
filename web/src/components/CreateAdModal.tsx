import { Check, GameController } from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog';
import * as Checkbox from '@radix-ui/react-checkbox';
import * as ToggleGroup from '@radix-ui/react-toggle-group';

import { Input } from './Form/Input';
import { useEffect, useState, FormEvent } from 'react';


interface Game {
  id: string;
  title: string;
  }


export function CreateAdModal() {
  const  [games, setGames] = useState<Game[]>([])
  const [weekDays, setweekDays] = useState<string[]>([])


  useEffect(() => {
    fetch('http://localhost:3333/games').then(response => response.json()).then(data => {
      setGames(data)
    })
  }, [])


function handleCreateAd(event: FormEvent) {
  event.preventDefault();
  const formData = new FormData(event.target as HTMLFormElement);

}

return (
  <Dialog.Portal>
  <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
  <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px]">
    <Dialog.Title className="text-3xl font-black"> Publique um anúncio</Dialog.Title>
    <form onSubmit={handleCreateAd} className="mt-8 flex flex-col gap-4">

      <div className="flex flex-col gap-8">
        <label htmlFor="game" className="font-semibold">Qual o game?</label>
          <select
            id="game"
            className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
            defaultValue=""
            >
            <option disabled value="Selecione o game que deseja jogar"> </option>
              {games.map(game => {
                return <option key={game.id} value={game.id}>{game.title}</option>
              })}
          </select>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Seu nome ou nickname</label>
        <Input id="name" type="text" placeholder="Como te chamam dentro do game?"/>
      </div>
     <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="yearsPlaying">Joga ha quantos anos?</label>
          <Input id="yearsPlaying" type="number" placeholder="tudo bem ser zero"/>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="discord">Qual seu Discord</label>
          <Input id="discord" type="text" placeholder="usuario#0000"/>
        </div>
      </div>

      <div className="flex gap-6">
          <div className="flex flex-col gap-2">
          <label htmlFor="weekDays">Selecione os dias </label>
            <ToggleGroup.Root type="multiple" className="grid grid-cols-4 gap-2" value={weekDays} onValueChange={setweekDays}>
              < ToggleGroup.Item value="0" title="Domingo" className={`w-8 h-8 rounded ${weekDays.includes('0') ? 'bg-violet-500' : 'bg-zinc-900'}`}>D</ ToggleGroup.Item>
              < ToggleGroup.Item value="1" title="Segunda" className={`w-8 h-8 rounded ${weekDays.includes('1') ? 'bg-violet-500' : 'bg-zinc-900'}`}>S</ ToggleGroup.Item>
              < ToggleGroup.Item value="2" title="Terça" className={`w-8 h-8 rounded ${weekDays.includes('2') ? 'bg-violet-500' : 'bg-zinc-900'}`}>T</ ToggleGroup.Item>
              < ToggleGroup.Item value="3" title="Quarta" className={`w-8 h-8 rounded ${weekDays.includes('3') ? 'bg-violet-500' : 'bg-zinc-900'}`}>Q</ ToggleGroup.Item>
              < ToggleGroup.Item value="4" title="quinta" className={`w-8 h-8 rounded ${weekDays.includes('4') ? 'bg-violet-500' : 'bg-zinc-900'}`}>Q</ ToggleGroup.Item>
              < ToggleGroup.Item value="5" title="Sexta" className={`w-8 h-8 rounded ${weekDays.includes('5') ? 'bg-violet-500' : 'bg-zinc-900'}`}>S</ ToggleGroup.Item>
              < ToggleGroup.Item value="6" title="Sabado" className={`w-8 h-8 rounded ${weekDays.includes('6') ? 'bg-violet-500' : 'bg-zinc-900'}`}>S</ ToggleGroup.Item>
            </ToggleGroup.Root>
          </div>
      <div className="flex flex-col gap-2 flex-1">
          <label htmlFor="weekDays">Qual horario do dia?</label>
            <div className="grid grid-cols-2 gap-2">
              <Input id="hourStart" type="time" placeholder="De"/>
              <Input id="hourEnd" type="time" placeholder="Ate"/>
            </div>
      </div>
      </div>

      <label className="mt-2 flex items-center gap-2 text-sm">
        <Checkbox.Root className="w-6 h-6 rounded bg-zinc-900">
          <Checkbox.Indicator>
            <Check className="w-4 h-4 text-emerald-400"/>
          </Checkbox.Indicator>
          </Checkbox.Root>
        Costumo me conectar ao chat de voz 
      </label>

      <footer className="mt-4  flex justify-end gap-4">
        <Dialog.Close type="button" className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600">
          Cancelar
          </Dialog.Close>
        <button
         type="submit"
         className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600">
          <GameController className="w-6 h-6"/>
          Encontrar Duo
        </button>
      </footer>
    </form>
  </Dialog.Content>
  </Dialog.Portal>
);
}