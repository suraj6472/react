export default function Input({ label, id, ...props }) {
  return (
    <p className="control">
      <label htmlFor="id">{label}</label>
      <input type="text" name={id} id={id} required {...props} />
    </p>
  );
}
