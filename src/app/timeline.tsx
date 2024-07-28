import Greet from "./greet";
import Hobbies from "./hobbies";
import Posts from "./posts";


export default function Timeline({userStatus}){
    return(
        <>
        <Greet
        userName={userStatus?.userName}
        />
        <Hobbies
        hobby={userStatus?.hobbies}
        />
        <Posts
        posts={userStatus?.post}
        />
        </>
    )
}