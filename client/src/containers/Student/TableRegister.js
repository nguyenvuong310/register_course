import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import "./RegPageSelection";

class TableRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listregister: [],
    };
  }
  componentDidMount() {
    this.setState({
      listregister: this.props.listregister,
    });
  }
  componentDidUpdate(preProps) {
    if (this.props.listregister !== preProps.listregister) {
      this.setState({
        listregister: this.props.listregister,
      });
    }
  }
  render() {
    const { listregister } = this.state;
    return (
      <React.Fragment>
        <div className="selec-response">
          <div className="selec-response-box">
            <div className="selec-response-box-header">Phiếu đăng ký</div>
            <div className="selec-response-box-body">
              <div className="selec-response-box-body-content">
                <div className="selec-response-box-body-content-header">
                  <div className="selec-response-box-body-content-header-title">
                    <i className="fa fa-unlock-alt" aria-hidden="true" />
                    &nbsp; ĐĂNG KÝ CÁC HỌC PHẦN CÓ NHU CẦU HỌC HK2/2023-2024 TẤT
                    CẢ CÁC DIỆN SINH VIÊN
                  </div>
                </div>
                <div className="selec-response-box-body-content-container">
                  <div className="selec-response-box-body-content-container-header">
                    <div className="selec-response-box-body-content-container-header-title">
                      &nbsp;
                      <i className="fa fa-check" aria-hidden="true" />
                      &nbsp; Danh sách đã đăng ký
                    </div>
                  </div>
                  {listregister &&
                    listregister.length > 0 &&
                    listregister.map((subject, index) => (
                      <div className="selec-response-box-body-content-table">
                        <div className="selec-response-box-body-content-subject-name">
                          <div className="row">
                            <div className="col-md-1">1</div>
                            <div className="col-md-9">
                              {subject.subject_code} - {subject.subject_name}
                            </div>
                            <div className="col-md-1">2</div>
                            <div className="col-md-1">
                              <button className="btn">
                                <i
                                  className="fa fa-trash"
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="selec-response-box-body-content-subject-detail">
                          <table width="100%">
                            <tbody>
                              <tr>
                                <th>Nhóm lớp</th>
                                <th>DK/Sĩ số</th>
                                <th>Ngôn ngữ</th>
                                <th>Nhóm LT</th>
                                <th>Giảng viên</th>
                                <th>Nhóm BT</th>
                                <th>Giảng viên BT/TN</th>
                                <th>Sĩ số LT</th>
                                <th>#</th>
                              </tr>
                              <tr style={{ borderBottom: "2px #ccc  solid" }}>
                                <td className="item_list">1728/20000 </td>
                                <td className="item_list">V </td>
                                <td className="item_list">N--- </td>
                                <td className="item_list">
                                  <i>"Chưa/Đang phân công"</i>{" "}
                                </td>
                                <td className="item_list"> </td>
                                <td className="item_list"> </td>
                                <td className="item_list"> </td>
                                <td className="item_list "> </td>
                              </tr>
                              <tr>
                                <td />
                                <td colSpan={9}>
                                  <table width="100%" className="table">
                                    <tbody>
                                      <tr
                                        className="bg"
                                        style={{
                                          borderBottom: "2px #ccc  solid",
                                        }}
                                      >
                                        <th>
                                          <em>Thứ</em>
                                        </th>
                                        <th>
                                          <em>Tiết</em>
                                        </th>
                                        <th>
                                          <em>Phòng</em>
                                        </th>
                                        <th>
                                          <em>CS</em>
                                        </th>
                                        <th>
                                          <em>BT/TN</em>
                                        </th>
                                        <th>
                                          <em>Tuần học</em>
                                        </th>
                                      </tr>
                                      <tr>
                                        <td className="item_list">
                                          Chưa biết{" "}
                                        </td>
                                        <td className="item_list">--</td>
                                        <td className="item_list">------ </td>
                                        <td className="item_list">DKNV </td>
                                        <td className="item_list"> </td>
                                        <td className="item_list">
                                          1234567890123456--------------
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                                <td />
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    ))}
                  {/* <div className="selec-response-box-body-content-table">
                    <div className="selec-response-box-body-content-subject-name">
                      <div className="row">
                        <div className="col-md-1">1</div>
                        <div className="col-md-9">
                          SP1037 - Tư tưởng Hồ Chí Minh
                        </div>
                        <div className="col-md-1">2</div>
                        <div className="col-md-1">
                          <button className="btn">
                            <i className="fa fa-trash" aria-hidden="true"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="selec-response-box-body-content-subject-detail">
                      <table width="100%">
                        <tbody>
                          <tr>
                            <th>Nhóm lớp</th>
                            <th>DK/Sĩ số</th>
                            <th>Ngôn ngữ</th>
                            <th>Nhóm LT</th>
                            <th>Giảng viên</th>
                            <th>Nhóm BT</th>
                            <th>Giảng viên BT/TN</th>
                            <th>Sĩ số LT</th>
                            <th>#</th>
                          </tr>
                          <tr style={{ borderBottom: "2px #ccc  solid" }}>
                            <td className="item_list">1728/20000 </td>
                            <td className="item_list">V </td>
                            <td className="item_list">N--- </td>
                            <td className="item_list">
                              <i>"Chưa/Đang phân công"</i>{" "}
                            </td>
                            <td className="item_list"> </td>
                            <td className="item_list"> </td>
                            <td className="item_list"> </td>
                            <td className="item_list "> </td>
                          </tr>
                          <tr>
                            <td />
                            <td colSpan={9}>
                              <table width="100%" className="table">
                                <tbody>
                                  <tr
                                    className="bg"
                                    style={{ borderBottom: "2px #ccc  solid" }}
                                  >
                                    <th>
                                      <em>Thứ</em>
                                    </th>
                                    <th>
                                      <em>Tiết</em>
                                    </th>
                                    <th>
                                      <em>Phòng</em>
                                    </th>
                                    <th>
                                      <em>CS</em>
                                    </th>
                                    <th>
                                      <em>BT/TN</em>
                                    </th>
                                    <th>
                                      <em>Tuần học</em>
                                    </th>
                                  </tr>
                                  <tr>
                                    <td className="item_list">Chưa biết </td>
                                    <td className="item_list">--</td>
                                    <td className="item_list">------ </td>
                                    <td className="item_list">DKNV </td>
                                    <td className="item_list"> </td>
                                    <td className="item_list">
                                      1234567890123456--------------
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                            <td />
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div> */}
                </div>
              </div>
              {/* Chưa có môn học đăng ký! */}
            </div>
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(TableRegister);
