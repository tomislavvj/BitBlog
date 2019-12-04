import React from 'react'
import PostItem from '../Components/Posts/PostItem'

const Home = (props) => {
    return (
        <>
            <h1>POSTS</h1>
            <div className="mainPost">
                <PostItem />
            </div>
        </>
    )
}
export default Home