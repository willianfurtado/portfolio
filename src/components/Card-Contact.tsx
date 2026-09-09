interface iPropsContact {
  icon: string;
  name: string;
  url?: string;
}

export default function CardContact({ icon, name, url }: iPropsContact) {
  return (
    <a 
      href={url}
      target="_blank"
      className="bg-[#1f2937] hover:bg-[#32363e] border border-[#3e4249] p-5 rounded-2xl flex items-center justify-between transition-colors w-full"
    >
      <div className="flex items-center gap-4">
        <img src={icon} alt={name} className="w-7 h-7" />
        <span className="font-semibold text-white text-lg">{name}</span>
      </div>
      <img src="/src/assets/arrow-up-logo.svg" alt="Abrir link" className="w-5 h-5" />
    </a>
  );
}