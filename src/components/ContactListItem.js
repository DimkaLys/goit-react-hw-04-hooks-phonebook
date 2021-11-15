export default function ContactList({ id, name, number, onDeleteContact }) {
  return (
    <li className="listItem">
      <span>{name}:</span>
      <span>{number}</span>
      <button
        className="btn"
        type="button"
        id={id}
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
}
