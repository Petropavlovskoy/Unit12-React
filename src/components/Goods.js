function Goods(props) {
    return(
        <div>
            <img src = {props.image} alt=""/>
            <p>{props.title}</p>
            <p>{props.cost}</p>
            <button data-key={props.articul}>Add to cart</button>
        </div>
    );
}

export default Goods;