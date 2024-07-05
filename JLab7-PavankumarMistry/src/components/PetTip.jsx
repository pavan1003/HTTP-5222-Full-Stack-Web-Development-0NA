export default function PetTip(props) {
  return (
    <div className="mb-3">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}
