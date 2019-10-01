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
            `}</style>
        </div>
    )
}
export default Row;