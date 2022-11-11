const Todo = (props) => {
    return(
        <div>
            <input type="checkbox" />
            <label>{props.children}</label>
            <button onClick={props.onClickfn}>
            🗑️
            </button>
        </div>
    )
}
export default Todo