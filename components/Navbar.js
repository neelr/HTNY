export default class Navbar extends React.Component {
    render() {
        return (
            <div className="navContainer">
                <div className="sidebar">
                    <div className="item" stye={{ display: "flex" }}>
                        <a href="google.com" style={{ display: "flex" }}><img src="https://files.slack.com/files-pri/T0266FRGM-FNUEQ9G2G/hack-the-new-year-logo.png" style={{ width: "50%", margin: "auto" }} /></a>
                    </div>
                    <div className="item">
                        <a href="google.com">FAQ</a>
                    </div>
                    <div className="item">
                        <a href="google.com">Judges</a>
                    </div>
                    <div className="item">
                        <a href="google.com">Sponsors</a>
                    </div>
                    <div className="item">
                        <a href="google.com">Team</a>
                    </div>
                </div>
            </div>
        )
    }
}