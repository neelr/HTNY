import Navbar from "../components/Navbar";
import Head from "next/head";
export default class Layout extends React.Component {
    render() {
        return(
            <div>
                <Head>
                    <title>Hack The New Year! 🎉</title>
                </Head>
                <Navbar/>
                {this.props.children}
                <style jsx global>{`
                @import url('https://fonts.googleapis.com/css?family=Cute+Font|Nunito+Sans&display=swap');
                html,body {
                    font-family: 'Nunito Sans', sans-serif;
                    height:100%;
                    width:100%;
                    margin:0;
                    background-color:#2a0188;
                }
                .navContainer {
                    width: 100vw;
                    background-color:#2a0188;
                    margin:0;
                    height:7vh;
                    display:flex;
                    flex-direction:row;
                    -moz-box-shadow:    3px 3px 5px 6px ;
                    -webkit-box-shadow: 3px 3px 5px 6px ;
                    box-shadow:         3px 3px 5px 6px ;
                }
                .item {
                    margin:auto
                    height:100%;
                    width:100%;
                    display:flex;
                }
                .item :hover {
                    background-color:#3e2675;
                    cursor:pointer;
                }
                .item a {
                    color:white;
                    margin:auto
                }
                .sidebar {
                    width:40vw;
                    flex-direction:row;
                    display:flex;
                }
                a {
                    text-decoration:none;
                }
                .hero {
                    height: 100vh;
                    display:flex;
                }
                .content {
                    margin:auto;
                    display: flex;
                    flex-direction:column;
                }
                `}</style>
            </div>
        )
    }
}