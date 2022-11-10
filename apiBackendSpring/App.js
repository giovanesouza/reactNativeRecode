// APP REFERENTE À API BACKENDSPRING - 100% FUNCIONAL

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'


class ClientList extends Component {

    constructor(props) {
        super(props);
        this.state = { clients: [] };
    }

    componentDidMount() {
        fetch('http://localhost:8080/clients')
            .then(response => response.json())
            .then(data => this.setState({ clients: data }));
    }

    // async remove(id) {
    //     await fetch(`/clients/${id}`, {
    //         method: 'DELETE',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         }
    //     }).then(() => {
    //         let updatedClients = [...this.state.clients].filter(i => i.id !== id);
    //         this.setState({clients: updatedClients});
    //     });
    // }

    render() {
        const { clients } = this.state;

        const clientList = clients.map(client => {
            return (
                <View>
                    <Text>Id={client.id}</Text>
                    <Text>Nome:{client.name}</Text>
                    <Text>E-mail:{client.email}</Text>
                </View>
            )
        });

        return (
            <View style={estilos.alinhamento}>

                <Text>Clientes</Text>

                {clientList}

            </View>
        )
    
    }
}

export default ClientList;


const estilos = StyleSheet.create({
    alinhamento: {
      flex: 1,
      textAlign: 'center',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  