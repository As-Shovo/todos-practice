import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Todo from '../Todo/Todo';

const Todos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => setTodos(data))
    }, [])
    return (
        <div>
            <h2>All Todos</h2>
            <Container>

                <Row>
                    {
                        todos.map(todo => <Todo key={todo.id} todo={todo}></Todo>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Todos;