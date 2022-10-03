import React from 'react'

function Todoitem(props) {

    return (
        <div className='list' >
            <span><li > {props.text}</li></span>
         <span className='button' >  <button    class="btn btn-danger  btn btn-sml "
                onClick={() => {
                    props.onChecked(props.id);
                }}> Delete
            </button></span>

        </div>

    )
}

export default Todoitem
