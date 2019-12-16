import React, { Component } from 'react'
import '../css/catask.css'
import axios from 'axios'
import { BASE_URL } from './../../../utils/urls'
let token = localStorage.getItem('user_token')

/* eslint-disable react/prop-types */

export default class CATaskSummary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: props.tasks
    }
  }
  componentWillReceiveProps = nextProps => {
    if (nextProps.tasks !== this.props.tasks) {
      this.setState({ tasks: nextProps.tasks })
    }
  }
  render() {
    return (
      <div className="catasksummary-parent">
        <table id="ca01">
          <tbody>
            <tr>
              <th id="carank" style={{ width: '50%' }}>
                TASKS
              </th>
              <th id="caname" style={{ width: '50%' }}>
                POINTS AWARDED
              </th>
            </tr>

            {this.state.tasks &&
              this.state.tasks.map(tsk => {
                return (
                  <tr key={tsk.id}>
                    <td id="cacollegenametd">{tsk.description}</td>
                    {tsk.sub && <td id="capointstd">{tsk.sub.points}</td>}
                    {!tsk.sub && <td id="capointstd">0</td>}
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    )
  }
}
