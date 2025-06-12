import { useNavigate } from "react-router-dom";

export default function MyComponent() {
    const navigate = useNavigate();

    return (
        <>
            <button style={{ backgroundColor: "#04AA6D" }} onClick={() => navigate('/dashboard')}>
                Navigate
            </button>
        </>
    );
}
