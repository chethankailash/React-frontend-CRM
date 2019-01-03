import React, { Component } from 'react';
import ViewTicket from './view-ticket';
import AddTicket from './add-ticket';



class App extends Component {
  render() {
    return (
      <div className="App" class="container" style={{"background":" #f5f5f0"}}>
      <br/>
      <div class="row"><h1>TICKET MASTER</h1><br/></div><br/>
        <div class="row">
            <div class="col-md-7">
                 
                <ViewTicket/>
            </div>
            <div class="col-md-4">
              <AddTicket/>
            </div>

        </div>  {/* class row */}
      </div>
    );
  }
}

export default App;
