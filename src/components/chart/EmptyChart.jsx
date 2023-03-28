import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Container } from 'reactstrap'

export default function EmptyChart() {

    const navigate = useNavigate()

    return (
        <div>
            <h1>Chart is empty</h1>
            <Container>
                <img className='my-4' width="250px" height="250px" alt='chart' src='https://cdn-icons-png.flaticon.com/512/263/263142.png' />
            </Container>
            <Button className='my-4' onClick={() => navigate("/")}>Go Shopping</Button>
        </div>
    )
}
