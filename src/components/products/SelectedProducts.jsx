import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { CardGroup } from 'reactstrap'
import { getByCategory } from '../../redux/actions'
import Cards from '../Cards'
import Loader from '../Loader'
import Header from '../partials/Header'

export default function SelectedProducts() {

  const param = useParams()
  const category = param.category

  const dispatch = useDispatch()
  const selectedProducts = useSelector(state => state.selectedProducts)

  const [isLoaded, setIsLoaded] = useState(true)

  useEffect(() => {
    getSelectedProducts()
  }, [category])

  useEffect(() => {
    if (selectedProducts !== undefined) {
      setIsLoaded(false)
    }
  }, [selectedProducts])



  async function getSelectedProducts() {
    const res = await fetch("https://dummyjson.com/products/category/" + category)
    dispatch(getByCategory(await res.json()))
  }

  return (
    <div>
      <Header />
      {isLoaded ? <Loader /> : (
        <div>
          <CardGroup>
            {
              selectedProducts.products.map((product, index) => {
                return (
                  <div>
                    <Cards key={index} product={product} />
                  </div>
                )
              })
            }
          </CardGroup>

        </div>

      )}
    </div>
  )
}
