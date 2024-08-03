type HobbiesType = {
    hobby: string[];
};

export default function Hobbies({ hobby }: HobbiesType) {
    return (
        <>
        <h2 style={{
                display:"flex",
                justifyContent:"center",
                textDecoration:"underline"
            }}>Hobbies</h2>
            <ul>
                {hobby.map((item, i) => (

                    <li>{item}</li>
                )
                )}
            </ul>
            <br /><br /><br />
        </>
    )

}