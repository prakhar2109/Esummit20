import React,{Component} from 'react'
import './../css/pendingTasks.css'
import Tasks from './tasks.jsx'
export default class pendingTasks extends Component{
    constructor(){
        super()
        this.state={

        }
    }
    
    render(){ 
        return(
            <div id="pendingTasks">
                <div id="headerLeft">
                    Weekly Uploads 
                </div>
                <div id="headerLine">
                
                </div>
                <div id="headerRight">
                   23 September 2018-30 September 2018
                </div>
                <Tasks />
            </div>
        )
    }
}