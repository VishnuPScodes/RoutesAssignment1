import { Link } from "react-router-dom"


export const Navbar=(()=>{
    return <div style={{display:"flex"}}>
        <Link to={"/About"}>ABOUT</Link>
        <Link to={"/"}>HOME</Link>
        <Link to={"FRUITES"}>FRUITES</Link>
        <Link to={"/VEG"}>VEG</Link>
        <Link to={"FASHION"}>FASHION</Link>
        <Link to={"/Contact"}>Contact us</Link>
        <img src="https://img.icons8.com/ios-glyphs/2x/shopping-cart-promotion.png" alt="" />
    </div>
})