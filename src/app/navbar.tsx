


export default function NavBar({ isAuthenticted, setUser }) {
    return (
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100px",
            backgroundColor: "#1877f2"
        }}>
            <div>

                <h1 style={{
                    color: "white",
                    paddingLeft:"50px"
                }}>My App</h1>

            </div>
            <div> 
                
                {
                    isAuthenticted?<h1 style={{color:"white",
                        paddingRight:"50px"
                    }}>{setUser.userName}</h1>:
                    <h1></h1>
                }
            </div>

        </div>


    )
}