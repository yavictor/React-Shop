function Footer() {
  return (
    <footer className="orange page-footer">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a href="https://github.com/yavictor/React-Shop" target="_blank" rel="noopener noreferrer">Repo link</a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };