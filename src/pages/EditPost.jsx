import { useState } from 'react'
import { useParams } from 'react-router-dom'
import './EditPost.css'
import { supabase } from '../client'

const EditPost = ({ data }) => {

    const { id } = useParams()
    const [post, setPost] = useState({ id: null, title: "", author: "", description: "" })

    const handleChange = (event) => {
        const { name, value } = event.target
        setPost((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    const updatePost = async (event) => {
        // prevent page from automatically reloading
        event.preventDefault()

        // .from() to specify the Posts table, 
        // .update operation to pass a json with the post data from the form
        // .eq() filter to ensure only the row with the matching id of the current post is updated in the database
        await supabase
            .from('Posts')
            .update({ title: post.title, author: post.author, description: post.description })
            .eq('id', id)

        // redirect back to root URL a.k.a the homepage
        window.location = "/"
    }

    return (
        <div>
            <form>
                <label htmlFor="title">Title</label> <br />
                <input type="text" id="title" name="title" value={post.title} onChange={handleChange} /><br />
                <br />

                <label htmlFor="author">Author</label><br />
                <input type="text" id="author" name="author" value={post.author} onChange={handleChange} /><br />
                <br />

                <label htmlFor="description">Description</label><br />
                <textarea rows="5" cols="50" id="description" name="description" value={post.description} onChange={handleChange} >
                </textarea>
                <br />
                <input type="submit" value="Submit" onClick={updatePost} />
                <button className="deleteButton">Delete</button>
            </form>
        </div>
    )
}

export default EditPost