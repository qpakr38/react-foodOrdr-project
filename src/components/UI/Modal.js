import ReactDOM from "react-dom";
import {Fragment} from "react";
import classes from './Modal.module.css';

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClick}/>;
}
const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}
const portalElementBackdrop = document.getElementById('backdrop-root');
const portalElementOverlays = document.getElementById('overlay-root');
const Modal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(
                <Backdrop onClick={props.onHideCart}/>,
                portalElementBackdrop
            )};
            {ReactDOM.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                portalElementOverlays
            )};
        </Fragment>
    )
};

export default Modal;