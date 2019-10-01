export default class Navbar extends React.Component {
    render() {
        return (
            <div className="navContainer">
                <div className="sidebar">
                    <div className="item" stye={{ display: "flex" }}>
                        <a href="google.com" style={{ display: "flex" }}><img src="../static/htny-logo.png" style={{ width: "50%", margin: "auto" }} /></a>
                    </div>
                    <div className="item">
                        <a href="#faq">FAQ</a>
                    </div>
                    <div className="item">
                        <a href="#team">Team</a>
                    </div>
                    <div className="item">
                        <a href="#judges">Judges</a>
                    </div>
                    <div className="item">
                        <a href="#sponsors">Sponsors</a>
                    </div>
                </div>
            </div>
        )
    }
}
