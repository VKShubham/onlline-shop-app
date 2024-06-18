import React from 'react'
import Navbar from '../componets/Navbar/Navbar'
import Filter from '../componets/ProductList/Filter'
import ProductList from '../componets/ProductList/ProductList'
import Pagination from '../componets/Pagination/Pagination'

function HomePage() {
  return (
    <div>
       <Navbar>
          <Filter>
            <ProductList />
          </Filter>
       </Navbar>
    </div>
  )
}

export default HomePage
    