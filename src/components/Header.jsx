function Header({winner}) {
    return (
        <header>
            <h1 className="game-title">Noughts and Crosses</h1>
            <p className="winner-announcement">{winner}</p>
        </header>
    );
}

export default Header;