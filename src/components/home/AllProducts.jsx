import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cards from '../Cards'
import { getAllProducts } from "../../redux/actions.js"
import { CardGroup, Col, Container, Row } from 'reactstrap'
import Loader from '../Loader'

export default function AllProducts() {

    const allProducts = useSelector(state => state.allProducts)
    const dispatch = useDispatch()

    const [isLoaded, setIsLoaded] = useState(true)

    useEffect(() => {
        getProducts()
    }, [])
    useEffect(() => {
        if (allProducts !== undefined) {
            setIsLoaded(false)
        }
    }, [allProducts])


    async function getProducts() {
        const res = await fetch('https://dummyjson.com/products')
        dispatch(getAllProducts(await res.json()))
    }


    return (
        <div>
            {isLoaded ? <Loader /> : (<div>
                <Container>
                    <Row>
                        <CardGroup>
                            {allProducts.products.map((product, index) => {
                                return (
                                    <div>
                                        <Col className='mx-2'>
                                            <Cards key={index} product={product} />

                                        </Col>

                                    </div>
                                )
                            })}
                        </CardGroup>

                    </Row>


                </Container>

            </div>)}


        </div>
    )
}
