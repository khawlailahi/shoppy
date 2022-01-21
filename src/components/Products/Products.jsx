import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';


const products = [
    {id: 1, name: 'Shoes', description: 'Running shoes', price: '$20', image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/5bc6230d24924736ab03ab4a009aed6c_9366/Fluidstreet_Shoes_Black_FW1703_01_standard.jpg'},
    {id: 2, name: 'Macbook', description: 'Apple Macbook', price: '$1200', image: 'https://www.notebookcheck.com/uploads/tx_nbc2/air13teaser.jpg'},
]
const Products = () =>{
    return (
        <main>
            <Grid container justifyContent="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product  product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main> 
    )

}

export default Products;
