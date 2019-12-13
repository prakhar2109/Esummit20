import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class Svgcorrect extends Component {
    constructor() {
        super()
        this.state = {}
    }
    componentDidMount = () => {
    }
    render() {

        return (
            <>
                <svg
                    width="25"
                    height="25"
                    viewBox="0 0 41 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M27.9224 12.6543L18.2446 22.5078L13.2885 17.5283L10.6172 20.1997L18.4321 28.0029L30.9921 15.8177L27.9224 12.6543Z"
                        fill="#359D9A"
                    />
                    <path
                        d="M20.4258 0C9.37716 0 0.425781 8.95138 0.425781 20C0.425781 31.0486 9.37716 40 20.4258 40C31.4744 40 40.4258 31.0486 40.4258 20C40.4141 8.95138 31.4627 0 20.4258 0ZM20.4258 36.3679C11.3807 36.3679 4.04617 29.0334 4.04617 19.9883C4.04617 10.9432 11.3807 3.60867 20.4258 3.60867C29.4709 3.62039 36.7937 10.9432 36.8054 19.9883C36.7937 29.0451 29.4709 36.3679 20.4258 36.3679Z"
                        fill="#359D9A"
                    />
                </svg>
            </>
        )
    }
}

export default Svgcorrect
/* eslint-disable react/prop-types */
