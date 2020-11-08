import { Typography } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import React, {Component} from 'react';
import Container from '@material-ui/core/Container';


export class Loading extends Component {
    constructor( props ) {
        super( props )
        this.state = {
        }
    }

    callTiming(){
        const timeout = setTimeout(() => {
            window.location.reload()
        }, 5000);
        return () => clearTimeout(timeout);
    }

    render() {
        return (
            <Container maxWidth="md">
                <Typography>
                    Ingresando..
                </Typography>
                {this.callTiming()}
                {<CircularProgress size={16} color="secondary"/>}
            </Container>
        )
    }

}