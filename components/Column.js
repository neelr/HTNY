function Column (props)  {
    return(
        <div className="column">
            <div className="container">
                {props.children}
            </div>
            <style jsx>{`
                .column {
                    width:50vw;
                    display:flex;
                    flex-direction:column;
                }
                .container {
                    max-width:80%;
                    margin:auto;
                }
            `}</style>
        </div>
    )
}
export default Column;