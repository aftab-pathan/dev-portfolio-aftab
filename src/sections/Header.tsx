export const Header = () => {
  return <div className="flex justify-center items-center top-3 w-full fixed" style={{zIndex:10}}>
    <nav className="flex gap-1 p-0.5 border border-white/10 rounded-full backdrop-blur bg-white/20">
      <a href="#Home" className="nav-item">Home</a>
      <a href="#Projects" className="nav-item">Projects</a>
      <a href="#About" className="nav-item">About</a>
      <a href="#Contact" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">Contact</a>
    </nav>
  </div>
};
