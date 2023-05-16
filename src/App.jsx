/* eslint-disable react/no-unescaped-entities */
import "./styles.css";

export default function App() {
  return (
    <>
      <div className="app-container">
        <header className="header">
          <h1>My Website</h1>
          <div className="profile-container">
            <img
              src="Images\headerPic1.jpg"
              alt="Profile"
              className="profile-img"
            />
          </div>
          <button className="menu-btn">&#9776;</button>
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </header>
        <div className="center">
          <h1>
            Welcome to <span>My portfolio</span>
          </h1>
          <p>
            Hi, Kingsley Fakrogha here. It's so nice to meet you. I'm a full
            stack web developer. This beautiful environment was created with
            react as my first project. I am always looking to improve it.
          </p>
        </div>
        <main className="main-content">
          {/* Your main content goes here */}
          <div className="slideshow-container">
            <div className="slide fade">
              <img src="Images\background4.jpg" alt="Slide 1" />
              <div className="slide-caption">
                Cool background cause I'm cool
              </div>
            </div>
            <div className="slide fade">
              <img src="Images\background3.jpg" alt="Slide 2" />
              <div className="slide-caption">Slide 2 caption</div>
            </div>
            <div className="slide fade">
              <img src="Images\background4.jpg" alt="Slide 3" />
              <div className="slide-caption">Slide 3 caption</div>
            </div>
            <a className="prev" onClick="plusSlide(-1)">
              &#10094;
            </a>
            <a className="next" onClick="plusSlides(1)">
              &#10095;
            </a>
          </div>
          <div className="icon-container">
            <a href="#">
              <div className="icon">
                <img
                  className="icon-img"
                  src="Images\webprojectsLogo.png"
                  alt="web projects"
                />
              </div>
            </a>
            <a href="#">
              <div className="icon">
                <img
                  className="icon-img"
                  src="Images\reactpagesLogo.png"
                  alt="react pages"
                />
              </div>
            </a>
            <a href="#">
              <div className="icon">
                <img
                  className="icon-img"
                  src="Images\pythonprojectLogo.webp"
                  alt="python projects"
                />
              </div>
            </a>
            <a href="#">
              <div className="icon">
                <img
                  className="icon-img"
                  src="Images\otherprojectLogo.webp"
                  alt="other projects"
                />
              </div>
            </a>
          </div>
        </main>
        <footer className="footer">
          {/* Your footer content goes here */}
        </footer>
      </div>
    </>
  );
}
