import React,{Component} from 'react'
import './../css/task.css'
// import Dropzone from 'react-dropzone' 
export default class tasks extends Component{
    constructor(){
        super();
        this.state={
            fileCounter:0,
            file:[]
        }
    }

    
    fileName=()=>{
        this.setState(prevState=>({
            fileCounter:prevState.fileCounter+1
        }))
        let fileInput = document.getElementById('task-file');
        let fileName = fileInput.files.item(0).name;
        document.getElementById(`taskFile${this.state.fileCounter}`).style.display='none';
        document.getElementById(`fileName${this.state.fileCounter}`).innerHTML=fileName;
        document.getElementById(`taskFile${this.state.fileCounter}`).style.display='inline';
        document.getElementById(`taskFile${this.state.fileCounter}`).style.border='none';
    }
    render(){                                                                                                                           
        return(
            
            <div className="task">
            <div  className="taskItem">
                Task {this.props.number}
            </div>
            <div className="taskDescription">
                {this.props.tasks.description}
            </div>
            {/* <Dropzone className="dropZone" */}
            {/* // onDrop={(files)=>{ */}
            {/* //     this.setState({
            //         isDropped1:true
            //     });
            //     this.onDrop(files)}
            // }
            //     
            // >/ */}
            <div className="taskFile" id={`taskFile${this.state.fileCounter}`}>
                <div className="svg">
                <svg className="arrowSvg" width="29" height="32" viewBox="0 0 29 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.1846 16.9605C27.8775 16.6306 27.4679 16.4713 27.0469 16.4713C26.6601 16.4713 26.2961 16.5964 25.9889 16.8809L16.1591 25.9029L16.1591 2.40921C16.1591 1.55593 15.4651 0.861934 14.6118 0.861933C13.7585 0.861933 13.0645 1.55593 13.0645 2.40921L13.0645 25.9939L3.23473 16.8695C2.62036 16.2779 1.63056 16.3234 1.03895 16.9491C0.447343 17.5635 0.492849 18.5533 1.11859 19.1449L13.5082 30.6016C13.6675 30.7609 13.8723 30.8633 14.0771 30.9315C14.2591 30.9884 14.4411 31.0339 14.6232 31.0339C15.1693 31.0339 15.6244 30.7495 15.9088 30.3399L28.105 19.1563C28.7307 18.5647 28.7763 17.5862 28.1846 16.9605Z" fill="#DDDDDD"/>
                </svg>
                <svg className="bracketSvg" width="37" height="18" viewBox="0 0 37 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.8422 0.798096C0.988923 0.798096 0.294922 1.4921 0.294922 2.34538V16.2709C0.294922 17.1242 0.988923 17.8182 1.8422 17.8182H35.1088C35.962 17.8182 36.6561 17.1242 36.6561 16.2709V2.34538C36.6561 1.4921 35.962 0.798096 35.1088 0.798096C34.2555 0.798096 33.5615 1.4921 33.5615 2.34538V14.7236H3.38949V2.34538C3.38949 1.50347 2.69548 0.798096 1.8422 0.798096Z" fill="#DBDBDB"/>
                </svg>


                </div>
                <div className="fileUpload" id="fileUpload1">    
                    <span id={`fileName${this.state.fileCounter}`}> <span className="chooseFile" >Choose a file</span> or drag it here</span>
                    <input type="file" id="task-file" onChange={this.fileName}></input>
                </div>
            </div>
            {/* // </Dropzone> */}
            </div>
            
        )
    }
}