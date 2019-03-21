import React, {Component} from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import Button from '@material-ui/core/Button';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});
class Template extends Component {
render (){

  return (

    <MuiThemeProvider theme={theme}>

    <div>
      <header>
        <h1>TicTacTuring.</h1>
        <Button variant="contained" color="primary" onClick={() => { console.log('onClick'); }}>
        TEST Button

    </Button>
      </header>
      <main>
        {this.props.children}
      </main>
    </div>


    </MuiThemeProvider>


  )

}
}
export default Template
