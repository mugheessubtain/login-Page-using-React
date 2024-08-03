type GreetType = {
    userName: string
}

export default function Greet({userName}:GreetType){
    return( 
    
        <div>

    <h1 style={{
        display:"flex",
        justifyContent:"center"
    }}>Welcome {userName}</h1>
    <br />
    </div>
    )
}