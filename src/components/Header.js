import React from 'react';
 function Header(props){
     return(
         <div className='header'>
             <div className='title'><p>{props.title}</p></div>
             <nav>
            <a href="">{props.item1}</a>
            <a href="">{props.item2}</a>
            <a href="">{props.item3}</a>
            <a href="">{props.item4}</a>

             </nav>
         </div>
     )
 }


 export default Header;