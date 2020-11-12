import React from 'react';
import Modal from 'react-modal';

const ConfirmRemoveModal = (props) => (
    <Modal 
        isOpen={!!props.removeExpenseModal}
        handleRemoveExpense = {props.handleRemoveExpense}
        handleCancelRemove = {props.handleCancelRemove}
        contentLabel="Approve Remove"
        closeTimeoutMS={200}
        className="modal"
        appElement={app}
    >
        <h3 className="modal__title">Approve Removing</h3>
        <div className="modal__body">
            <p>{props.removeExpenseObject.description}</p>          
        </div>
        <button className="button" onClick={props.handleRemoveExpense}>Remove</button>
        <button className="button button--secondary" onClick={props.handleCancelRemove}>Cancel</button>
    </Modal>
);

export default ConfirmRemoveModal;