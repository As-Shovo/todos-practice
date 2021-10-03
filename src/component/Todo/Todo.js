import React from 'react';
import {Button, Table } from 'react-bootstrap';
import { useHistory } from 'react-router';

import './Todo.css';

const Todo = (props) => {
    const history = useHistory()
    const { id, title } = props.todo;

    const todohandle = id => {
        history.push(`/todos/${id}`)
    };


    return (
            <Table size="sm">
                <tbody>
                    <tr className="table">
                        <td>{id}</td>
                        <td>{title}</td>
                        <td><Button onClick={() => todohandle(id)}>Todo</Button></td>
                    </tr>

                </tbody>
            </Table>
    );
};

export default Todo;