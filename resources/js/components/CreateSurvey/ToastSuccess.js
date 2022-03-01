import Toast from 'react-bootstrap/Toast'

const ToastSucess = ({show, onShow}) => {
    return ( 
        <div className="position-fixed top-0 end-0 mt-2 me-2">
            <Toast onClose={() => onShow(false)} show={show} delay={2000} autohide>
                <Toast.Header>
                    <strong className="me-auto">Notification</strong>
                </Toast.Header>
                <Toast.Body>Success !</Toast.Body>
            </Toast>
        </div>
     );
}
 
export default ToastSucess;