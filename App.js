import "./App.css";
import React, { Component } from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import AllRoutes from "./Route";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        firstname: "",
        middlename: "",
        lastname: "",
        Gender: "",
        Study: [],
        clg: "",
      },
      data: [],
      curentDataindex: -1,
      isEditIndex: "",
    };
    this.saveData = this.saveData.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handlechange = (event) => {
    // debugger
    const { name, value, checked } = event.target;
    if (name === "Study") {
      if (checked) {
        let { Study } = this.state.formData;
        Study.push(value);
        this.setState({
          formData: { Study: Study },
        });
        console.log("checkbox value", event.target.value);
      } else {
        let data = this.state.formData.Study;
        let index = data.indexOf(value);
        let deldata = data.splice(index, 1);
        this.setState({
          formData: {
            Study: deldata,
          },
        });
        console.log("length", data);
      }
    } else{
      this.setState({
        formData: {
          ...this.state.formData,
          [event.target.name]: event.target.value,
        },
      });
    }
  };

  handleEdit = (index) => {
    let data = this.state.data[index];
    this.setState({
      isEditIndex: index,
      formData: { ...data },
    });
    console.log("this index edit Time ==>", data);
  };

  handleDelete = (index) => {
    let olData = [...this.state.data];
    olData.splice(index, 1);
    this.setState({
      data: olData,
    });

    this.setState({
      formData: {
        firstname: "",
        middlename: "",
        lastname: "",
        Gender: "",
        clg: "",
      },
      isEditIndex: "",
    });
  };

  saveData = () => {
    if (this.state.isEditIndex === "") {
      let dataArray = [...this.state.data];
      dataArray.push(this.state.formData);
      this.setState({
        data: dataArray,
      });
      console.log("items", dataArray);
    } else {
      this.state.data[this.state.isEditIndex] = this.state.formData;
      console.log("this.state.data--->", this.state.data);
      this.setState({
        data: [...this.state.data],
      });
    }
    this.setState({
      formData: {
        firstname: "",
        middlename: "",
        lastname: "",
      },
      isEditIndex: "",
    });
  };

  render() {
    const { data } = this.state;

    const columns = [
      {
        title: "First Name",
        dataIndex: "firstname",
        key: "firstname",
      },
      {
        title: "Middle Name",
        dataIndex: "middlename",
        key: "middlename",
      },
      {
        title: "Last Name",
        dataIndex: "lastname",
        key: "lastname",
      },
      {
        title: "Gender",
        dataIndex: "Gender",
        key: "Gender",
      },
      {
        title: "Study",
        dataIndex: "Study",
        key: "Study",
      },
      {
        title: "Collage",
        dataIndex: "clg",
        key: "clg",
      },
      {
        title: "Action",
        dataIndex: "Action",
        key: "Action",
        render: (name, fname, index) => {
          return (
            <>
              <EditOutlined
                onClick={() => this.handleEdit(index)}
                style={{ color: "green", margin: "15px" }}
              />

              <DeleteOutlined
                onClick={() => this.handleDelete(index)}
                style={{ color: "red" }}
              />
            </>
          );
        },
      },
    ];
    
    return (
      <>
      <AllRoutes/>
        <div className="Maindiv">
          <h4 className="heading">Application Form</h4>
          <label><b>First Name</b></label>
          <br />
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={this.state.formData.firstname}
            onChange={this.handlechange}
            
          ></input>
          <br />
          <br />
          <label><b>Middle Name</b></label>
          <br />
          <input
            type="text"
            id="middlename"
            name="middlename"
            value={this.state.formData.middlename}
            onChange={this.handlechange}
            
          ></input>
          <br />
          <br />
          <label><b>last Name</b></label>
          <br />
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={this.state.formData.lastname}
            onChange={this.handlechange}
            
          ></input>
          <br />
          <br />
          <label><b>Gender</b></label>
          <br />
          <input
            className="radio"
            type="radio"
            id="Male"
            value="Male"
            checked={this.state.formData.Gender === "Male"}
            name="Gender"
            onChange={this.handlechange}
          />
          Male
          <input
            className="radio"
            type="radio"
            id="Female"
            value="Female"
            name="Gender"
            checked={this.state.formData.Gender === "Female"}
            onChange={this.handlechange}
          />
          Female <br />
          <br />
          <label><b>Study</b></label>
          <br />
          <input
            className="radio"
            type="checkbox"
            value="Bca"
            name="Study"
            onChange={this.handlechange}
          />
          BCA
          <input
            className="radio"
            type="checkbox"
            value="B.com"
            name="Study"
            onChange={this.handlechange}
          />
          B.COM
          <input
            className="radio"
            type="checkbox"
            value="BBA"
            name="Study"
            onChange={this.handlechange}
          />
          BBA <br />
          <label><b>Collage</b></label>
          <br />
          <br />
          <select
            name="clg"
            value={this.state.formData.value}
            onChange={this.handlechange}
          >
            <option>SELECT</option>
            <option value="C.B PATEL">C.B PATEL</option>
            <option value="SUTEX">SUTEX</option>
            <option value="BHAGWAN MAHAVIR">BHAGWAN MAHAVIR</option>
            <option value="S.V PATEL">S.V PATEL</option>
            <option value="S.D JAIN">S.D JAIN</option>
            <option value="UTTAR GUJRAT">UTTAR GUJRAT</option>
          </select>
          <br />
          <br />
          <button
            type="submit"
            name="submit"
            id="submit"
            onClick={this.saveData}
            
          >
            Submit
          </button>
        </div>
        <div>
          <Table columns={columns} dataSource={data} />
        </div>
      </>
    );
  }
}
