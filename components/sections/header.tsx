export function Header() {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-30">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur-md">
        <a href="#home" className="nav-link">
          Início
        </a>
        <a href="#projects" className="nav-link">
          Projetos
        </a>
        <a href="#about" className="nav-link">
          Sobre
        </a>
        <a
          href="#contact"
          className="nav-link bg-white text-gray-900 hover:bg-white/70 "
        >
          Contato
        </a>
      </nav>
    </div>
  );
}
