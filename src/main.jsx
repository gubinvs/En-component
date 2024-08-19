import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './component/Header/Header'
import SideNav from './component/SideNav/SideNav'
import SideNavMin from './component/SideNav/SideNavMin'
import BodyCatalogPage from './component/BodyPage/BodyCatalogPage'


ReactDOM.createRoot(document.getElementById('side-navigation-min')).render(
  <React.StrictMode>
   <SideNavMin />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('side-navigation')).render(
  <React.StrictMode>
   <SideNav />
  </React.StrictMode>,
)

// ReactDOM.createRoot(document.getElementById('header')).render(
//   <React.StrictMode>
//    <Header/>
//   </React.StrictMode>
// )

ReactDOM.createRoot(document.getElementById('main')).render(
  <React.StrictMode>
    <BodyCatalogPage title="Каталог комплектующих" discr="для производства щитов управления"/>
  </React.StrictMode>,
)

