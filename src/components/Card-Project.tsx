interface iPropsCard {
  name: string;
  description: string;
}

export default function CardProject({ name, description}: iPropsCard) {
  return (
    <div className="flex flex-col gap-3 w-full max-w-[269px]">
      <div className="bg-gray-100 w-full h-[197px] rounded-sm"></div>
      <h3 className="font-bold text-lg text-gray-100 leading-tight">{name}</h3>
      <p className="text-gray-200 text-xs leading-relaxed">{description}</p>
    </div>
  )
}