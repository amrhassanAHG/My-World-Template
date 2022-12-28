import "./Header.css";

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <a href="#" className="logo">
          Amr<span>Hassan</span>
        </a>
        <nav>
          <ul>
            <li>
              <a href="#articles">Articles</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#">Other Links</a>
              <div className="mega-menu"></div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
