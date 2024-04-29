
function ColorCard ({color,setColor}) {
    console.log(color)
    return(
        <div>
            <h2>This Colour Suit For You Today</h2>
            <img src={color} alt="pic" />
            <button>Save</button>
        </div>
    )
}
export default ColorCard;