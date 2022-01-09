import Modal from "./Modal";
import "./taskItem.css";

function TaskItem({ onClose, open, title, month, date, refe }) {
  console.log(refe);
  return (
    <Modal modalLable="Evento" onClose={onClose} open={open}>
      <div className="taskItem">
        <img src={refe} width="300" height="300"></img>
        <h2>{title}</h2>
        <p>{date}</p>
        <p>{month}</p>
      </div>
    </Modal>
  );
}

export default TaskItem;
