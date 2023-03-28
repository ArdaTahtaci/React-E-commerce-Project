import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Container, Row } from 'reactstrap'
import { deleteAllItemsInChart } from '../../redux/actions'
import Footer from '../partials/Footer'
import Header from '../partials/Header'
import EmptyChart from './EmptyChart'
import Item from './Item'
import alertify from 'alertifyjs'

export default function BuyChart() {

    const chart = useSelector(state => state.chart)
    const dispatch = useDispatch()

    const [isEmpty, setIsEmpty] = useState(true)

    useEffect(() => {
        if (JSON.stringify(chart) !== JSON.stringify([])) {
            setIsEmpty(false)
        }
        else if (JSON.stringify(chart) === JSON.stringify([])) {
            setIsEmpty(true)
        }
    }, [chart])

    function deleteAll() {
        dispatch(deleteAllItemsInChart())
        setIsEmpty(true)
        alertify.success("Chart is cleaned")
    }

    function buyAll() {
        dispatch(deleteAllItemsInChart())
        setIsEmpty(true)
        alertify.success("You bought them all")
    }

    return (
        <div>
            <Header />
            {isEmpty ? <EmptyChart /> : (
                <div>
                    <Button onClick={deleteAll} className='my-3 btn-info btn-lg'>Remove all</Button>
                    <Container>
                        {
                            chart.map((chartItem, index) => {
                                return (
                                    <Item key={index} chartItem={chartItem} />
                                )
                            })
                        }
                        <Button onClick={buyAll} className='btn-info my-3 btn-lg'>Buy All</Button>
                    </Container>
                </div>

            )}

            <Footer />
        </div>
    )
}
