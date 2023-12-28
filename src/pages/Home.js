import { Link } from "react-router-dom"

function HomePage() {
    return <>
        <h1>This is home page</h1>
        Go to <Link to="/products">Product</Link>
    </>
}

export default HomePage