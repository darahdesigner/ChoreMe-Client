import React from "react";
import { Link } from "react-router-dom"

const Darah = () => {
return(
             <div className="persContact">
                <h3>Darah Snider</h3>
                <br />
               <Link to= "https://github.com/darahdesigner/">Github</Link>
               <br /><br />
               <Link to= "https://www.linkedin.com/in/darahsnider/">LinkedIn</Link>
               <br /><br />
               <Link to= "https://darahdesigner.github.io/DarahPortfolio/">Web Development Portfolio</Link>
               <br /><br />
               <Link to= "https://darahsnider.myportfolio.com/">UX/UI, Graphic Design, and Illustration Portfolio</Link>
             </div>

)};

export default Darah;