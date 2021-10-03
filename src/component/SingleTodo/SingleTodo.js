import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Button } from 'react-bootstrap';
import './SingleTodo.css';

const SingleTodo = () => {
    const {id} = useParams();
    console.log(id);

    const [singleTodo,setSingleTodo] = useState([]);

    const history = useHistory();

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res => res.json())
        .then(data => setSingleTodo(data))
    },[id])


    const handlesingleBtn = () =>{
        history.push('/todos')
    }


    return (
        <div className="single-todo">
            <h2>{singleTodo.title}</h2>
            {
                singleTodo.completed? <Button onClick={handlesingleBtn} variant="success"> True </Button> : <Button onClick={handlesingleBtn} variant="danger"> False</Button>
            }
        </div>
    );
};

export default SingleTodo;