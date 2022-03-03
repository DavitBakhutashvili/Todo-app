import React, { useState } from 'react';
import Button from './Button';

const todoItems = [
    {id: 1, city: 'tbilisi'},
    {id: 2, city: 'london'},
    {id: 3, city: 'paris'},
    {id: 4, city: 'berlin'},
    {id: 5, city: 'moscow'},
    {id: 6, city: 'new york'},

];


export default function TodoApp(){

const [value, setValue] = useState('');
const [remove, setRemove] = useState([]);

function handleSubmit(e){
    e.preventDefault();
    todoItems.push({id: todoItems.length + 1, city: value});
    setValue('');
}

function handleRemove(){
    todoItems.splice(remove, 1);
    setRemove([]);
}




    return(
        <div className="TodoApp">
            <form 
                onSubmit={handleSubmit} 
                className="form"
            >
             <input 
                className="form-control"
                type="text" 
                placeholder="Add new task" 
                value={value}
                onChange={e => setValue(e.target.value)}

            />
            <Button 
                type="submit" 
                btnClass="btnForm" 
                text="Add" 
            />
            </form>
            <ul>
                {
                    todoItems.map(item => {
                        return (
                            <li key={item.id}>
                                <input 
                                    type="checkbox" 
                                    onChange={e => setRemove(item.id)}
                                />
                                <span>
                                    {item.city}
                                </span>
                                <Button 
                                    btnClass="btnList" 
                                    text="delete" 
                                    type="button"
                                    onClick={handleRemove}
                                />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
