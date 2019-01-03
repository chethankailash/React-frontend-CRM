import React from 'react'


class AddTicket extends React.Component{
    

   



    render(){
        return(<div>
            <form style={{"border":"3px solid gray","padding":"5px 5px"}}>
                <fieldset >
                    <legend><h3>Add Ticket</h3></legend>
                    <div class="row">
                       <div class="col-md-4"> Name:</div>
                       <div class="col-md-8">
                        <input type="text" class="form-control"/>
                        </div>
                    </div>
                    <br/>
                    <div class="row">
                       <div class="col-md-4"> Department:</div>
                       <div class="col-md-8">
                            <select class="form-control" id="sel1" name="sellist1">
                                    <option>--select--</option>
                                    <option value="Sales">Sales</option>
                                    <option value="Technical">Technical</option>
                                    <option value="Hr"> HR</option>
                            </select>
                        </div>
                    </div>
                </fieldset>
            </form>

        </div>)
    }
}

export default AddTicket