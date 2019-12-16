import React, { Component } from 'react'
import '../../css/cacontigent.css'
import { Modal } from 'antd'
import axios from 'axios'
import { BASE_URL } from '../../../../utils/urls'
import update from 'react-addons-update'

import Loader from '../../../loader/loader'

import Svgcorrect from './Svgcorrent'
/* eslint-disable react/prop-types */
import AddUserForm from './AddUserform'
import Createcontigent from './Createcontigent'
import Aboutcontigent from './Aboutcontigent'

export default class Cacontigent extends Component {
  constructor() {
    super()
    this.state = {
      contigent: true,
      contingent_member: null,
      contingent_leader: null,
      contingent_data: [],
      loading: false,
      data: [],
      no_contingent: [
        { esummit_id: '', name: '' },
        { esummit_id: '', name: '' },
        { esummit_id: '', name: '' },
        { esummit_id: '', name: '' }
      ],
      es_iddata: [],
      invitelist: [],
      invitesno: '0',
      contingent_error_message: ''
    }
  }
  componentDidMount = () => {
    document.getElementById('loader').style.display = 'grid'
    let token = localStorage.getItem('user_token')
    let invites = 0
    axios
      .get(BASE_URL + '/v1/api/user/profile', {
        headers: {
          Authorization: `Token ${token}`
        }
      })
      .then(res => {
        this.setState({
          data: res.data
        })
      })
      .catch(response => {
        alert(response)
      })

    axios
      .get(BASE_URL + '/v1/api/contingent/info', {
        headers: {
          Authorization: `Token ${token}`
        }
      })
      .then(res => {
        if (res.status === 200) {
          this.setState({
            contigent: false,
            contingent_data: res.data,
            contingent_leader: true
          })
          document.getElementById('loader').style.display = 'none'
        }
      })
      .catch(response => {
        document.getElementById('loader').style.display = 'none'
      })

    axios
      .get(BASE_URL + '/v1/api/contingent/member/invite/list', {
        headers: {
          Authorization: `Token ${token}`
        }
      })
      .then(res => {
        console.log(res.data)
        if (res.status === 200) {
          res.data.map(e => {
            if (e.status === 'P') {
              invites = invites + 1
            } else if (e.status === 'A') {
              this.setState({ contigent: false, contingent_member: true })
            }
          })
          this.setState({ invitelist: res.data, invitesno: invites })
        }
      })
      .catch(response => {})
  }

  deleteContigent = () => {
    let token = localStorage.getItem('user_token')
    axios
      .get(BASE_URL + '/v1/api/contingent/delete', {
        headers: {
          Authorization: `Token ${token}`
        }
      })
      .then(res => {
        if (res.status === 200) {
          this.setState({ contigent: null })
          this.props.history.push({ path: '/dashboard/contingent' })
        }
      })
      .catch(response => {})
  }
  createContigent = () => {
    document.getElementById('createcontigent').style.display = 'none'
    this.setState({
      visible: true
    })
  }
  editContigent = () => {
    let token = localStorage.getItem('user_token')
    axios
      .get(BASE_URL + '/v1/api/contingent/info', {
        headers: {
          Authorization: `Token ${token}`
        }
      })
      .then(res => {
        this.setState({
          es_iddata: res.data.members
        })

        let no_contingent =
          this.state.es_iddata &&
          this.state.es_iddata.map(e => {
            return { esummit_id: e.esummit_id, name: e.name }
          })
        this.setState({
          no_contingent: no_contingent,
          visible: true
        })
      })
      .catch(response => {
        alert(response)
      })
  }
  createContigentSubmit = () => {
    console.log(this.state.no_contingent, 'createcontigentsubmit')
    let isempty = false
    this.state.no_contingent.map((e, index) =>
      e.esummit_id === '' || e.name === '' ? (isempty = true) : null
    )

    let token = localStorage.getItem('user_token')
    let es_idmember
    axios
      .get(BASE_URL + '/v1/api/contingent/info', {
        headers: {
          Authorization: `Token ${token}`
        }
      })
      .then(res => {
        if (this.state.no_contingent.length > 3 && !isempty) {
          this.setState({ contigent: false })
          this.handleOk()
          this.props.history.push({ path: '/dashboard/contingent' })
        } else {
          if (this.state.no_contingent.length < 5) {
            this.setState({
              contingent_error_message: 'Minimum four members required!'
            })
          }

          // if (isempty) {
          //   this.setState({
          //     contingent_error_message: 'Field cannot be empty!'
          //   })
          // }
        }
      })
      .catch(response => {
        this.setState({
          contingent_error_message: 'Field cannot be empty!'
        })
      })
  }

