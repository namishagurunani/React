import "./Header.css"
function Header(){
    return (
        <header className="header">
            <div className="head">
                <h1>Family Wellness</h1>
                <p>MASSAGE THERAPY</p>
            </div>
            <nav>
                <a href="#" className="hoverEff active">HOME</a>
                <a href="#" className="hoverEff">ABOUT</a>
                <a href="#" className="hoverEff">SERVICES</a>
                <a href="#" className="hoverEff">FAQ</a>
                <a href="#" className="hoverEff">CONTACT</a>
            </nav>
        </header>
    );
}
export default Header;