// import React, { Component } from 'react'
// import './hamburger.css'
// import $ from 'jquery';
// import { Link } from "react-router-dom"
// export default class Hamburger extends Component {

//     render() {
//         $(document).ready(function () {

//             $(".cross").hide();
//             $(".menu").hide();
//             $(".hamburger").show();

//             $(".hamburger").click(function () {
//                 $(".menu").slideToggle("slow", function () {
//                     $(".hamburger").hide();
//                     $(".cross").show();
//                 });
//             });

//             $(".cross").click(function () {
//                 $(".menu").slideToggle("slow", function () {
//                     $(".cross").hide();
//                     $(".hamburger").show();
//                 });
//             });

//         });
//         return (
//             <div>
//                 <div className="hamburger-header">
                    
//                     <button className="hamburger">&#9776;</button>
//                     <button className="cross">&#735;</button>
//                 </div>

//                 <div className="menu">
//                     <ul>
//                         <Link to="/"><li id="menu">LINK ONE</li></Link>
//                         <Link to="/login"><li>LINK TWO</li></Link>
//                         <Link to="/ignite"><li>LINK THREE</li></Link>
//                         <Link to="/"><li>LINK FOUR</li></Link>
//                         <Link to="/"><li>LINK FIVE</li></Link>
//                     </ul>
//                 </div>
//             </div>
//         )
//     }
// }


