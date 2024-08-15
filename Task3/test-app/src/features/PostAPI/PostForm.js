import React, { useState } from 'react';
import axios from 'axios';

export default function PostForm() {
    const [formData, setFormData] = useState({
        title: '',
        body: '',
        userId: 1,
    });

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', formData, {
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8', 
                },
            });
    
            alert('Form submission successful:', response.data);
        } catch (error) {
            alert('Form submission error:', error);
        }
    };
    
    return (
        <div>
            <h1>Form Example</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input type="text" name="title" id="title" value={formData.title} onChange={handleChange}/>
                <br/>
                <label htmlFor="body">Body:</label>
                <textarea name="body" id="body" value={formData.body} onChange={handleChange}/>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
      );
}