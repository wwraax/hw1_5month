import { useNavigate } from "react-router-dom";


const Page1 = ({data}) => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Page1</h1>
            <button onClick={()=>{
                navigate(-1)
            }}>go back</button>

        {
             data.map((item) => (
                <div key={item.id}>
                    <h2>{item.name}</h2>
                </div>
             ))
            }
        </div>
    );
}

export default Page1;