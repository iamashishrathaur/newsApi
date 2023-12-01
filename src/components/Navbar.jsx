const Navbar = ({ setCategory }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-fixed-top" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <span className="badge text-light fs-4">Sigma News</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setCategory("technology")}
                >
                  Technology
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setCategory("business")}
                >
                  Business
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setCategory("health")}
                >
                  Health
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setCategory("science")}
                >
                  Science
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setCategory("sports")}
                >
                  Sports
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setCategory("entertainment")}
                >
                  Entertainment
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setCategory("lifestyle")}
                >
                  Lifestyle
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setCategory("programming")}
                >
                  Programming
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setCategory("economy")}
                >
                  Economy
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setCategory("movie")}
                >
                  Movie
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setCategory("politics")}
                >
                  Politics
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setCategory("travel")}
                >
                  Travel
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setCategory("culture")}
                >
                  Culture
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setCategory("art")}
                >
                  Arts
                </button>
              </li>
              {/* Other categories... */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
