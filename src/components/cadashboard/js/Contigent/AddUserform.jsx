import React, { Component } from 'react'
import '../../css/cacontigent.css'
/* eslint-disable react/prop-types */
import axios from 'axios'
import { BASE_URL } from '../../../../utils/urls'
export default class AddUserForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      es_id: props.form.esummit_id,
      name: props.form.name,
      show_reset: false,
      contingent_error_messages: '',
      contingent_error_bool: false,
      contingent_data: props.no_contigent,
      Es_id_error: false,
      error_bool: '',
      loading: false,
      loading_bool: ''
    }
  }

  onBlur = e => {
    this.setState({
      es_id: e.target.value,
      contingent_error_bool: false
    })
    this.handleClick(e.target.value)
  }
  handleReset = index => {
    // console.log(this.state.contingent_data,"after reset")
    let token = localStorage.getItem('user_token')
    let data = {
      esummit_id: this.state.es_id
    }
    document.getElementById('loadingUserform').style.display = 'block'

    axios({
      method: 'post',
      url: BASE_URL + `/v1/api/contingent/member/delete/${data.esummit_id}`,

      data: data,
      headers: {
        Authorization: `Token ${token}`
      }
    })
      .then(res => {
        // document.getElementById(index).style.display = "none";
        document.getElementById('loadingUserform').style.display = 'none'

        let array = [...this.state.contingent_data]
        array[index].esummit_id = ''
        array[index].name = ''

        this.setState({
          name: '',
          show_reset: false,
          contingent_data: array
        })

        document.getElementById('contigent-adduserform-input' + index).value =
          ''
        document.getElementById(
          'contigent-adduserform-input' + index
        ).readOnly = false
      })
      .catch(response => {
        document.getElementById('loadingUserform').style.display = 'none'
      })
  }

  handleSubmit = index => {
    // console.log(this.state.no_contigent)
    // document.getElementById("contigent-adduserform-input" + index).readOnly = true;
    // this.setState({
    // 	items: update(this.state.no_contigent, {index: {essumit_id: {$set: this.state.es_id}}})
    //   })
    // console.log(this.state.contingent_data,"handleSubmit")
    let token = localStorage.getItem('user_token')
    let data = {
      esummit_id: this.state.es_id
    }
    document.getElementById('loadingUserform').style.display = 'block'
    axios({
      method: 'post',
      url: BASE_URL + `/v1/api/contingent/member/invite/${data.esummit_id}`,

      data: data,
      headers: {
        Authorization: `Token ${token}`
      }
    })
      .then(res => {
        document.getElementById('loadingUserform').style.display = 'none'

        if (res.data.detail == 'invitation already sent') {
          this.setState({
            contingent_error_messages: 'invitation already sent',
            contingent_error_bool: true
          })
        } else {
          let array = [...this.state.contingent_data]
          array[index].esummit_id = this.state.es_id
          array[index].name = this.state.name

          document.getElementById(
            'contigent-adduserform-input' + index
          ).readOnly = true
          this.setState({
            show_reset: true,
            contingent_error_messages: '',
            contingent_error_bool: false,
            contingent_data: array,
            loading: false
          })
        }
      })
      .catch(response => {
        document.getElementById('loadingUserform').style.display = 'none'
        let contingent_error_messages
        if (this.state.es_id == '') contingent_error_messages = 'Field is empty'
        else if (this.state.contingent_error_messages == 'Invalid Esummit ID')
          contingent_error_messages = 'Invalid Esummit ID'
        else contingent_error_messages = 'User already a leader of a contingent'

        this.setState({
          contingent_error_messages: contingent_error_messages,
          contingent_error_bool: true
        })
      })
  }
  handleClick = es_id => {
    let token = localStorage.getItem('user_token')
    let data = {
      esummit_id: es_id
    }

    axios({
      method: 'post',
      url: BASE_URL + '/v1/api/contingent/user/name',
      data: data,
      headers: {
        Authorization: `Token ${token}`
      }
    })
      .then(res => {
        if (res.status === 200) {
          this.setState({
            name: res.data.name,
            contingent_error_bool: false
          })
        }
      })
      .catch(response => {
        // this.props.form.name = "";
        let contingent_error_messages
        if (es_id == '') contingent_error_messages = ''
        else contingent_error_messages = 'Invalid Esummit ID'
        this.setState({
          name: '',
          contingent_error_bool: true,
          contingent_error_messages: contingent_error_messages
        })
      })
  }

  componentDidMount() {
    if (this.state.show_reset)
      document.getElementById(
        'contigent-adduserform-input' + this.props.index
      ).readOnly = true
    // console.log(this.props.index,"hello")
    this.setState({ contingent_data: this.props.no_contigent })
    // console.log(this.state.contingent_data,this.props.index,"child-compounddidmount")
  }
  componentWillMount() {
    if (this.props.form.esummit_id && this.props.form.name) {
      this.setState({
        show_reset: true
      })
    }
    // console.log(this.state.contingent_data,this.props.index,"child-compoundWillmount")
  }

  render() {
    // {	console.log(this.props.no_contigent,this.props.index,"inside child render")}
    return (
      <div>
        <form>
          <div className="loadingUserformParent">
            {this.state.contingent_error_bool
              ? this.state.contingent_error_messages
              : null}
            {/* {this.state.Es_id_error?this.state.error_bool:null} */}
            <p id="loadingUserform" style={{ display: 'none' }}>
              Please Wait
            </p>
          </div>
          <div className="contigent-adduserform">
            <div className="contigent-adduserform-child">
              <div className="contigent-adduserform-heading">E-Summit ID</div>
              <input
                type="text"
                className="contigent-adduserform-input"
                id={'contigent-adduserform-input' + this.props.index}
                defaultValue={this.state.es_id}
                onBlur={e => {
                  this.onBlur(e)
                }}
                required
              />
            </div>
            <div className="contigent-adduserform-child">
              <div className="contigent-adduserform-heading"> Name</div>
              <div
                className="contigent-adduserform-input"
                id={'contigent-adduserform-input' + this.props.index}
              >
                {this.state.name}
              </div>
            </div>
            {this.state.es_id && this.state.name && this.state.show_reset ? (
              <div className="contigent-adduserform-button">
                <div
                  className="contigent-adduserform-buttonb01"
                  id={this.props.index}
                  onClick={() => {
                    this.handleReset(this.props.index)
                  }}
                >
                  Reset
                </div>
              </div>
            ) : (
              <>
                <div className="contigent-adduserform-button">
                  <div
                    className="contigent-adduserform-buttonb01"
                    id={this.props.index}
                    onClick={() => {
                      this.handleSubmit(this.props.index)
                    }}
                  >
                    Send
                  </div>
                </div>
                <div
                  className="contigent-adduserform-cross"
                  onClick={() => {
                    this.props.deleterow(this.props.index)
                  }}
                >
                  &#x2715;
                </div>
              </>
            )}
          </div>
        </form>
      </div>
    )
  }
}
/* eslint-disable react/prop-types */
