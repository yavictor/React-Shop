function Header() {
  return (
    <nav>
      <div className="orange nav-wrapper">
        <a href="/" className="brand-logo center">React-Shop</a>
        <ul className="left hide-on-med-and-down">
          <li><a href="https://github.com/yavictor/React-Shop" target="_blank" rel="noopener noreferrer">Repo link</a></li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
