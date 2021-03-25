import React from 'react';

const Product = (props) => {

    const handleUpVote = () => {
        props.onVote(props.id)
    };

    return (
        <div>
            <div className='image'>
                <img src={props.productImageUrl}></img>
            </div>
            <div className='main'>
                <div className='header'>
                    <a onClick={handleUpVote}>
                        <i>#_#_#</i>
                    </a>
                    {props.votes}
                </div>
                <div className='description'>
                    <a href={props.url}>
                        {props.title}
                    </a>
                    <p>
                        {props.description}
                    </p>
                </div>
                <div className='extra'>
                    <span>By: </span>
                    <img
                        className='image'
                        src={props.submitterAvatarUrl}
                    />
                </div>
            </div>
        </div>
    )
}

export default Product;