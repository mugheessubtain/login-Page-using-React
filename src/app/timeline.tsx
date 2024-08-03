import Greet from "./greet";
import Hobbies from "./hobbies";
import LogOut from "./logout";
import Posts from "./posts";


export default function Timeline({userStatus,isAuthenticted}){
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
        <LogOut
        isAuthenticted={isAuthenticted}/>
        </>
    )
}