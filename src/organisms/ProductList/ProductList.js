import React, {useState} from 'react'
import Seed from '../../seed'
import Product from '../../molecules/Product/Product'
import Headline from '../../atoms/Headline/Headline'

const ProductList = () => {
    const [products, setProducts] = useState(Seed)

    let productsSorted = products;
    productsSorted = productsSorted.sort((a, b) => (
        b.votes - a.votes
    ));

    const handleProductUpvote = (id) => {
        const newProducts = products.map((product) => {
            if (product.id === id) {
                return Object.assign({}, product, {
                    votes: product.votes + 1,
                });
            } else {
                return product;
            }
        });
        setProducts(newProducts);
    }

    return (
        <div className='container_product-list'>
            <Headline>Top Voted Products</Headline>
            {
                productsSorted.map((product) => (
                    <Product
                        key={'product-' + product.id}
                        id={product.id}
                        title={product.title}
                        description={product.description}
                        url={product.url}
                        votes={product.votes}
                        submitterImageUrl={product.submitterImageUrl}
                        productImageUrl={product.productImageUrl}
                        onVote={handleProductUpvote}
                    />
                ))
            }
        </div>
        

    )
}

export default ProductList;