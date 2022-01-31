function LikeButton({numCount, counter}){

    const click = (e) =>{
        e.preventDefault();
        numCount();
    }

    return(
        <button onClick={click} type="submit" className="btn btn__primary btn__lg like">
            <span>{counter} likes</span>
        </button>
    )
}

export default LikeButton;