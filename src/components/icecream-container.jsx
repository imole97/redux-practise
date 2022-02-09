import { buyIcecream } from "../redux"
import { connect } from "react-redux"

const IcecreamContainer = ({numOfIcecream,buyIcecream}) => {
    return (
        <div>
            <h2>Number of icecream - {numOfIcecream}</h2>
            <button onClick={buyIcecream}>By Icecream</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numOfIcecream: state.icecream.numOfIcecream
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyIcecream: () => dispatch(buyIcecream())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IcecreamContainer) 