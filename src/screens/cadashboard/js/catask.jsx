import React, { Component } from 'react';
import '../css/catask.css';
import axios from "axios";
import { BASE_URL } from './../../../utils/urls';
let token = localStorage.getItem('user_token')
export default class CATaskBoard extends Component {

    constructor() {
        super()
        this.state = {
            isfileUploaded: false,
            fileUploaded: null
        }
    }
    componentDidMount = () => {

        axios
            .get(BASE_URL + '/v1/api/task/list/', {
                'headers': {
                    'Authorization': `Token ${token}`
                }
            })
            .then(res => {
                if (res && res.data) {
                    this.setState({ tasks: res.data })
                }
            })
            .catch(function (response) {
                alert(response);
            })

    }

    render() {
        let { tasks } = this.state;
        let today = new Date();
        let dayToday = today.getDate();
        let dateString = (dayToday <= 31 && dayToday > 26) ? '24 Dec - 31 Dec 2018' : (dayToday < 8 ? '1 Jan - 7 Jan 2019' : (dayToday < 15 ? '8 Jan - 14 Jan 2019' : (dayToday < 22 ? '15 Jan - 21 Jan 2019' : (dayToday < 29 ? '22 Jan - 28 Jan 2019' : '29 Jan - 2 Feb 2019'))));
        return (

            <div className="taskparent">
                <div className="taskchildheaderrow">
                    <div className="taskchild-weeklyuploads">
                        Weekly Uploads
                    </div>
                    <div className="taskchild-line"></div>
                    <div className="taskchild-dates">
                        {dateString}
                    </div>
                </div>
                <div className="taskchildrow">

                    {tasks && tasks.map((e) => <CATask key={e.id} task={e} />)}

                </div>
            </div>
        )
    }
}

class CATask extends Component {
    constructor() {
        super()
        this.state = {
            isfileUploaded: false,
            fileUploaded: null
        }
    }
    state = {
        visible: true
    }

    fileUploadHandler = (file, task) => {
        let name = document.getElementById(`fileInput${task.id}`)
        if (name.files.item(0)) {

            let fileUploaded = file
            let isfileUploaded = true
            this.setState({
                fileUploaded,
                isfileUploaded
            }, () => { })
            let formData = new FormData();
            formData.append("file", file[0]);
            formData.append("task", task.id);
            axios
                .post(BASE_URL + `/v1/api/task/${task.id}/submit/`, formData, {
                    headers: {
                        'Authorization': `Token ${token}`,
                        'Content-Type': 'multipart/formdata '
                    }
                })
                .then(() => {

                    // alert(resData) //do something with this and show the user that the file has
                    // been uploaded !
                    document
                        .getElementById(`nameOfFileUploadedForTask${task.id}`)
                        .innerHTML = name
                            .files
                            .item(0)
                            .name;
                    document
                        .getElementById(`filestatus${task.id}`)
                        .innerHTML = "Uploaded ";
                       
                    var element = document.getElementById(`Uploaded-Task${task.id}`);
                        element.className = element.className.replace("taskchild-uploadedfiles", "taskchild-filesupload");
                })

        }
    }
    render() {
        let task = this.props.task;
        return (
            <div className="taskchild">

                <div className="taskchild-body">
                    <div className="taskchild-heading">
                        {task.name}
                    </div>

                    <div className="taskchild-description">

                        {task.description}

                    </div>
                    
                  
                    
                    <div id={`Uploaded-Task${task.id}`} className={(task.sub === null || task.sub === undefined) ? "taskchild-uploadedfiles" : "taskchild-filesupload" }> 
                        <div className="Selectfilesvg">
                        <p id={`nameOfFileUploadedForTask${task.id}`} className="taskName1"></p>

                        <p id={`filestatus${task.id}`} className="taskName2">{(task.sub === null || task.sub === undefined) ? (<p className="taskchild-uploadedfiles-p">Uploaded files shown here</p>): (<p className="taskchild-filesupload-p">Uploaded</p>)}</p>
                        </div>
                    </div>
                    
                    <div className="taskchild-fileupload">

                        <input
                            id={`fileInput${task.id}`}
                            type='file'
                            className="filesvg"
                            onChange={(e) => this.fileUploadHandler(e.target.files, task)} />
                           

                    </div>
                </div>
            </div>
        )
    }
}