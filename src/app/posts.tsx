type Post = {
   content:string;
   likes:number
}
type PostType={
    posts:Post[]
}


export default function Posts({ posts }: PostType) {
    return (
        <>
            <h2 style={{
                display:"flex",
                justifyContent:"center",
                textDecoration:"underline"
            }}>Posts</h2>
            {posts.map((item, i) => (
            <>
                <div 
                style={{
                    display:"flex",
                    justifyContent:"center"
                }}>

                    <p style={{
                        border:"1px solid grey",
                        borderRadius:"10px",
                        padding:"10px"
                    }}>{item.content}</p>
                </div>
                <div style={{
                    display:"flex",
                    justifyContent:"center"
                }}>

                    <p style={{fontWeight:"bold"}}>({item.likes} Likes)</p>
                </div>

                </>
            )
            )}
        </>
    )

}