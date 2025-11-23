export default function ModalDialog({ hand, title, children, show }) {
  if (!show) return null; // component will not render

  return (
    <div className="overlay">
      <div className="modal">
        <h1>{title}</h1>
        {children}
        <button onClick={hand} class="cls_btn">
          Close
        </button>
      </div>
    </div>
  );
}
