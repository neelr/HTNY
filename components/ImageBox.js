const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        color: "black",
        width: "30vw",
        borderRadius: "20px",
        overflow: 'hidden',
        textAlign: "center",
        margin: "10px"
    },
    image: {
        width: "100%",
        height: "100%",
    }
}

const ImageBox = (props) => {
    return (
        <div style={styles.container} className="cardContainer">
            <img src={props.src} style={styles.image} className="cardImage" />
            <div className="textCont">
                <p style={{ margin: "10px" }}>{props.desc}</p>
            </div>
            <style jsx>{`
                @media only screen and (max-width:685px) {
                    .cardContainer {
                        width:75vw !important;
                        position: relative;
                    }
                }
                `}</style>
        </div>
    )
}

export default ImageBox;