import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList, ActivityIndicator, Image } from 'react-native';

export default function User() {

    const [carregando, setCarregando] = useState(true);
    const [dados, setDados] = useState([]);

    useEffect(
        () => {
            fetch('https://randomuser.me/api/?results=100')
                .then((resp) => resp.json())
                .then((json) => setDados(json.results))
                .catch(() => (alert('Erro ao carregar a lista de filmes')))
                .finally(() => setCarregando(false))
        }, [])


    return (
        <View style={styles.container}>
            {
                carregando ? <ActivityIndicator /> : (

                    <FlatList
                        data={dados}
                        renderItem={({ item }) => (

                            <>
                                <View style={styles.line}>

                                    <Image
                                        source={{ uri: item.picture.thumbnail }}
                                        style={styles.avatar} />

                               

                                <View style={styles.info}>
                                    <Text style={styles.email}>{item.email}</Text>
                                    <Text style={styles.name}>{item.name.first} {item.name.last}</Text>
                                </View>

                                </View>


                            </>
                        )}

                        // RENDERIZA A LISTA 
                        keyExtractor={item => item.email}

                    />

                )
            }

        </View>
    )


}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#fff',
        borderTopWidth: 0,
        borderBottomWidth: 0,
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 100
    },
    line: {
        height: 50,
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 50,
        marginRight: 10,
        alignSelf: 'center'
    },
    info: {
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    name: {
        fontSize: 12
    },
    email: {
        fontSize: 14,
        fontWeight: 'bold'

    },
});
