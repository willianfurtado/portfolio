interface iPropsCard {
  icon: string;
  nameTech: string;
}

export default function CardTech({ icon, nameTech}: iPropsCard) {
  return (
    <div className="flex items-center gap-3 bg-[#1e2026] hover:bg-[#262931] transition-all px-6 py-3 rounded-full border border-zinc-800/60 shadow-sm">
      <img src={icon} className='w-5 h-5 object-contain' />
      <span className="text-gray-100">{nameTech}</span> 
    </div>
  )
}