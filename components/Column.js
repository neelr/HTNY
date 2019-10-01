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
                @media only screen and (max-width:685px) {
                    .column , .container {
                        width:100vw !important;
                        display:block;
                    }
                }
            `}</style>
        </div>
    )
}
export default Column;