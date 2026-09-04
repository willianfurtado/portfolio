interface iPropsContact {
  icon: string;
  name: string;
}

export default function CardContact({ icon, name}: iPropsContact) {
  return (
    <div className="bg-gray-400 flex ">
      <div className="flex gap-1">
        <img src={icon} className='w-7 h-7' />
        <span className='font-medium text-gray-200'>{name}</span>
      </div>
      <img src="../assets/arrow-up-logo.svg" className='w-5 h-5' />
    </div>
  )
}