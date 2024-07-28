type HobbiesType = {
    hobby: string[];
};

export default function Hobbies({ hobby }: HobbiesType) {
    return (
        <ul>

            {hobby.map((item, i) => (

                <li>{item}</li>
            )
            )}
        </ul>
    )

}