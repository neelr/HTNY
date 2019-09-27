import Layout from "../components/Layout";
export default class Index extends React.Component {
    render(){
        return(
            <Layout>
                <div className="hero">
                    <div className="overlay">foop</div>
                    <div className="content">
                        <h1 className="title">Hack The New Year! 🎉</h1>
                        <p className="subtitle">THE COOL THINGS ABOUT THIS THING GO HERE</p>
                    </div>
                </div>
            </Layout>
        )
    }
}