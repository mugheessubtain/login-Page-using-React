type Posttype={
    posts:string[]
}


export default function Posts({ posts }:Posttype) {
    return (
        <>

            {posts.map((item, i) => (
                <div>

                <p>{item.content}</p>
                <p>{item.likes}</p>

                </div>
            )
            )}
        </>
    )

}