  addContingent = e => {
    this.setState(prevState => ({
      no_contingent: [...prevState.no_contingent, { esummit_id: '', name: '' }]
    }))
  }
  acceptInvitation = es_id => {
    let token = localStorage.getItem('user_token')
    let data = {
      contingent_id: es_id
    }

    axios({
      method: 'post',
      url: BASE_URL + `/v1/api/contingent/member/join/${es_id}`,
      data: data,
      headers: {
        Authorization: `Token ${token}`
      }
    })
      .then(res => {
        if (res.status === 200 || res.status === 204) {
          this.props.history.push({ path: '/dashboard/contingent' })
          this.setState({ contigent: false })

          // this.props.form.name = res.data.name;
        }
      })
      .catch(response => {})
  }
  declineInvitation = es_id => {
    let token = localStorage.getItem('user_token')
    let data = {
      contingent_id: es_id
    }

    axios({
      method: 'post',
      url: BASE_URL + `/v1/api/contingent/member/decline/${es_id}`,
      data: data,
      headers: {
        Authorization: `Token ${token}`
      }
    })
      .then(res => {
        if (res.status === 200) {
          this.setState({ contigent: true })
          this.props.history.push({ path: '/dashboard/contingent' })
        }
      })
      .catch(response => {})
  }
  leaveContigent = () => {
    let token = localStorage.getItem('user_token')
    axios
      .get(BASE_URL + '/v1/api/contingent/member/leave', {
        headers: {
          Authorization: `Token ${token}`
        }
      })
      .then(res => {
        if (res.status === 200 || res.status === 204) {
          this.setState({ contingent_member: null })
          this.props.history.push({ path: '/dashboard/contingent' })
        }
      })
      .catch(response => {})
  }

