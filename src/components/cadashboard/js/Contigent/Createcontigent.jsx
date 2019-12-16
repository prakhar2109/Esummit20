import React, { Component } from 'react'
import '../../css/cacontigent.css'
/* eslint-disable react/prop-types */
import axios from 'axios'
import { BASE_URL } from '../../../../utils/urls'
import Aboutcontigent from './Aboutcontigent'
import Perks from './Perks'
export default class Createcontigent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      invitesno: props.invitesno,
      invitelist: props.invitelist
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.invitelist !== this.props.invitelist) {
      this.setState({
        invitelist: nextProps.invitelist,
        invitesno: nextProps.invitesno
      })
    }
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //     console.log(this.state.invitelist);
  //     console.log(nextState.invitelist);

  //     return this.state.invitelist != nextState.invitelist;
  //   }

  viewMore = () => {
    document.getElementById(
      'cacontigent-joinparent-form-hidelist'
    ).style.display = 'block'
    document.getElementById('viewless').style.display = 'block'
    document.getElementById('viewmore').style.display = 'none'
    document.getElementById('cacontigent-joinparent').style.background =
      '#0D1719'
  }
  viewLess = () => {
    document.getElementById(
      'cacontigent-joinparent-form-hidelist'
    ).style.display = 'none'
    document.getElementById('viewless').style.display = 'none'
    document.getElementById('viewmore').style.display = 'block'
    document.getElementById('cacontigent-joinparent').style.background =
      '#121C1D;'
  }
  render() {
    return (
      <div className="cacontigent-innerparent" id="createcontigent">
        <div className="cacontigent-createparent">
          <div
            className="cacontigent-heading"
            style={{ color: 'rgba(255, 255, 255, 0.87)' }}
          >
            Create Contingent
          </div>
          <div
            className="cacontigent-create-img"
            onClick={this.props.createContigent}
          ></div>
        </div>
        <div className="cacontigent-parent-heading2">Earned Coupons</div>
        <div className="cacontigent-joinparent" id="cacontigent-joinparent">
          <div
            className="cacontigent-heading"
            style={{ color: 'rgba(255, 255, 255, 0.87)' }}
          >
            Join Contingent
          </div>
          <div
            className="cacontigent-joinparent-form"
            id="cacontigent-joinparent-form-viewlist"
          >
            <div className="cacontigent-joinparent-form-invites">
              Invites :<strong> {this.state.invitesno} </strong>{' '}
            </div>
            <div
              id="viewmore"
              className="cacontigent-Viewoption"
              onClick={this.viewMore}
            >
              View List
            </div>
            <div
              id="viewless"
              className="cacontigent-Viewoption"
              onClick={this.viewLess}
            >
              Hide List
            </div>
          </div>
        </div>
        <div
          className="cacontigent-joinparent-formlist"
          id="cacontigent-joinparent-form-hidelist"
        >
          <table id="ca02">
            <tbody>
              <tr id="cacontignet-table-row1">
                <th id="cacontignet-th-1">LEADER NAME</th>
                <th id="cacontignet-th-2">CONTINGENT_ID</th>
                <th id="cacontignet-th-3">JOINED</th>
                <th id="cacontignet-th-4"></th>
                <th id="cacontignet-th-5"></th>
              </tr>

              {this.state.invitelist &&
                this.state.invitelist.map(
                  e =>
                    e.status === 'P' && (
                      <tr id="cacontignet-table-row2">
                        <td>{e.contingent.leader.name}</td>
                        <td>{e.contingent.contingent_id}</td>
                        <td>{e.accepted_users}</td>
                        <td id="cacontignet-td-4">
                          <button
                            id="cacontignet-td-b01"
                            onClick={() => {
                              this.props.acceptInvitation(
                                e.contingent.contingent_id
                              )
                            }}
                          >
                            ACCEPT
                          </button>
                        </td>
                        <td id="cacontignet-td-5">
                          <button
                            id="cacontignet-td-b02"
                            onClick={() => {
                              this.props.declineInvitation(
                                e.contingent.contingent_id
                              )
                            }}
                          >
                            DECLINE
                          </button>
                        </td>
                      </tr>
                    )
                )}
            </tbody>
          </table>
        </div>
        <Aboutcontigent />
        <Perks />
      </div>
    )
  }
}
