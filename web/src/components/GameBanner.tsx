export function GameBanner() {
  return (
    <a href="" className="relative rounded-lg overflow-hidden">
    <img src="/game1.png" alt="" />
      <div className="w-full pt-16 pb-4 px-4 bg-game-gradiente absolute bottom-0 left-0 right-0">
      <strong className="font-bold text-white block"> Counter Strike</strong>
      <span className="text-zinc-300 text-sm block">4 anúncios</span>
      </div>
  </a>
  )
}