import Layout from "../components/Layout";
export default class Index extends React.Component {
    render(){
        return(
            <Layout>
                <div className="hero">
                    <div className="overlay">foop</div>
                    <div className="content">
                        <h1 className="title">Hack The New Year! 🎉</h1>
                        <h2 className="subtitle">The best hackathon in all of the world that </h2>
                        <p>Lorem ipsup dorem. Lorem ipsup dorem. Lorem ipsup dorem. Lorem ipsup dorem. Lorem ipsup dorem. Lorem ipsup dorem. Lorem ipsup dorem. Lorem ipsup dorem. Lorem ipsup dorem. Lorem ipsup dorem. Lorem ipsup dorem. </p>
                    </div>
                    <div className="titleImage">
                        <img className="logo" src="https://files.slack.com/files-pri/T0266FRGM-FNUEQ9G2G/hack-the-new-year-logo.png"/>
                    </div>
                </div>
                <div className="hero-norm" style={{marginTop:"100vh"}}>
                    
                </div>
            </Layout>
        )
    }
}