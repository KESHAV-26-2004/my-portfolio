export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo"> &lt;Keshav /&gt; </div>
        <ul className="nav-menu">
          <li><a className="nav-link" href="#home">Home</a></li>
          <li><a className="nav-link" href="#journey">Journey</a></li>
          <li><a className="nav-link" href="#projects">Projects</a></li>
          <li><a className="nav-link" href="#skills">Skills</a></li>
          <li><a className="nav-link" href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
