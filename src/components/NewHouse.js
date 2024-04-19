import React, {useState} from 'react';
import "../index.css";

export const NewHouse = (props) => {
    const [name, setName] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        if (name !== "") {
            props.addHouse({name});
            setName('');
        } else {
            console.log('invalid input');
        }
    }

    return (
        <div>
            <h3>Add your new House</h3>
            <form onSubmit={onSubmit}>
                <div>
                    <input
                        type='text'
                        className='form-control'
                        placeholder='name'
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        >
                   </input>
                 <div>
                    <button type='submit'>
                        Add House
                    </button>
                 </div>
                </div>
            </form>
        </div>
    )
}
