import React from 'react'
import axios from 'axios'

class ViewTicket extends React.Component{

    constructor(){
        super()
        this.state={
            users:[],
            filteredTickets:[]
        }
        this.handleChange=this.handleChange.bind(this);
        this.buttonFilter=this.buttonFilter.bind(this);
        this.handleCheck=this.handleCheck.bind(this);
    }

    handleCheck(event){
        event.persist()
        const id=(event.target.id)
        if(event.target.checked===true){
            console.log("checked")
            axios.put(`http://dct-api-data.herokuapp.com/tickets/${id}?api_key=befe313c9c822bc2`,{status:"close"})
            .then((response)=>{
                console.log(response.data);

            })

        }else{
            console.log("unchecked")
            axios.put(`http://dct-api-data.herokuapp.com/tickets/${id}?api_key=befe313c9c822bc2`,{status:"open"})
            .then((response)=>{
                console.log(response.data);

            })
        }

    }

    handleChange(event){
        event.persist()
        this.setState(prevState=>({
            filteredTickets:prevState.users.filter(user=>user.name.toLowerCase().indexOf(event.target.value.toLowerCase())>=0)
        }))

    }

    buttonFilter(event){
       // console.log(event.target.value)
        event.persist()
        if(event.target.value==="All"){
            this.setState(prevState=>({
                filteredTickets:this.state.users
            }))
        }
        else{
            this.setState(prevState=>({
                filteredTickets:prevState.users.filter((user)=>{
                    return (user.priority===event.target.value)
                })
            }))
        }
       
        
    }




    componentDidMount(){
        axios.get('http://dct-api-data.herokuapp.com/tickets?api_key=befe313c9c822bc2')
        .then((response)=>{
            this.setState({
                users:response.data,
                filteredTickets:response.data
            })
            //console.log(this.state.users);
        })
        .catch((error)=>{
            console.log(error);
        })
        

    }


    render(){
        //console.log(this.state.users)
        return(<div>
            <h3>LISTING TICKETS- {this.state.filteredTickets.length}</h3>
            <br/>
            <div class="row">
                <div class="col-md-6">
                <input type="text" name="search" placeholder="seach by name" class="form-control" onChange={this.handleChange}/>
                </div>
                <div class="col-md-6">
                <h5>
                    <input type="button" value="All"  class=" btn-info" onClick={this.buttonFilter}/>
                    <input type="button" value="High" class=" btn-info" onClick={this.buttonFilter}/>
                    <input type="button" value="Medium" class=" btn-info" onClick={this.buttonFilter}/>
                    <input type="button" value="Low" class=" btn-info" onClick={this.buttonFilter}/>

                </h5>
                </div>

            </div>
            <br/>
            <table class="table">
                <thead style={{"background":"black","color":"white"}}> 
                    <tr>
                        <td>Code</td>
                        <td>Name</td>
                        <td>Department</td>
                        <td>Priority</td>
                        <td>Message</td>
                        <td>Status</td>
                        
                    </tr>

                </thead>
                <tbody>
                    {this.state.filteredTickets.map((user)=>{
                        return(
                            <tr key={user.id}> 
                                <td>{user.ticket_code}</td>
                                <td>{user.name}</td>
                                <td>{user.department}</td>
                                <td>{user.priority}</td>
                                <td>{user.message}</td>
                                <td><input type="checkbox" defaultChecked={user.status==="open"?false:true} class="form-check-input" onChange={this.handleCheck} id={user.ticket_code}/></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>)
    }
}

export default ViewTicket