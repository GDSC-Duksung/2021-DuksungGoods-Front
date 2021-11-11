import React from "react";
import MyinfoForm from "../components/myinfoForm";

function Myinfo() {
  const handleCreate = (data) => {
    console.log(data);
  };
  return (
    <div className="Myinfo">
      <MyinfoForm onCreate={handleCreate} />
    </div>
  );
}
export default Myinfo;
