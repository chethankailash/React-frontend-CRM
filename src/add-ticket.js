import React from 'react'


class AddTicket extends React.Component{
    

   



    render(){
        return(<div>
            <form style={{"border":"3px solid gray","padding":"10px 10px"}}>
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
                    <br/>

                    <div class="row">
                       <div class="col-md-4"> Priority:</div>
                       <div class="col-md-8">
                            <input type="radio" name="gender" value="High" checked/> High<br/>
                            <input type="radio" name="gender" value="Medium"/> Medium<br/>
                            <input type="radio" name="gender" value="Low"/> Low
                        </div>
                    </div>
                    <br/>
                    <div class="row">
                       <div class="col-md-4"> Message:</div>
                       <div class="col-md-8">
                           <input type="textarea" style={{"height":"100px"}} class="form-control"/>
                        </div>
                    </div>
                    <br/>
                    <div class="row">
                       <div class="col-md-4"></div>
                       <div class="col-md-8">
                            <div class="row">
                                <div class="col-md-6">
                                    <input type="submit" class="form-control btn-success" value="submit" />
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