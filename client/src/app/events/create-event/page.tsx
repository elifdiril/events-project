"use client";
import React from 'react';

const CreateEvent = () => {

    const submitHandler = async (e: any) => {
        e.preventDefault();
        console.log(e.target.value);
        /*const data = await fetch('http://localhost:5000/events', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(e.target.elements),
        });*/
    }

    return (
        <form onSubmit={(e) => submitHandler(e)}>
            <h1>Create Event</h1>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" />
            <label htmlFor="image">Image</label>
            <input type="text" id="image" />
            <label htmlFor="date">Date</label>
            <input type="date" id="date" />
            <label htmlFor="location">Location</label>
            <input type="text" id="location" />
            <button type="submit">Submit</button>
        </form>
    );
};

export default CreateEvent;