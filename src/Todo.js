import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import "./Todo.css"

export class Todo extends React.Component {

    render() {
        return (
            <Card>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        Nombre: {this.props.text}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        Prioridad: {this.props.priority}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        Fecha limite: {this.props.dueDate.format('DD-MM-YYYY')}
                    </Typography>
                </CardContent>
            </Card>
        );
    }

}