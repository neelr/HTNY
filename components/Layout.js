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
                    z-index:2;
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
                    height: 93vh;
                    display:flex;
                    color:white;
                    overflow: hidden;
                    position: absolute;
                    width:100vw
                }
                .overlay {
                    background-image: url("https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2F1544557286%2Fsydney-new-years-eve-fireworks-NYEGOLIST1218.jpg%3Fitok%3Dlq-YPJwg&q=85");
                    z-index:0;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    height:100vh;
                    width:110vw;
                    position: absolute;
                    filter: blur(5px);
                        -webkit-filter: blur(5px);
                        -moz-filter: blur(5px);
                        -o-filter: blur(5px);
                        -ms-filter: blur(5px);
                    margin: 0vh -2vw -2vh -2vw;
                }
                .content {
                    z-index:1;
                    margin:auto;
                    display: flex;
                    flex-direction:column;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
                    margin-top:10vh;
                    text-align:center;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
                }
                .title {
                    font-family: 'Cute Font', cursive;
                    font-size:4em;
                    margin-bottom:10px;
                }
                .subtitle {
                    
                }
                `}</style>
            </div>
        )
    }
}