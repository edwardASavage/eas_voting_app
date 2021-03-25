import React from 'react';

const Image = (props) => {
    return (
        <div className='image'>
            <img src={props.Source}/>
        </div>
    )
}

export default Image;