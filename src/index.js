import React from "react"
import ReactDOM from "react-dom"
import AppContext from "./app-context"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import injectTapEventPlugin from "react-tap-event-plugin"
injectTapEventPlugin();

ReactDOM.render(<MuiThemeProvider>
                <AppContext />
            </MuiThemeProvider>,
    document.getElementById("content")
);