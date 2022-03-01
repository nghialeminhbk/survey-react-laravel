import Toast from 'react-bootstrap/Toast'

const ToastDeleted = ({show, onShow}) => {
    return ( 
        <div className="position-fixed top-0 start-0 mt-2 me-2">
            <Toast onClose={() => onShow(false)} show={show} delay={3000} autohide>
                <Toast.Header>
                    <strong className="me-auto">Notification</strong>
                </Toast.Header>
                <Toast.Body>Deleted !</Toast.Body>
            </Toast>
        </div>
     );
}
 
export default ToastDeleted;