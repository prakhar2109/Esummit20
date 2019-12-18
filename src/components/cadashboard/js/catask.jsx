import React, { Component } from 'react'
import '../css/catask.css'
import axios from 'axios'
import { BASE_URL } from './../../../utils/urls'
import CATaskUploading from './cataskuploading'
import CATaskSummary from './catasksummary'
let token = localStorage.getItem('user_token')

/* eslint-disable react/prop-types */

export default class CATaskBoard extends Component {
  constructor() {
    super()
    this.state = {
      isfileUploaded: false,
      fileUploaded: null,
      task_bool: 'tasks'
    }
  }
  componentDidMount = () => {
    axios
      .get(BASE_URL + '/v1/api/task/list', {
        headers: {
          Authorization: `Token ${token}`
        }
      })
      .then(res => {
        if (res && res.data) {
          this.setState({ tasks: res.data })
        }
      })
      .catch(function(response) {
        // alert(response)
      })
  }
  tasksChangeHandler = variable => {
    this.setState({ task_bool: variable })
  }
  render() {
    let { tasks } = this.state
    let today = new Date()
    let dayToday = today.getDate()
    let dateString =
      dayToday <= 31 && dayToday > 26
        ? '24 Dec - 31 Dec 2018'
        : dayToday < 8
        ? '1 Jan - 7 Jan 2019'
        : dayToday < 15
        ? '8 Jan - 14 Jan 2019'
        : dayToday < 22
        ? '15 Jan - 21 Jan 2019'
        : dayToday < 29
        ? '22 Jan - 28 Jan 2019'
        : '29 Jan - 2 Feb 2019'
    return (
      <div className="taskparent">
        <div className="taskchildheaderrow">
          <div
            className="taskchild-weeklyuploads"
            onClick={() => this.tasksChangeHandler('tasks')}
          >
            Tasks
          </div>
          <div
            className="taskchild-weeklyuploads"
            id="task-summary-title"
            onClick={() => this.tasksChangeHandler('tasksum')}
          >
            {' '}
            Tasks Summary
          </div>
        </div>
        {this.state.task_bool === 'tasks' ? (
          <div className="taskchildrow">
            {tasks && tasks.map(e => <CATask key={e.id} task={e} />)}
          </div>
        ) : null}
        {tasks && tasks.length === 0 ? (
          <div
            style={{
              fontSize: '1.6rem',
              color: 'white',
              paddingLeft: '1.5rem'
            }}
          >
            No tasks!
          </div>
        ) : null}

        {this.state.task_bool === 'tasksum' ? (
          <CATaskSummary tasks={tasks} />
        ) : null}
      </div>
    )
  }
}

class CATask extends Component {
  constructor() {
    super()
    this.state = {}
  }
  state = {
    visible: true
  }

  taskuploader = id => {
    document.getElementById(`taskuploaded${id}`).style.display = 'none'
    document.getElementById(`taskuploading${id}`).style.display = 'block'
  }
  render() {
    let task = this.props.task

    return (
      <div className="taskchild">
        <div
          className="taskchild-body taskuploaded"
          id={`taskuploaded${task.id}`}
        >
          <div className="taskchild-heading">{task.name}</div>
          <div className="taskchild-description">{task.description}</div>
          <div className="taskchild-points">Max Points:{task.max_points}</div>

          <button
            className="uploading-button"
            onClick={() => this.taskuploader(task.id)}
          >
            Upload
          </button>
        </div>

        <div
          className="taskchild-body taskuploading"
          id={`taskuploading${task.id}`}
        >
          <div className="taskchild-heading">{task.name}</div>
          <div className="taskchild-description">{task.description}</div>
          <div className="Uploading-task">
            <CATaskUploading task={task} />
          </div>
        </div>
      </div>
    )
  }
}

/* eslint-disable react/prop-types */
