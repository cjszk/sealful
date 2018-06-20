import React from 'react';
import {connect} from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ConfirmClientDelete from './ConfirmClientDelete';
import EditClientForm from './EditClientForm';



import requiresLogin from './requires-login';

export class ClientsList extends React.Component {

    render() {
        const clientList = this.props.filteredList.map((client) => {
            return (
                 <ListItem key={client.id} button>
                     <ListItemText>
                         {client.name} <br />
                         {client.phone} <br />
                         {client.email} <br />
                     </ListItemText>
                     <EditClientForm clientInfo={client} clientId={client.id}/>
                     <ConfirmClientDelete clientId={client.id} />
                 </ListItem>
            )
         });
        return (
            <div className="client-list">
                <List>
                    {clientList}
                </List>
            </div>
        )
    }
}

export default requiresLogin()(connect()(ClientsList));
