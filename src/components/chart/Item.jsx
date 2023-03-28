import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Col, Container, Row } from 'reactstrap'
import { deleteById } from '../../redux/actions'


export default function Item(props) {

    const [quantity, setQuantity] = useState(props.chartItem.quantity)
    const totalPrice = quantity * props.chartItem.product.price

    const dispatch = useDispatch()

    function increase() {
        setQuantity(quantity + 1)
    }
    function decrease() {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    function deleteOne() {
        dispatch(deleteById(props.chartItem.product.id))
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col className='col-2'></Col>
                    <Col className='col-8'>
                        <Container className='buy-card my-3'>
                            <Row className='my-3 py-3'>
                                <Col><img className='my-auto' width="100%" src={props.chartItem.product.images[0]} /></Col>
                                <Col>
                                    <h5>{props.chartItem.product.title}</h5>
                                    <h4>Price: {totalPrice} $</h4>
                                    <Row>
                                        <Col className='my-auto'>Quantity: {quantity}
                                            <Button onClick={deleteOne} className='btn-info my-1'>Remove</Button>
                                        </Col>
                                        <Col>
                                            <Button onClick={increase} className='btn-info mx-2 my-2'>+</Button>
                                            <Button onClick={decrease} className='btn-info mx-2 my-2'>-</Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col className='col-2'></Col>
                </Row>
            </Container>
        </div>
    )
}
