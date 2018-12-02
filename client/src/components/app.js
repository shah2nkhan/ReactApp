import React, { Component } from "react";
import '../styles/app.css';
import '../plainJs/streaming.js'
//import "@jpmorganchase/perspective";
 //import "@jpmorganchase/perspective-viewer-hypergrid";
import "@jpmorganchase/perspective-viewer/build/material.dark.css";
import CssBaseline from '@material-ui/core/CssBaseline'
import { withStyles , createMuiTheme} from '@material-ui/core/styles';
import {Grid} from "./grid.js";

// const theme= createMuiTheme(
//     {
//         palette: {
//           primary: {
//             main: '#4527a0',
//           },
//           secondary: deepPurple,
//         },
//       }
// );

class App extends Component {

    constructor(props) {
        super(props);
      }

    render() {
        return(
           <React.Fragment>
               <CssBaseline />
            <div>
                <h1>{this.props.title}</h1>
                <perspective-viewer row-pivots='["name"]' column-pivots='["client"]' columns='["chg","vol"]'></perspective-viewer>
            </div>
            </React.Fragment>
            );
    }
}

export default App;


