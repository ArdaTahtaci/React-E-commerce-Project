import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap'
import { addToChart } from '../redux/actions'
import alertify from 'alertifyjs'

export default function Cards(props) {

    const dispatch = useDispatch()

    const item = {
        quantity: 1,
        product: props.product
    }


    function handleClick() {
        dispatch(addToChart(item))
        alertify.success(props.product.title + " added to chart")
    }

    const navigate = useNavigate()

    return (
        <div>
            <Card
                onClick={() => navigate("/category/" + props.product.category + "/" + props.product.id)}
                className='mx-3 my-3'
                style={{
                    width: "18rem"
                }}
            >
                <img
                    className='card-img'
                    alt="Sample"
                    src={props.product.images[0]}
                />
                <CardBody>
                    <CardTitle tag="h5">
                        {props.product.title}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        {props.product.category}
                    </CardSubtitle>
                    <CardText>
                        {props.product.description}
                    </CardText>
                    <h5>Price: {props.product.price} $</h5>
                    <Button onClick={handleClick} className='btn-info'>
                        Add to Chart
                    </Button>
                </CardBody>
            </Card>
        </div>
    )
}
