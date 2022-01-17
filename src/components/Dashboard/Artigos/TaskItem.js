import Modal from "./Modal";
import "./taskItem.css";

function TaskItem({ onClose, open, title, text, date, refe, refe2 }) {
  console.log(refe);
  return (
    <Modal modalLable="Evento" onClose={onClose} open={open}>
      <div className="taskItem">
        <img src={refe} width="300" height="300"></img>
        <h2>{title}</h2>
        <p>{date}</p>
        <p>{text}</p>
      </div>
    </Modal>
  );
}

export default TaskItem;
