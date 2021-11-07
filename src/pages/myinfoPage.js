//전달 된 값 받는 페이지
import React, { Component } from "react";
import Myinfo from "../components/myinfoForm";

class MyinfoPage extends Component {
  handleCreate = (data) => {
    console.log(data);
  };
  render() {
    return (
      <div className="MyinfoPage">
        <Myinfo onCreate={this.handleCreate} />
      </div>
    );
  }
}
export default MyinfoPage;
