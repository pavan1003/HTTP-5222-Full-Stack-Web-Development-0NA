import Menu from "./Menu";

export default function Header() {
  return (
    <header id="header" className="">
      <nav className="navbar navbar-expand-lg px-5">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Pet Care
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
          <Menu />
        </div>
      </nav>
    </header>
  );
}
