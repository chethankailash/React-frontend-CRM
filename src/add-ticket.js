import React from 'react'
import Axios from 'axios';


class AddTicket extends React.Component{
    constructor(){
        super()
        this.state={
            Name:'',
            Department:'',
            Priority:'',
            Message:'',
            status:'open'

        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleChange(event){
       // console.log(event.target.name)
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault()

        const data={
            name:this.state.Name,
            department:this.state.Department,
            priority:this.state.Priority,
            message:this.state.Message,
            status:this.state.status
        }
        Axios.post('https://dct-api-data.herokuapp.com/tickets?api_key=befe313c9c822bc2',data).then(response=>{
            console.log(response.data)
        })

        this.setState({
            Name:'',
            Department:'',
            Priority:'',
            Message:''
        })
    
    }

   



    render(){
        return(<div>
            <form style={{"border":"3px solid gray","padding":"10px 10px"}} onSubmit={this.handleSubmit}>
                <fieldset >
                    <legend><h3>Add Ticket</h3></legend>
                    <div class="row">
                       <div class="col-md-4"> Name:</div>
                       <div class="col-md-8">
                        <input type="text" class="form-control" name="Name" onChange={this.handleChange} value={this.state.Name}/>
                        </div>
                    </div>
                    <br/>
                    <div class="row">
                       <div class="col-md-4"> Department:</div>
                       <div class="col-md-8">
                            <select class="form-control" id="sel1" name="sellist1" name="Department" onChange={this.handleChange} value={this.state.Department}>
                                    <option>--select--</option>
                                    <option value="Sales">Sales</option>
                                    <option value="Technical">Technical</option>
                                    <option value="Hr"> HR</option>
                            </select>
                        </div>
                    </div>
                    <br/>

                    <div class="row">
                       <div class="col-md-4"> Priority:</div>
                       <div class="col-md-8">
                            <input type="radio" name="Priority" value="High" onChange={this.handleChange}/> High<br/>
                            <input type="radio" name="Priority" value="Medium" onChange={this.handleChange}/> Medium<br/>
                            <input type="radio" name="Priority" value="Low" onChange={this.handleChange}/> Low
                        </div>
                    </div>
                    <br/>
                    <div class="row">
                       <div class="col-md-4"> Message:</div>
                       <div class="col-md-8">
                           <input type="textarea" style={{"height":"100px"}} class="form-control" name="Message" value={this.state.Message} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <br/>
                    <div class="row">
                       <div class="col-md-4"></div>
                       <div class="col-md-8">
                            <div class="row">
                                <div class="col-md-6">
                                    <input type="submit" class="form-control btn-success" value="submit" onClick={this.handleSubmit}/>
                                </div>
                                <div class="col-md-6">
                                    <input type="button" value="reset" class="form-control btn-warning"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                </fieldset>
            </form>

        </div>)
    }
}

export default AddTicket