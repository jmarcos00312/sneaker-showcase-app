import React, { useEffect, useState } from 'react'
import CardCarousel from './CardCarousel'
import { useNavigate } from "react-router-dom"
import { Card, Button } from 'react-bootstrap'


function PurchasedItems() {
    const [purchased, setPurchased] = useState([])


    useEffect(() => {
        fetch('api/purchased_items').then(r => r.json()).then(data => {
            setPurchased(data)

        })
    }, [])


    let shoesPurchased = purchased.map((shoe) => {
        return (
            <div>
                <Card>
                    <Card.Img variant="top" src={shoe.img_url} />
                    <Card.Body>
                        {/* <Card.Title>{shoe.name}</Card.Title> */}
                        <Card.Text>
                            <p>price: {"$"}{shoe.price}</p>
                            <p>rating: {shoe.rating}</p>
                            <p>brand: {shoe.brand.name}</p>
                            <p>Bought From: {shoe.seller.first_name}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>

            </div>
        )
    })


    return (
        <div className="row_poster">
            {shoesPurchased}
        </div>
    )
}

export default PurchasedItems
