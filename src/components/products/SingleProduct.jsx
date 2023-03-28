import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Container, Row } from 'reactstrap'
import { addToChart, getById } from '../../redux/actions'
import Loader from '../Loader'
import Footer from '../partials/Footer'
import Header from '../partials/Header'
import alertify from 'alertifyjs'

export default function SingleProduct() {

    const [isLoaded, setIsLoaded] = useState(true)

    const product = useSelector(state => state.singleProduct)
    const dispatch = useDispatch()

    const param = useParams()
    const id = param.id

    async function getProduct() {
        const res = await fetch("https://dummyjson.com/products/" + id)
        dispatch(getById(await res.json()))
    }

    useEffect(() => {
        getProduct()
        setIsLoaded(true)
    }, [])
    useEffect(() => {
        if (product !== undefined) {
            setIsLoaded(false)
        }
    }, [product])

    const [quantity, setQuantity] = useState(1)

    function handleChange(e) {
        setQuantity(e.target.value)
    }

    function increase() {
        setQuantity(quantity + 1)
    }

    function decrease() {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    function handleClick() {
        dispatch(addToChart({
            quantity: quantity,
            product: product
        }))
        alertify.success(product.title + " added to chart")
    }

    return (
        <div>
            <Header />
            {isLoaded ? <Loader /> : (
                <div className='mx-auto'>
                    <Container>
                        <Row>
                            <Col className='col-3' ></Col>
                            <Col className='col-6'>
                                <div className='single-item-card'>
                                    <CardBody className='single-card-body mt-3'>
                                        <CardTitle tag="h3">{product.title}</CardTitle>
                                        <CardSubtitle
                                            className="mx-auto my-2 text-muted"
                                            tag="h6"
                                        >
                                            {product.category}
                                        </CardSubtitle>
                                        <CardText className='mx-2 my-2'>
                                            {product.description}
                                        </CardText>
                                    </CardBody>
                                    <div className='my-3'>
                                        <img
                                            className='single-card-img'
                                            alt="Sample"
                                            src={product.images[0]}
                                        />
                                    </div>

                                    <CardBody className='single-card-body'>
                                        <Container>
                                            <Row>
                                                <Col>
                                                    Quantity:
                                                    <input onChange={(e) => handleChange(e)} value={quantity} className='quantity-input mx-2' />
                                                    <Button onClick={increase} className='mx-2 btn-info'>+</Button>
                                                    <Button onClick={decrease} className='mx-2 btn-info'>-</Button>
                                                </Col>

                                            </Row>
                                            <Row><Col><Button onClick={handleClick} className='btn-info my-4 my-2'>Add to Chart</Button></Col></Row>
                                        </Container>

                                    </CardBody>
                                </div>
                            </Col>
                            <Col className='col-3'></Col>
                        </Row>

                    </Container>

                </div>
            )}
            <Footer />
        </div>
    )
}
