import React from "react";
import PrepostingForm from "../components/PrepostingForm";

function Preposting() {
  const handleCreate = (data) => {
    console.log(data);
  };
  return (
    <div className="Preposting">
      <PrepostingForm onCreate={handleCreate} />
    </div>
  );
}
export default Preposting;
