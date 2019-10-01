import Layout from "../components/Layout";
import Row from "../components/Row";
import Column from "../components/Column";
import ImageBox from "../components/ImageBox";
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
                        <img className="logo" src="../static/htny-logo.png"/>
                    </div>
                </div>
                <div className="hero-norm" style={{marginTop:"100vh"}}>
                    <Row>
                        <Column>
                            <h1>What is a hackathon?</h1>
                            <p>Lorem ipsum lorem. Lorem ipsum lorem. Lorem ipsum lorem. Lorem ipsum lorem. Lorem ipsum lorem. Lorem ipsum lorem. Lorem ipsum lorem. Lorem ipsum lorem. Lorem ipsum lorem. Lorem ipsum lorem. Lorem ipsum lorem. Lorem ipsum lorem. Lorem ipsum lorem. Lorem ipsum lorem. Lorem ipsum lorem. </p>
                        </Column>
                        <Column>
                            <ImageBox src="https://cdn.glitch.com/3d283e0f-19c4-4546-b0b2-223ec3a7dc23%2Fworking.jpg?v=1565769221347" desc="poop poop i like that"/>
                        </Column>
                    </Row>
                    <Row>
                        <Column>
                            <ImageBox src="https://cdn.glitch.com/3d283e0f-19c4-4546-b0b2-223ec3a7dc23%2Fworking.jpg?v=1565769221347" desc="poop poop i like that"/>
                        </Column>
                        <Column>
                            <h1>Why should you not come?</h1>
                            <p>No reason. COME</p>
                        </Column>
                    </Row>
                    <div className="hero-norm">
                        <h1>Organizers</h1>
                    </div>
                </div>
            </Layout>
        )
    }
}