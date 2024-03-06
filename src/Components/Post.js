import React,{useEffect} from "react";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../redux/features/post/postSlice";

const Post=()=>{
    const {post, loading, error} = useSelector(state=>state.post)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchPost())
    },[dispatch])

    return(
        <div>
            <h1>Post</h1>
            {
                post.length>0 && (
                    post.map(post=>(
                        <div key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                            <hr/>
                        </div>
                    ))
                )
            }
        </div>
    )
}
export default Post;