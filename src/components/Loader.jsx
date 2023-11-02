import React from 'react'

const Loader = ({key}) => {
    return (
        <div className='loader' key={key}>
            <div className='stoke-container'>
                <div className='logo'>
                    <h1></h1>
                    <i></i>
                </div>

                <div className='chart-container'>
                   
                </div>
            </div>
        </div>
    )
}

export default Loader
