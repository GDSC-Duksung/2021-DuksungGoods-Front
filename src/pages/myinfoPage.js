//전달 된 값 받는 페이지
import React, { Component } from "react";
import MyinfoForm from "../components/myinfoForm";

function MyinfoPage() {
  const handleCreate = (data) => {
    console.log(data);
  };
  return (
    <div className="MyinfoPage">
      <MyinfoForm onCreate={handleCreate} />
    </div>
  );
}
export default MyinfoPage;
