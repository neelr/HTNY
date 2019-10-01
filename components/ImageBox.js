const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        color: "black",
        width: "30vw", 
        borderRadius: "20px",
        overflow:'hidden',
        textAlign: "center",
        margin:"10px"
    },
    image: { 
        width: "100%",
        height: "100%",
    }
}

const ImageBox = (props) => {
        return (
        <div className="mobileCenter">
                <div style={styles.container} className="cardContainer">
                    <img src={props.src} style={styles.image} className="cardImage"/>
                    <div className="textCont">
                        <p style={{margin:"10px"}}>{props.desc}</p>
                    </div>
                </div>
        </div>
    )
}

export default ImageBox;