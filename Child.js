const Child = (props) => {
    const childValue = "childValue";

    const onClickHandler = () => {
        props.OnPassValue(childValue)
    }



    return (<div>
        I am a Child component
        <button onClick={onClickHandler}>Click</button>
    </div>)

}

export default Child;