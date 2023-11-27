import React, { Component } from "react";
import { connect } from "react-redux";
import "./admin.scss";
import NavAdmin from "./navAdmin";
import { getList, searchList } from "../../services/userService";
class ListStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrUser: [],
      isDesc: false,
    };
  }
  async componentDidMount() {
    await this.getListStudent();
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
  }
  handleOnChangeInput = (event) => {
    let copyState = { ...this.state };
    copyState["input"] = event.target.value;
    this.setState({
      ...copyState,
    });
  };
  getListStudent = async () => {
    let res = await getList("students", "email", "ASC");
    if (res && res.errCode === 0) {
      this.setState({
        arrUser: res.data,
      });
    }
  };
  handleGetList = async () => {
    let res = "";
    if (this.state.isDesc) {
      if (this.state.input) {
        res = await searchList("students", this.state.input, "email", "DESC");
      } else {
        res = await getList("students", "email", "DESC");
      }
    } else {
      if (this.state.input) {
        res = await searchList("students", this.state.input, "email", "ASC");
      } else {
        res = await getList("students", "email", "ASC");
      }
    }
    if (res && res.errCode === 0) {
      this.setState({
        arrUser: res.data,
      });
    }
  };
  handleFillter = async (orderByField) => {
    this.setState(
      {
        isDesc: !this.state.isDesc,
      },
      async () => {
        await this.handleGetList(orderByField);
      }
    );
  };
  handleKeyDown = (e) => {
    if (e.key === "Enter") {
      this.handleGetList();
    }
  };
  render() {
    const { arrUser, isDesc } = this.state;
    return (
      <React.Fragment>
        <NavAdmin />
        <h1 className="my-3 text-center ">
          <b>Danh sách sinh viên</b>
        </h1>
        <div className="containter">
          <div className="row">
            <div className="selec-input col-6 ml-3 my-3">
              <input
                name="msmh"
                className="input-group-search "
                class="form-control"
                id="txtMSMHSearch"
                // value={this.state.course}
                placeholder="Mã Số / Tên"
                onChange={(event) => {
                  this.handleOnChangeInput(event);
                }}
                onKeyDown={(event) => this.handleKeyDown(event)}
              />
              <span className="input-group-btn col-2">
                <button
                  type="button"
                  class="btn btn-primary btn-flat"
                  onClick={() => this.handleGetList()}
                >
                  <i class="fas fa-search" aria-hidden="true"></i>
                </button>
              </span>
            </div>
          </div>
        </div>

        <div className="users-table" mt-3 mx-1>
          <table id="customers">
            <tbody>
              <tr>
                <th className="title-table">
                  <span>Email</span>{" "}
                  <i
                    className={
                      isDesc
                        ? "fas fa-sort-amount-up ml-3 hover"
                        : "fas fa-sort-amount-down ml-3 hover"
                    }
                    onClick={() => this.handleFillter("email")}
                  ></i>
                </th>
                <th className="title-table">
                  <span>Name</span>{" "}
                  <i
                    className={
                      isDesc
                        ? "fas fa-sort-amount-up ml-3 hover"
                        : "fas fa-sort-amount-down ml-3 hover"
                    }
                    onClick={() => this.handleFillter("name")}
                  ></i>
                </th>
                <th className="title-table">
                  <span>MS</span>
                  <i
                    className={
                      isDesc
                        ? "fas fa-sort-amount-up ml-3 hover"
                        : "fas fa-sort-amount-down ml-3 hover"
                    }
                    onClick={() => this.handleFillter("MSSV")}
                  ></i>
                </th>
                <th>yearStartLearn</th>
                <th>Action</th>
              </tr>

              {arrUser &&
                arrUser.length > 0 &&
                arrUser.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.email}</td>
                      <td>{item.name}</td>
                      <td>{item.MSSV}</td>
                      <td>{item.yearStartLearn}</td>

                      <td>
                        <button
                          className="btn-edit"
                          //   onClick={() => this.handleEditUser(item)}
                        >
                          <i className="fas fa-edit"></i>
                        </button>
                        <button
                          className="btn-del"
                          //   onClick={() => this.handleDelUser(item)}
                        >
                          <i className="fas fa-trash-alt"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ListStudent);