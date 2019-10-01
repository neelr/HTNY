import Layout from "../components/Layout";
import Row from "../components/Row";
import Column from "../components/Column";
import ImageBox from "../components/ImageBox";
import Profile from "../components/Profile";
export default class Index extends React.Component {
    render(){
        return(
            <Layout>
                <div className="hero" id="main">
                    <div className="overlay">foop</div>
                    <div className="content">
                        <h1 className="title">Hack The New Year! 🎉</h1>
                        <h2 className="subtitle">The best hackathon in all of the world that </h2>
                        <p>Lorem ipsup dorem. Lorem ipsup dorem. Lorem ipsup dorem. Lorem ipsup dorem. Lorem ipsup dorem. Lorem ipsup dorem. Lorem ipsup dorem. Lorem ipsup dorem. Lorem ipsup dorem. Lorem ipsup dorem. Lorem ipsup dorem. </p>
                    </div>
                    <div className="titleImage hidden-mobile">
                        <img className="logo" src="../static/htny-logo.png"/>
                    </div>
                </div>
                <div className="hero-norm" id="FAQ">
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
                </div>
                <div style={{color:"white",marginLeft:"5vw",width:"90vw"}} id="team">
                    <h1>Team</h1>
                    <div style={{display:"flex",flexWrap:"wrap",flexDirection:"row",width:"100%"}}>
                        <Profile src="https://art.pixilart.com/383c8bbc4a92e09.gif" name="Doggo" desc="The developer of everything."/>
                        <Profile src="https://art.pixilart.com/383c8bbc4a92e09.gif" name="Doggo" desc="The developer of everything."/>
                        <Profile src="https://art.pixilart.com/383c8bbc4a92e09.gif" name="Doggo" desc="The developer of everything."/>
                        <Profile src="https://art.pixilart.com/383c8bbc4a92e09.gif" name="Doggo" desc="The developer of everything."/>
                        <Profile src="https://art.pixilart.com/383c8bbc4a92e09.gif" name="Doggo" desc="The developer of everything."/>
                        <Profile src="https://art.pixilart.com/383c8bbc4a92e09.gif" name="Doggo" desc="The developer of everything."/>
                        <Profile src="https://art.pixilart.com/383c8bbc4a92e09.gif" name="Doggo" desc="The developer of everything."/>
                        <Profile src="https://art.pixilart.com/383c8bbc4a92e09.gif" name="Doggo" desc="The developer of everything."/>
                    </div>
                </div>
                <div style={{color:"white",marginLeft:"5vw",width:"90vw"}} id="judges">
                    <h1>Judges</h1>
                    <div style={{display:"flex",flexWrap:"wrap",flexDirection:"row",width:"100%"}}>
                        <Profile src="https://media1.giphy.com/media/xUPGcuPLCKs0LiYnCg/giphy.gif" name="Catto" desc="I. will. Judge. You."/>
                        <Profile src="https://media1.giphy.com/media/xUPGcuPLCKs0LiYnCg/giphy.gif" name="Catto" desc="I. will. Judge. You."/>
                        <Profile src="https://media1.giphy.com/media/xUPGcuPLCKs0LiYnCg/giphy.gif" name="Catto" desc="I. will. Judge. You."/>
                        <Profile src="https://media1.giphy.com/media/xUPGcuPLCKs0LiYnCg/giphy.gif" name="Catto" desc="I. will. Judge. You."/>
                        <Profile src="https://media1.giphy.com/media/xUPGcuPLCKs0LiYnCg/giphy.gif" name="Catto" desc="I. will. Judge. You."/>
                        <Profile src="https://media1.giphy.com/media/xUPGcuPLCKs0LiYnCg/giphy.gif" name="Catto" desc="I. will. Judge. You."/>
                        <Profile src="https://media1.giphy.com/media/xUPGcuPLCKs0LiYnCg/giphy.gif" name="Catto" desc="I. will. Judge. You."/>
                    </div>
                </div>
            </Layout>
        )
    }
}