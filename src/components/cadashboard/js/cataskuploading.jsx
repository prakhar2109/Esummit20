import React, { Component } from 'react'
import '../css/catask.css'
import axios from 'axios'
import { BASE_URL } from './../../../utils/urls'
let token = localStorage.getItem('user_token')

/* eslint-disable react/prop-types */

export default class CATaskUploading extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isfileUploaded: false,
      fileUploaded: null,
      task: props.task
    }
  }
  fileUploadHandler = (file, task) => {
    let name = document.getElementById(`fileInput${task.id}`)
    if (name.files.item(0)) {
      let fileUploaded = file
      let isfileUploaded = true
      this.setState(
        {
          fileUploaded,
          isfileUploaded
        },
        () => {}
      )
      let formData = new FormData()
      formData.append('file', file[0])
      formData.append('task', task.id)
      axios
        .post(BASE_URL + `/v1/api/task/${task.id}/submit`, formData, {
          headers: {
            Authorization: `Token ${token}`,
            'Content-Type': 'multipart/formdata '
          }
        })
        .then(() => {
          // alert(resData) //do something with this and show the user that the file has
          // been uploaded !
          document.getElementById(
            `nameOfFileUploadedForTask${task.id}`
          ).innerHTML = name.files.item(0).name
          document.getElementById(`filestatus${task.id}`).innerHTML =
            'Uploaded '

          var element = document.getElementById(`Uploaded-Task${task.id}`)
          element.className = element.className.replace(
            'taskchild-uploadedfiles',
            'taskchild-filesupload'
          )
        })
    }
  }
  render() {
    let { task } = this.state
    return (
      <>
        <div
          id={`Uploaded-Task${task.id}`}
          className={
            task.sub === null || task.sub === undefined
              ? 'taskchild-uploadedfiles'
              : 'taskchild-filesupload'
          }
        >
          <div className="Selectfilesvg">
            <p
              id={`nameOfFileUploadedForTask${task.id}`}
              className="taskName1"
            ></p>

            <p id={`filestatus${task.id}`} className="taskName2">
              {task.sub === null || task.sub === undefined ? (
                <p className="taskchild-uploadedfiles-p">
                  Uploaded files shown here
                </p>
              ) : (
                <p className="taskchild-filesupload-p">Uploaded</p>
              )}
            </p>
          </div>
        </div>

        <div className="taskchild-fileupload">
          <input
            id={`fileInput${task.id}`}
            type="file"
            className="filesvg"
            onChange={e => this.fileUploadHandler(e.target.files, task)}
          />
        </div>
      </>
    )
  }
}
/* eslint-disable react/prop-types */
