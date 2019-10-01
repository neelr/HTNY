function Hero (props) {
    return(
        <div className="hero">
            <div className="container">
                {props.children}
            </div>
            <style jsx>{`
            .hero {
                width:100%;
                height:100%;
                display:flex;
            }
            .container {
                margin:auto;
            }
            `}</style>
        </div>
    )
}