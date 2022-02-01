function LikeButton({numCount, counter}){

    const click = (e) =>{
        e.preventDefault();
        numCount();
    }

    const text = counter === 1 ? 'Like' : 'Likes';

    return(
        <button onClick={click} type="submit" className="btn btn__primary btn__lg like">
            <span>{counter} {text}</span>
        </button>
    )
}

export default LikeButton;