  yourContigent() {
    document.getElementById('congratscontigent').style.display = 'none'
    document.getElementById('yourcontigent').style.display = 'block'
  }
  handleCancel = () => {
    this.setState({ visible: false })
  }
  handleOk = () => {
    this.setState({ loading: true })
    setTimeout(() => {
      this.setState({ loading: false, visible: false })
    }, 300)
  }
  handleDeleteRow = index => {
    if (index === this.state.no_contingent.length - 1) {
      this.setState(prevState => {
        // pass callback in setState to avoid race condition
        let newData = prevState.no_contingent.slice() //copy array from prevState
        newData.splice(index, 1) // remove element
        return { no_contingent: newData } // update state
      })
    } else {
      if (this.state.no_contingent.length > 4) {
        this.setState(prevState => {
          // pass callback in setState to avoid race condition
          let newData = prevState.no_contingent.slice() //copy array from prevState
          newData.splice(index, 1) // remove element
          return { no_contingent: newData } // update state
        })
        this.props.history.push({ path: '/dashboard/contingent' })
      } else {
        this.setState({
          contingent_error_message: 'Minimum four members required!'
        })
      }
    }
  }
  closeContigent = () => {
    this.handleOk()
    document.getElementById('createcontigent').style.display = 'block'
  }
  render() {
    const { visible } = this.state
    const modalstyle = {
      left: '20vw',
      margin: '0',
      top: '5vh'
    }

    const bodyStyle = {
      padding: 0
    }
    let { data } = this.state
    const width = 900

    return (
      <div>
        {this.state.contigent ? (
          <div className="cacontigent-parent">
            <Loader />
            <div className="cacontigent-parent-heading1">Create Contingent</div>
            <Createcontigent
              createContigent={this.createContigent}
              invitesno={this.state.invitesno}
              invitelist={this.state.invitelist}
              acceptInvitation={this.acceptInvitation}
              declineInvitation={this.declineInvitation}
            />

            <Modal
              visible={visible}
              style={modalstyle}
              width={width}
              bodyStyle={bodyStyle}
              onOk={this.handleOk}
              closable={false}
              footer={null}
            >
              <div className="Createcontigent-parentbody" id="submitcontigent">
                <div className="cacontigent-createparent" id="cacontigent5789">
                  <div className="cacontigent-heading">Create Contingent</div>
                  <div
                    className="cacontigent-heading-deletecontigent"
                    style={{ display: 'flex' }}
                    onClick={this.closeContigent}
                  >
                    Close
                    <div style={{ marginLeft: '10%' }}>&#x2715;</div>
                  </div>
                </div>

                <div className="createcontigent-body">
                  <div className="cacontigent-aboutparent-para">
                    If you create a contingent you become leader of the
                    contingent.
                  </div>

                  <div className="cacontigent-aboutparent-head">Leader</div>

                  <div className="contigent-adduserform">
                    <div className="contigent-adduserform-child">
                      <div className="contigent-adduserform-heading">
                        E-Summit ID
                      </div>
                      <div className="contigent-adduserform-input" required>
                        {data.esummit_id}
                      </div>
                    </div>
                    <div className="contigent-adduserform-child">
                      <div className="contigent-adduserform-heading"> Name</div>

                      <div className="contigent-adduserform-input">
                        {data.name}
                      </div>
                    </div>
                  </div>
                  <div className="cacontigent-aboutparent-head">Members</div>
                  <div className="loadingUserformParent">
                    {this.state.contingent_error_message}
                  </div>
                  {this.state.no_contingent.map((id, e) => {
                    return (
                      <AddUserForm
                        key={id}
                        form={id}
                        deleterow={this.handleDeleteRow}
                        index={e}
                        no_contigent={this.state.no_contingent}
                      />
                    )
                  })}

                  <div
                    className="cacontigent-aboutparent-head-addmember"
                    onClick={this.addContingent}
                  >
                    {' '}
                    Add member
                  </div>
                  <button
                    className="cacontigent-finish"
                    onClick={this.createContigentSubmit}
                  >
                    FINISH
                  </button>
                </div>
              </div>
            </Modal>
          </div>
        ) : (
          <div className="cacontigent-parent">
            <Loader />
            <div className="cacontigent-innerparent" id="congratscontigent">
              <div className="cacontigent-parent-heading1">
                Create Contingent
              </div>

              <div className="cacontigent-congratsparent">
                <div className="cacontigent-congratsparent-child1">
                  <div style={{ display: 'flex', alignSelf: 'center' }}>
                    <Svgcorrect />
                  </div>
                  {this.state.contingent_member ? (
                    <div>Congrats! Contingent successfully joined </div>
                  ) : (
                    <div>Congrats! Contingent successfully created</div>
                  )}
                </div>
                {this.state.contingent_member ? (
                  <div className="cacontigent-congratsparent-child2">
                    Your Contingent No. is{' '}
                    <strong>{this.state.contingent_data.contingent_id} </strong>
                    .
                  </div>
                ) : (
                  <div className="cacontigent-congratsparent-child2">
                    Your contingent has been succesfully created Contingent No.{' '}
                    <strong>{this.state.contingent_data.contingent_id} </strong>
                    . A mail with the contingent no and unique password has been
                    send to all members. Their names will be shown here as soon
                    as they join the contingent. If you want to edit the members
                    an edit option
                  </div>
                )}
                <button
                  onClick={this.yourContigent}
                  id="cacontigent-congratsparent-b01"
                >
                  DONE
                </button>
              </div>
            </div>
            <div className="cacontigent-innerparent" id="yourcontigent">
              <div className="cacontigent-parent-heading1">
                Contingent Details
              </div>

              <div className="cacontigent-congratsparent">
                {this.state.contingent_member && (
                  <div>
                    <div className="cacontigent-congratsparent-child1">
                      <div>Your Contingent</div>
                      <div
                        className="cacontigent-congratsparent-editcontigent"
                        onClick={this.leaveContigent}
                      >
                        Leave
                      </div>
                    </div>

                    <div className="cacontigent-congratsparent-child2">
                      <div className="cacontigent-congratsparent-child2-heading">
                        Leader
                      </div>
                      <div className="cacontigent-congratsparent-child2-parent">
                        <div className="cacontigent-congratsparent-child2-name">
                          {this.state.contingent_data.leader
                            ? this.state.contingent_data.leader.name
                            : null}
                        </div>
                        <div className="cacontigent-congratsparent-child2-id">
                          {this.state.contingent_data.leader
                            ? this.state.contingent_data.leader.esummit_id
                            : null}
                        </div>
                      </div>

                      <div className="cacontigent-congratsparent-child2-heading">
                        Members
                      </div>
                      {this.state.contingent_data.members &&
                        this.state.contingent_data.members.map(
                          e =>
                            e.status === 'A' && (
                              <div className="cacontigent-congratsparent-child2-parent">
                                <div className="cacontigent-congratsparent-child2-name">
                                  {e.name}
                                </div>
                                <div className="cacontigent-congratsparent-child2-id">
                                  {e.esummit_id}
                                </div>
                              </div>
                            )
                        )}
                    </div>
                  </div>
                )}

                {!this.state.contingent_member && (
                  <div>
                    <div className="cacontigent-congratsparent-child1">
                      <div>Your Contingent</div>

                      <div
                        className="cacontigent-congratsparent-editcontigent"
                        onClick={this.editContigent}
                      >
                        Edit
                      </div>
                    </div>

                    <div className="cacontigent-congratsparent-child2">
                      <div className="cacontigent-congratsparent-child2-heading">
                        Leader
                      </div>
                      <div className="cacontigent-congratsparent-child2-parent">
                        <div className="cacontigent-congratsparent-child2-name">
                          {this.state.contingent_data.leader
                            ? this.state.contingent_data.leader.name
                            : null}
                        </div>
                        <div className="cacontigent-congratsparent-child2-id">
                          {this.state.contingent_data.leader
                            ? this.state.contingent_data.leader.esummit_id
                            : null}
                        </div>
                      </div>

                      <div className="cacontigent-congratsparent-child2-heading">
                        Members
                      </div>
                      {this.state.contingent_data.members &&
                        this.state.contingent_data.members.map(e => (
                          <div
                            className="cacontigent-congratsparent-child2-parent"
                            key={e.esummit_id}
                          >
                            <div className="cacontigent-congratsparent-child2-name">
                              {e.name}
                            </div>
                            <div className="cacontigent-congratsparent-child2-id">
                              {e.esummit_id}
                            </div>
                            <div className="cacontigent-congratsparent-child3-id">
                              {e.status === 'P' ? 'Pending' : null}
                              {e.status === 'A' ? 'Accepted' : null}
                              {e.status === 'D' ? 'Declined' : null}
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <Aboutcontigent />

            <Modal
              visible={visible}
              style={modalstyle}
              width={width}
              bodyStyle={bodyStyle}
              onOk={this.handleOk}
              closable={false}
              footer={null}
            >
              <div className="Createcontigent-parentbody" id="submitcontigent">
                <div className="cacontigent-createparent" id="cacontigent5789">
                  <div className="cacontigent-heading">Edit Contingent</div>
                  <div
                    className="cacontigent-heading-deletecontigent"
                    onClick={this.deleteContigent}
                  >
                    Delete Contingent
                  </div>
                </div>

                <div className="createcontigent-body">
                  <div className="cacontigent-aboutparent-para">
                    If you create a contingent you become leader of the
                    contingent.
                  </div>

                  <div className="cacontigent-aboutparent-head">Leader</div>

                  <div className="contigent-adduserform">
                    <div className="contigent-adduserform-child">
                      <div className="contigent-adduserform-heading">
                        E-Summit ID
                      </div>
                      <div className="contigent-adduserform-input" required>
                        {data.esummit_id}
                      </div>
                    </div>
                    <div className="contigent-adduserform-child">
                      <div className="contigent-adduserform-heading"> Name</div>

                      <div className="contigent-adduserform-input">
                        {data.name}
                      </div>
                    </div>
                  </div>
                  <div className="cacontigent-aboutparent-head">Members</div>
                  <div className="loadingUserformParent">
                    {this.state.contingent_error_message}
                  </div>

                  {this.state.no_contingent.map((e, index) => (
                    <div key={index}>
                      {/* {console.log(this.state.no_contingent,index,"In parent render map")} */}
                      <AddUserForm
                        index={index}
                        form={e}
                        deleterow={this.handleDeleteRow}
                        no_contigent={this.state.no_contingent}
                      />
                    </div>
                  ))}
                  <div
                    className="cacontigent-aboutparent-head-addmember"
                    onClick={this.addContingent}
                  >
                    {' '}
                    Add member
                  </div>
                  <button
                    className="cacontigent-finish"
                    onClick={this.createContigentSubmit}
                  >
                    SAVE CHANGES
                  </button>
                </div>
              </div>
            </Modal>
          </div>
        )}
      </div>
    )
  }
}

/* eslint-disable react/prop-types */
