import React, { Component } from "react";

// database
import database from "./database.json";

// components
import TitleDescription from "./components/TitleDescription";

class App extends Component {
  state = { database };
  //console.log(this.state.database);
  render() {
    const { onlinestore, services } = this.state.database;
    return (
      <div>
        <TitleDescription
          title={onlinestore.title}
          description={onlinestore.description}
          button={onlinestore.button}
        />
        <TitleDescription
          title={services.yourbeauty.title}
          description={services.yourbeauty.description}
        />
        <TitleDescription
          title={services.availabilitylocation.title}
          description={services.availabilitylocation.description}
        />
        <TitleDescription
          imgurl={services.ourprofessionals.imgurl}
          title={services.ourprofessionals.title}
          description={services.ourprofessionals.description}
        />
      </div>
    );
  }
}

export default App;
