import React, { Component } from 'react'
import '../css/catask.css'

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
    const { tasks } = this.state
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
            {tasks.length > 0 &&
              tasks.map(task => {
                return (
                  <tr key={task.id}>
                    <td id="cacollegenametd">{task.description}</td>
                    <td id="capointstd">
                      {task.submissions &&
                        task.submissions.map((submission, index) => (
                          <div key={index}>
                            {submission.file.substring(50)} -{' '}
                            {submission.points}
                          </div>
                        ))}
                      {task.submissions.length === 0 ? <div>0</div> : <></>}
                    </td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    )
  }
}
