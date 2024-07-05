import { useState } from "react";
import PetTip from "./PetTip";

const tipsArray = [
  {
    title: "Regular Vet Visits",
    description: "Ensure your pet has regular vet check-ups to maintain good health.",
  },
  {
    title: "Proper Nutrition",
    description:
      "Provide a balanced diet suitable for your pet's age, breed, and health condition.",
  },
];

export default function PetList() {
  const [tipsList, setTipsList] = useState(tipsArray);

  function handleForm(e) {
    e.preventDefault();
    let newTip = {
      title: e.target.title.value,
      description: e.target.description.value,
    };
    setTipsList([...tipsList, newTip]);
  }

  return (
    <section className="container mt-5">
      <h2 className="mb-4">Pet Care Tips</h2>
      <form onSubmit={handleForm} className="mb-4">
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            className="form-control"
            placeholder="e.g. Grooming"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            className="form-control"
            placeholder="e.g. Brush your pet's fur regularly to prevent matting."
          />
        </div>
        <button type="submit" className="mt-3 btn btn-primary">
          Add Tip
        </button>
      </form>
      {tipsList.map((tip) => (
        <PetTip key={tip.title} title={tip.title} description={tip.description} />
      ))}
    </section>
  );
}
