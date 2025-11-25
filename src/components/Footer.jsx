function Footer() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} Gray Advantage. Сделано на React и Vite.</p>
      <div>
        <a href="https://github.com/gray-advantage" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </footer>
  );
}

export default Footer;

