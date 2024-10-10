import React from 'react';
import ReactDOM from 'react-dom/client'

import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

import './index.css'

/**
Challenge: find out what happens if we try to append JSX
to our div#root using .append() instead of ReactDOM

1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append
   your JSX
3. See if you can guess what will show up in the browser before running
   the code
4. See if you can explain what actually shows up in the browser
 */
// const page = (
//   <div>
//       <img src={ReactLogo} width="40px" alt="" />
//       <h1>Fun facts about React</h1>
//       <ul>
//         <li>Was first released in 2013</li>
//         <li>Was originally created by Jordan Walke</li>
//         <li>Has well over 100K stars on Github</li>
//         <li>Is maintained by Facebook</li>
//         <li>Powers thousands of enterprise apps, including mobile apps</li>
//       </ul> 
//   </div>
// )

// ReactDOM.createRoot(document.getElementById("root")).render(page)







/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */

// function Page() {
//   return (
//     <ol>
//       <li>I want a job</li>
//       <li>I want to learn a new skill</li>
//     </ol>
//   )
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<Page />)

/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."

 */

// function Page() {
//   return (
//     <>
//       <header>
//         <nav>
//           <img src={ReactLogo} width="40px" alt="" />
//         </nav>
//       </header>
//       <h1>Why I wanna learn React</h1>
//       <ol>
//         <li>I want a job</li>
//         <li>I want to learn a new skill</li>
//       </ol>
//       <footer>© 2024 Ciaravella development. All rights reserved.</footer>
//     </>
//   )
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<Page />)



/* 
  Breaking up the large page component into smaller components
*/




function Page() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<Page />)
