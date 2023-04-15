import { useNavigate } from "react-router"

export default function Dashboard(){
    const navigate = useNavigate()
    const test = ()=>{
        navigate("/")
    }
    return (
        <div>Dashboard
            <button onClick={test}>test</button>
        </div>
    )
}