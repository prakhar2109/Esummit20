import React, { Component } from "react";
import "../view.css";
import axios from "axios";
import { BASE_URL } from "../../../../../utils/urls";
import { Modal } from "antd";
import Select from "react-select";

const custom_styles = {
  menuList: (base) => ({
      ...base,
      height: '20vh'
  }),
}
let Tshirtsize=["L","XS","S","XL","XXL"];
export default class Viewprofile extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      name: "",
      score: "",
      data: [],
    };
  }
  
  componentDidMount = () => {
    let token = localStorage.getItem("user_token");

    axios
      .get(BASE_URL + "/v1/api/user/profile", {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then(res => {
        this.setState({
          score: res.data.score,
          name: res.data.name,
          data: res.data,
        });
      })
      .catch(response => {
        alert(response);
      });
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleCancel = () => {
    this.setState({ visible: false });
  };
  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 300);
  };
  changeProfile = () => {
    document.getElementById("caprofile-containter").style.display = "none";
    document.getElementById("caprofile-parent2").style.display = "none";
    // document.getElementById("caprofile-parent3").style.display = "none";
    document.getElementById(
      "caprofile-mobile-editprofilecontainter"
    ).style.display = "block";

    // document.getElementById(
    //   "caprofile-mobile-editprofile-parent3"
    // ).style.display = "block";
    document.getElementById("caprofilemobile-b01").style.display = "none";
    document.getElementById("caprofilemobile-b02").style.display = "block";
  };
  saveProfile = () => {
    document.getElementById("caprofile-containter").style.display = "block";
    document.getElementById("caprofile-parent2").style.display = "block";
    // document.getElementById("caprofile-parent3").style.display = "block";
    document.getElementById(
      "caprofile-mobile-editprofilecontainter"
    ).style.display = "none";

    // document.getElementById(
    //   "caprofile-mobile-editprofile-parent3"
    // ).style.display = "none";
    document.getElementById("caprofilemobile-b01").style.display = "block";
    document.getElementById("caprofilemobile-b02").style.display = "none";

  };
  handleClick = e => {
   
    e.preventDefault();
    let {
      data
      } = this.state
    let token = localStorage.getItem("user_token");
    
    axios({
      method: "post",
      url: BASE_URL + "/v1/api/user/edit-profile/",
      data: data,
        headers: {
          Authorization: `Token ${token}`,
        }

    }).then((r) => {
    })
    .catch((r)=>{
    })
    this.handleOk()
  }
  getTshirt = () => {
    return Tshirtsize.map(tshirt => ({ value: tshirt.name, label: tshirt.name }))
  }
  render() {
    const { visible } = this.state;
    const modalstyle = {
      left: "20vw",
      margin: "0",
      top: "5vh",
    };

    const bodyStyle = {
      padding: 0,
    };
   
    console.log(Tshirtsize,"sssssss")
    const width = 900;
    let { score, name, data } = this.state;
    let scorePercentage = (score / 360) * 100 + "";
    return (
      <div className="caprofile-container">
        <div className="caprofile-container-heading">PROFILE</div>

        <div className="caprofile-line1" />

        <button id="caprofile-b01" onClick={this.showModal}>
          Edit Profile
        </button>
        <button id="caprofilemobile-b01" onClick={this.changeProfile}>
          Edit Profile
        </button>

        <div className="caprofile-parent1">
          <div className="caprofile-parent1-child1">
            <div className="caprofile-parent1-child1-heading">
              BASIC INFORMATION
            </div>

            <div className="caprofile-dropshape">{name[0]}</div>
            <div className="profile-dashboard-type">CAMPUS AMBASSADOR</div>
            <div className="profile-dashboard-esummit">
              <span id="profile-dashboard-esummitId">E-Summit’19 ID</span>
              <span id="profile-dashboard-esummitId-value">{data.esummit_id}</span>
            </div>
            {/*}
            <div className="profile-dashboard-esummit">
              <span id="profile-dashboard-esummitId">
                Contingent No (Leader)
              </span>
              <span id="profile-dashboard-esummitId-value">CN 2</span>
            </div>
    */}
            <div className="ca-profilescore">
              <span id="caprofile-scoreWritten">Score</span>
              <span id="caprofile-scoreValue">{this.state.score}/360</span>
            </div>
            <div className="progressline">
              <div
                className="progress-bar bg-custom"
                style={{
                  width: scorePercentage + "%",
                }}
              />
            </div>
          </div>

          <div className="caprofile-parent1-childline" />

          <div
            className="caprofile-containter-parent"
            id="caprofile-containter"
          >
            <div className="caprofile-containter-parent-child1">
              <div className="caprofile-parent1-child2-name-heading caprofile-heading">
                Full name
              </div>
              <div className="caprofile-parent1-child2-name caprofile-data">
                {data.name}
              </div>
            </div>

            <div className="caprofile-containter-parent-child2">
              <div className="caprofile-containter-parent-child2-child1">
                <div className="caprofile-heading">E-mail ID</div>

                <div className="caprofile-parent1-child2-email caprofile-data">
                  {data.email}
                </div>
              </div>
              <div className="caprofile-containter-parent-child2-child2">
                <div className="caprofile-parent1-child3-phoneheading caprofile-heading">
                  Phone no
                </div>

                <div className="caprofile-parent1-child3-phone caprofile-data">
                  {data.phone}
                </div>
              </div>
            </div>
            <div className="caprofile-containter-parent-child2">
              <div className="caprofile-containter-parent-child2-child1">
                <div className="caprofile-heading">T Shirt size</div>

                <div className="caprofile-parent1-child2-email caprofile-data">
                  {data.tshirt_size}
                </div>
              </div>
              <div className="caprofile-containter-parent-child2-child2">
                <div className="caprofile-parent1-child3-phoneheading caprofile-heading">
                  Gender
                </div>

                <div className="caprofile-parent1-child3-phone caprofile-data">
                  {data.gender}
                </div>
              </div>
            </div>
          </div>


          <div
            className="caprofile-containter-parent"
            id="caprofile-mobile-editprofilecontainter"
          >

            <div className="caprofile-containter-parent-child1">
              <div className="caprofile-parent1-child2-name-heading caprofile-heading">
                Full name
              </div>
              <div className="caprofile-parent1-child2-name caprofile-data">
                <input
                  type="text"
                  placeholder={data.name}
                  defaultValue={data.name}
                  onChange={e => {
                    data.name = e.target.value;
                  }}
                  required
                  id="editprofile-input-mobile"
                />
              </div>
            </div>

            <div className="caprofile-containter-parent-child2">
              <div className="caprofile-containter-parent-child2-child1">
                <div className="caprofile-heading">Gender</div>

                <div className="caprofile-parent1-child2-email caprofile-data">
                <select  id="editprofile-input-mobile"
                        placeholder={data.gender}
                        defaultValue={data.gender}
                        onChange={e => {
                          data.gender = e.target.value;
                        }}
                        

                      >
                      {data.gender==="M" &&
                        <><option value="M" selected>M</option>
                        <option value="F">F</option>
                        <option value="O">O</option></>}
                      
                        {data.gender==="F" &&
                        <><option value="M" >M</option>
                        <option value="F" selected>F</option>
                        <option value="O">O</option></>}
                        {data.gender==="O" &&
                        <><option value="M" >M</option>
                        <option value="F">F</option>
                        <option value="O" selected>O</option></>}



                      </select>
                </div>
              </div>
              <div className="caprofile-containter-parent-child2-child2">
                <div className="caprofile-parent1-child3-phoneheading caprofile-heading">
                  Phone no
                </div>

                <div className="caprofile-parent1-child3-phone caprofile-data">
                  <input
                    type="text"
                    placeholder={data.phone}
                    defaultValue={data.phone}
                    onChange={e => {
                      data.phone = e.target.value;
                    }}
                    required
                    id="editprofile-input-mobile"
                  />
                </div>
              </div>
            </div>
            <div className="caprofile-containter-parent-child2">
              <div className="caprofile-containter-parent-child2-child1">
                <div className="caprofile-heading">T Shirt size</div>

                <div className="caprofile-parent1-child2-email caprofile-data">
                <select id="editprofile-input-mobile"
                                            
                                          defaultValue={data.tshirt_size}
                                          onChange={event => {
                                            data.tshirt_size =event.target.value;
                                          }}
                                          
                                          >
                       >
                      {data.tshirt_size==="XS" &&
                        <>
                      <option value="XS" selected>XS</option>
                      <option value="S">S</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                      <option value="XXL">XXL</option></>}
                      {data.tshirt_size==="S" &&
                        <>
                      <option value="XS">XS</option>
                      <option value="S" selected>S</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                      <option value="XXL">XXL</option></>}
                      {data.tshirt_size==="L" &&
                        <>
                      <option value="XS" selected>XS</option>
                      <option value="S">S</option>
                      <option value="L" selected>L</option>
                      <option value="XL">XL</option>
                      <option value="XXL">XXL</option></>}
                      {data.tshirt_size==="XL" &&
                        <>
                      <option value="XS" selected>XS</option>
                      <option value="S">S</option>
                      <option value="L">L</option>
                      <option value="XL" selected>XL</option>
                      <option value="XXL">XXL</option></>}
                      {data.tshirt_size==="XXL" &&
                        <>
                      <option value="XS" selected>XS</option>
                      <option value="S">S</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                      <option value="XXL" selected>XXL</option></>}


                      </select>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="caprofile-parent2" id="caprofile-parent2">
          <div className="caprofile-parent2-heading">COLLEGE INFORMATION</div>

          <div className="caprofile-parent2-child2-collegename-heading caprofile-heading">
            College name
          </div>
          <div className="caprofile-parent2-child2-name caprofile-data">
            {data.college}
          </div>

          <div className="caprofile-parent2-innerchild">
            <div className="caprofile-parent2-innerchild1-parent">
              <div className="caprofile-parent2-child2-programheading caprofile-heading">
                Program
              </div>

              <div className="caprofile-parent2-child2-programname caprofile-data">
                {data.programme}
              </div>
            </div>

            <div className="caprofile-parent2-innerchild2-parent">
              <div className="caprofile-parent2-child2-Yearheading caprofile-heading">
                Year
              </div>

              <div className="caprofile-parent2-child2-year caprofile-data">
                {data.year}
              </div>
            </div>
          </div>

          <div className="caprofile-parent3-innerchild">
            <div className="caprofile-parent3-innerchild1-parent">
              <div className="caprofile-parent3-child2-cityheading caprofile-heading">
                City
              </div>

              <div className="caprofile-parent3-child2-city caprofile-data">
                {data.city}
              </div>
            </div>

            <div className="caprofile-parent3-innerchild2-parent">
              <div className="caprofile-parent3-child2-Stateheading caprofile-heading">
                State
              </div>

              <div className="caprofile-parent3-child2-State caprofile-data">
                {data.state}
              </div>
            </div>
          </div>

          <div className="caprofile-parent2-child2-collegename-heading caprofile-heading">
            Country
          </div>
          <div className="caprofile-parent2-child2-name caprofile-data">
            {data.country}
          </div>
        </div>

        {/* PC Profile ends   */}


        <button id="caprofilemobile-b02" onClick={e=>{this.handleClick(e)
                                                      this.saveProfile()}}>
          SAVE CHANGES
        </button>

        <Modal
          visible={visible}
          style={modalstyle}
          width={width}
          bodyStyle={bodyStyle}
          onOk={this.handleOk}
          closable={false}
          footer={null}
        >

          <form>
            <button onClick={this.handleClick} id="caprofile-b02">SAVE CHANGES</button>


            <div className="caprofile-parent1 ca-profile-modalparent1">
              <div className="caprofile-parent1-child1">
                <div className="caprofile-parent1-child1-heading">
                  BASIC INFORMATION
              </div>
                <div className="caprofile-dropshape">{name[0]}</div>
                <div className="profile-dashboard-type">CAMPUS AMBASSADOR</div>
                <div className="profile-dashboard-esummit">
                  <span id="profile-dashboard-esummitId">E-Summit’19 ID</span>
                  <span id="profile-dashboard-esummitId-value">{data.esummit_id}</span>
                </div>
                {/* <div className="profile-dashboard-esummit">
                  <span id="profile-dashboard-esummitId">
                    Contingent No (Leader)
                  </span>
                  <span id="profile-dashboard-esummitId-value">CN 2</span>
                </div> */}
              </div>
              <div className="caprofile-parent1-childline" />

              <div className="caprofile-containter-parent">
                <div className="caprofile-containter-parent-child1">
                  <div className="caprofile-parent1-child2-name-heading caprofile-heading">
                    Full name
                </div>
                  <div className="caprofile-parent1-child2-name caprofile-data">
                    <input
                      type="text"
                      placeholder={data.name}
                      onChange={e => {
                        data.name = e.target.value;
                      }}
                      defaultValue={data.name}
                      required
                      id="caprofile02"
                    />
                  </div>
                </div>

                <div className="caprofile-containter-parent-child2">
                  <div className="caprofile-containter-parent-child2-child1">
                    <div className="caprofile-heading">Gender</div>

                    <div className="caprofile-parent1-child2-email caprofile-data">
                      <select
                        placeholder={data.gender}
                        defaultValue={data.gender}
                        onChange={e => {
                          data.gender = e.target.value;
                        }}
                        id="caprofile01"

                      >
                        <option value="M">M</option>
                        <option value="F">F</option>
                        <option value="O">O</option>
                      </select>
                    </div>
                  </div>
                  <div className="caprofile-containter-parent-child2-child2">
                    <div className="caprofile-parent1-child3-phoneheading caprofile-heading">
                      Phone no
                  </div>

                    <div className="caprofile-parent1-child3-phone caprofile-data">
                      <input
                        type="text"
                        placeholder={data.phone}
                        defaultValue={data.phone}
                        id="caprofile01"
                        required
                        onChange={event => {
                          data.phone = event.target.value;
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="caprofile-containter-parent-child2">
                  <div className="caprofile-containter-parent-child2-child1">
                    <div className="caprofile-heading">T Shirt size</div>

                    <div className="caprofile-parent1-child2-email caprofile-data">
                    <select id="caprofile01"
                                          
                                            defaultValue={data.tshirt_size}
                                            onChange={event => {
                                              data.tshirt_size =event.target.value;
                                            }}
                                            
                                            >
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>


                        </select>

                      {/* <input type="text" 
                      placeholder={data.tshirt_size}
                      defaultValue={data.tshirt_size}
                      onChange={event => {
                        data.tshirt_size = event.target.value;
                      }}
                      required
                      id="caprofile01" /> */}
                    </div>
                  </div>
                </div>



              </div>
            </div>


          </form>
        </Modal>
      </div>
    );
  }
}
