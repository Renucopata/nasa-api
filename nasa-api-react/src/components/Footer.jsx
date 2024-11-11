import React from 'react'

export default function(props) {
    const {setShowModal, data} = props
    return (
        <footer>
            <div className='bgGradient'></div>
            <div>
                <h2>{data?.title}</h2>
                <h1>APOD</h1>
            </div>
            <button onClick={() =>{
                setShowModal(true)
            }}>
                <i class="fa-solid fa-circle-info"></i>
            </button>
        </footer>

    )
}
