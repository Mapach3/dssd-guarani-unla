import React from 'react';
import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

const InscriptionExam = ({open , classes}) => {

    return (
        <main
            className={clsx(classes.content, {
                [classes.contentShift]: open,
            })}
        >
            <div className={classes.drawerHeader} />
            <Typography paragraph>
                Ventana de inscripcion a examenes.
            </Typography>
        </main>
    )
}
export default withRouter(InscriptionExam);