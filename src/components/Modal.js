import React from 'react';

const Modal = ( props ) => {

    return (
        <div id="modal-backdrop" role="dialog" aria-labelledby="dialog_title" aria-hidden={props.showModal ? 'false': 'true'} className={props.showModal ? 'opened': null}>
            <div id="modal-box" className={props.showModal ? 'show-box': null}>
                <p id="top-close"><a href="#close" onClick={props.clickClosed}>Close dialog and return</a></p>
                <div id="modal-bio">
                    <div className="biography">
                        <h2 id="dialog_title">{props.modalBio.name}</h2>
                        <p>{props.modalBio.title}</p>
                        <img alt={props.modalBio.name} src={`/images/bios/${props.name}.jpg`} />
                        <p className="popup__close"><a href="#close" onClick={props.clickClosed} aria-label="Close biography">×</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;