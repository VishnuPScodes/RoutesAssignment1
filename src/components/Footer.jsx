import "../App.css"
import { Link } from "react-router-dom"

export const Footer=(()=>{
    return <div id="footer">
        <Link to={'/'}>Looking for a Job?</Link>
        <Link to={'/FAQ'}>FAQ</Link>
        <img src="https://img.icons8.com/color/2x/bebo.png" alt="" />
        <img src="https://img.icons8.com/ios-filled/2x/tumblr.png" alt="" />
    </div>
})