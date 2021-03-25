import React from 'react';
import Caret from '../../atoms/Caret/Caret';
import Image from '../../atoms/Image/Image'
const Product = (props) => {

    const handleUpVote = () => {
        props.onVote(props.id)
    };

    return (

            <div className='product'>
                <Image Source={props.productImageUrl} />
                <div className='product_content'>
                    <div className='header'>
                        <a onClick={handleUpVote}>
                            <Caret/>
                        </a>
                        <div className='votes'>{props.votes}</div>
                    </div>
                        <div className='text_description'>
                            <a href={props.url}>
                                {props.title}
                            </a>
                            <p>
                                {props.description}
                            </p>
                        </div>
                        <div className='container_extra'>
                            <div>Submitted by: </div>
                            <Image Source={props.submitterAvatarUrl}/>
                        </div>
                    </div>
                </div>


    )
}

export default Product;