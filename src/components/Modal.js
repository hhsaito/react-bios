import React from 'react';

const Modal = ({ modalBio, modalClick }) => {

    return (
        <div id="modal-backdrop" role="dialog" aria-labelledby="dialog_title" aria-hidden="false">
            <div id="modal-box">
                <p id="top-close"><a href="#hello">Close dialog and return</a></p>
                <div id="modal-bio">
                    {modalBio}
                </div>
            </div>
        </div>
        // <div className='photo-grid contain-1120'>
        //     <div className="gutter-sizer"></div>
        //     {biosArray}
        // </div>
    );
}

export default Modal;