import React, {useState} from 'react';
import "../index.css"

export const NewRoom = (props) => {
    const [name, setName] = useState('');
    const [area, setArea] = useState(undefined);
    
    const handleAreaInput = (e) => {
        const int = parseInt(e.target.value, 10);
        setArea(int >=0 ? int : '');
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (name && area){
            props.addNewRoom({name, area});
            setName('');
            setArea('');
        } else {
            console.log('invalid input');
        }
    };
    return (
        <div>
            <h3>Add your new Room</h3>
            <form onSubmit={onSubmit}>
                <input
                type='text'
                placeholder='name'
                onChange={(e) => setName(e.target.value)}
                value={name}
                />
                <input
                type='text'
                placeholder='area'
                onChange={handleAreaInput}
                value={area}
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
};