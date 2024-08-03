
type LogoutType={
    isAuthenticted:(status:boolean)=> void
}

export default function LogOut({isAuthenticted}:LogoutType){
    const LogoutHandler=()=>{
        isAuthenticted(false)
    }
    return(
        <div style={{
            display:"flex",
            justifyContent:"center"
        }}>

        <button onClick={LogoutHandler}
        style={{
            backgroundColor: "#1877f2",

            borderRadius: "6px",
            fontSize: "20px",
            lineHeight: "48px",
            padding: "0 16px",
            width: "363px",
            color: "white",
            fontStyle: "bold"}}
        >
            Logout
        </button>
        </div>
    )
}