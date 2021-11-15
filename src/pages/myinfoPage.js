import React from "react";
import MyinfoForm from "../components/myinfoForm";

function MyinfoPage() {
  const handleCreate = (data) => {
    console.log(data);
  };
  return (
    <div className="Myinfo">
      <MyinfoForm onCreate={handleCreate} />
    </div>
  );
}
export default MyinfoPage;
