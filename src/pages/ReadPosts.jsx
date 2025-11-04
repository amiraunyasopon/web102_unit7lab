import { useState, useEffect } from 'react'
import Card from '../components/Card'
import { supabase } from '../client'

const ReadPosts = (props) => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPost = async () => {
            // specifying which table we want it from ('Posts')
            // returns all database entries with .select()
            // .order orders the fetched db entries by a given column(s)
            // update the variable state of variable 'posts' by passing returned db entries to data in setPosts
            const { data } = await supabase
                .from('Posts')
                .select()
                .order('created_at', { ascending: true })

            // set state of posts
            setPosts(data)
        }
        fetchPost()
    }, [props])

    return (
        <div className="ReadPosts">
            {/* maps all the posts in the 'posts' variable */}
            {
                posts && posts.length > 0 ?
                    [...posts]
                        .sort((a, b) => a.id - b.id)
                        .map((post, index) =>
                            <Card
                                key={post.id}
                                id={post.id}
                                title={post.title}
                                author={post.author}
                                description={post.description}
                            />
                        ) : <h2>{'No Challenges Yet 😞'}</h2>
            }
        </div>
    )
}

export default ReadPosts