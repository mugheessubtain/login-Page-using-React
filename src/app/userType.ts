type postType={
    content:string,
    likes:number
}

export  type userType={
    email:string,
    password:string,
    userName:string,
    hobbies:string[],
    posts:postType[]
}