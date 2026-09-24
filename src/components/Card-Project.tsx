interface iPropsCard {
  name: string;
  description: string;
  image?: string;
  tags?: string[];
  githubUrl?: string;
}

export default function CardProject({
  name,
  description,
  image,
  tags = [],
  githubUrl = "#",
}: iPropsCard) {
  return (
    <div className="flex flex-col bg-[#1e2026] border border-zinc-800/80 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all duration-300 w-full max-w-[280px] group">
      {/* Imagem / Preview do Projeto */}
      <div className="w-full h-[180px] bg-zinc-800 overflow-hidden relative">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-[#262931] flex items-center justify-center text-zinc-500 text-xs">
            Sem Preview
          </div>
        )}
      </div>

      {/* Conteúdo do Card */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3 className="font-bold text-base text-white group-hover:text-cyan-400 transition-colors">
          {name}
        </h3>

        {/* Trunca a descrição em até 3 linhas */}
        <p className="text-zinc-400 text-xs leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Badges de Tecnologias */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-medium bg-zinc-800/80 text-cyan-400 px-2 py-0.5 rounded border border-zinc-700/50"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Apenas Link do GitHub */}
        {githubUrl && (
          <div className="pt-3 border-t border-zinc-800/80 mt-2">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-zinc-300 hover:text-white transition-colors"
            >
              Ver no GitHub <span className="text-cyan-400">→</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}