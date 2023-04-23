import "./header.css";

function Header(){
    return(
        <header className="header">
            <div className="header-content">
            <h1>Welcome Dear User</h1>
            <a href="#" className="log-out">Log Out</a>
            </div>
        </header>
    )
}

export default Header;