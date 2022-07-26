import React, { useState } from 'react';

export const Add = () => {

    const [ question, setQuestion ] = useState(null);
    
    const submit = (e) => {
        e.preventDefault();
        console.log(question);
    }

    return (
        <form onSubmit={submit}>
            <label style={{
                marginBottom: "6px",
                display: "block",
            }}>
                Question
            </label>
            <textarea 
                name="question"
                style={{
                    resize: "none",
                    width: "530px",
                    height: "140px",
                    display: "block",
                    marginBottom: "6px",
                }}
                onChange={e => setQuestion(e.target.value)}
                value={question}
            />
            <button 
                type="submit"
                style={{
                    width: "530px",
                    height: "30px",
                }}
            >Submit</button>
        </form>
    )
}
