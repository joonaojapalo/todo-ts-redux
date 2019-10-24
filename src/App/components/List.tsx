import { connect } from "react-redux";
import React, { useState } from "react";

import { addTodo } from "../store/ducks/todo";
import { TodoState } from "../store/ducks/todo/types";

const List: React.FunctionComponent<ListProps> = ({items, addTodo}) => {
    const [text, setText] = useState<string>('');

    return (
        <>
            <ul>
                {items.map(item => <li>{item.title}</li>)}
            </ul>
            <hr/>
            <input placeholder="Type todo item..." value={text} onChange={ev => setText(ev.target.value)}/>
            <button onClick={() => text && addTodo(text) && setText('')}>Add</button>
        </>
    );
};

const mapStateToProps = (state: TodoState) => {
    return {
        items: state.todos
    }
};

const mapDispatchToProps = {
    addTodo
}

type ListProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(List);
