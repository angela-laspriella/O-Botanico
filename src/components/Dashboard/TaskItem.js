import Modal from "./Modal";
import "./taskItem.css";

function TaskItem({ onClose, open, title, month, date }) {
  return (
    <Modal modalLable="Task Item" onClose={onClose} open={open}>
      <div className="taskItem">
        <h2>{title}</h2>
        <p>{date}</p>
        <p>{month}</p>
      </div>
    </Modal>
  );
}

export default TaskItem;
