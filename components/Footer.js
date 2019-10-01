import { FaRegEnvelope, FaInstagram, FaGithub } from "react-icons/fa";
function Footer () {
    return(
        <div className="footer">
            <div className="container">
                <a href="https://github.com/hacker719/htny" className="click">Look behind the scenes!</a>
                <div className="holder">
                    <a href="mailto:wowthisisanemail@email.xom" className="icon">
                        <FaRegEnvelope />
                    </a>
                    <a href="https://instagram.com" className="icon">
                        <FaInstagram />
                    </a>
                    <a href="https://github.com/htny" className="icon">
                        <FaGithub />
                    </a>
                </div>
                <p>MIT License</p>
            </div>
            <style jsx>{`
            .footer {
                width:100vw;
                height:15vh;
                display:flex;
                color:white;
                position: absolute;
                bottom:0; 
                margin:0;
            }
            .container {
                margin:auto;
            }
            .click {
                font-size:1.2em;
                padding:4px 8px;
                border-radius:100px;
                color:white;
            }
            .click :hover {
                background-color: #584488;
            }
            .holder {
                display: flex;
                flex-direction: row;
                font-size:2em;
                width:150px;
                margin:auto;
                margin-top:10px;
            }
            .icon {
                margin:auto;
                color:white;
            }
            .icon :hover {
                color:#8271aa;
            }
            p {
                margin: auto;
                text-align:center;
            }
            `}</style>
        </div>
    )
}

export default Footer;