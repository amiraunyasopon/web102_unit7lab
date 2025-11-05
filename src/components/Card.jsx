import { useState } from 'react'
import './Card.css'
import more from './more.png'
import { Link } from 'react-router-dom'
import { supabase } from "../client.js"

const Card = (props) => {

    const [count, setCount] = useState(0)
    const updateCount = async (event) => {
        event.preventDefault()

        // specifying the table we want is 'Posts'
        // update the betCount attribute
        // .eq() filter to ensure only the row with the matching id of the current post is updated in the database
        await supabase
            .from('Posts')
            .update({ betCount: count + 1 })
            .eq('id', props.id)

        setCount((count) => count + 1);
    }

    return (
        <div className="Card">
            <Link to={'edit/' + props.id}><img className="moreButton" alt="edit button" src={more} /></Link>
            <h2 className="title">{props.title}</h2>
            <h3 className="author">{"by " + props.author}</h3>
            <p className="description">{props.description}</p>
            <button className="betButton" onClick={updateCount} >👍 Bet Count: {count}</button>
        </div>
    );
};

export default Card