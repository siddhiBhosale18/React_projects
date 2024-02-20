import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// function MyApp() {
 
//   return (
 
//     <a href="http://google.com" target='_blank' >Visit Google</a>
    
     
//   )
// }

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Clock me to visit google'
// }

const reactElement=React.createElement(
  'a',
  {href:'http://google.com',target: '_blank'  },
  'I am Google'
)

ReactDOM.createRoot(document.getElementById('root')).render(

    // {/* <App /> */}
    // {/* <MyApp /> */}
    reactElement
  
)
