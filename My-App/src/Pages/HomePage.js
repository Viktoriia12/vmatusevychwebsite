import { Link } from 'react-router-dom';


function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="header">
        <h1>WELCOME, ЛАСКАВО ПРОСИМО,  MY NAME IS</h1>
        <p>VIKTORIIA MATUSEVYCH</p>
        </div>

        <button type="button">MY WORK</button>

        <div class="navbar">
          <ul>
            <a href="/ContactPage.js" redirect="http://localhost:3000/ContactPage.js">CONTACT</a>
            <a href="PortfolioPage.js">PORTFOLIO</a>
            <Link to="/About">ABOUT</Link>  
            <Link to="/">HOME</Link>  
          </ul>
        </div>        
      </header>
    </div>
  );
}

export default HomePage; //ability to import from somewhere else
