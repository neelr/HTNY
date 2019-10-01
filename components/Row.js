 function Row (props) {
    return(
        <div className="row">
            {props.children}
            <style jsx>{`
                .row {
                    height:50vh;
                    flex-direction:row;
                    display:flex;
                }
                @media only screen and (max-width:685px) {
                    .row {
                        flex-direction:column !important;
                    }
                }
            `}</style>
        </div>
    )
}
export default Row;