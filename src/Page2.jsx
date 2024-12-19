import { useNavigate } from "react-router-dom";


const Page2 = ({dataPage}) => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Page2</h1>
            <button onClick={()=>{
                navigate(-1)
            }}>go back</button>
       {
        dataPage.map((item) => (
            <div key={item.id}>
                <h2>{item.title}</h2>
            </div>
        ))
       }

        </div>
    );
}

export default Page2;