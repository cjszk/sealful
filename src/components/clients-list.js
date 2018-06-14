import React from 'react';
import {connect} from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ConfirmClientDelete from './ConfirmClientDelete';


import requiresLogin from './requires-login';

export class ClientsList extends React.Component {

    render() {
        const clientList = this.props.user.clients.map((client) => {
           return (
                <ListItem key={client.id} button>
                    <ListItemText>
                        Name: {client.name} <br />
                        Phone: {client.phone} <br />
                        Email: {client.email} <br />
                    </ListItemText>
                    <ConfirmClientDelete clientId={client.id} />
                </ListItem>
           )
        });
        // const sortedClientList = clientList.sort((a, b) => a - b);
        console.log('CLIENTSLIST PROPS:', this.props.user.clients);
        return (
            <div>
                Client List
                <List>
                    {clientList}
                </List>
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     console.log('CLIENTSLIST STATE', state);
//     return {
//         authToken: state.auth.authToken,
//         currentUser: state.auth.currentUser,
//         selectedDate: state.calendarReducer.selectedDate,
//         selectedTab: state.tabsReducer.selectedTab
//     }
// };

export default requiresLogin()(connect()(ClientsList));
