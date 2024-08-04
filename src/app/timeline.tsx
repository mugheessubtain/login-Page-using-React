import Greet from "./greet";
import Hobbies from "./hobbies";
import LogOut from "./logout";
import Posts from "./posts";
import { userType } from "./userType";

type TimelineType={
    userStatus:userType;
    isAuthenticted:()=> void
}
export default function Timeline({userStatus,isAuthenticted}:TimelineType){
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