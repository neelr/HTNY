function Profile (props) {
    return(
        <div className="card">
            <img className="profileIMG" src={props.src}/>
            <div className="descrip">
                <h1>{props.name}</h1>
                <p>{props.desc}</p>
            </div>
            <style jsx>{`
            .card {
                width:250px;
                display:flex;
                flex-direction:row;
                padding:10px;
                margin:10px;
                background-color:black; 
                border-radius:20px;
            }
            .descrip {
                display:flex;
                flex-direction:column;
                margin:auto;
                margin-left:10px;
            }
            .profileIMG {
                height:50px;
                margin:auto;
                border-radius:50px;
                margin-right:0;
            }
            .descrip * {
                margin:5px;
            }
            h1 {
                font-size: 1.3em;
            }
            `}</style>
        </div>
    )
} 
export default Profile;