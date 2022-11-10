import React, { useState } from "react";

import { View, Text, Button } from "react-native";

const State = () => {

    const [contador, setVariavel] = useState(10);

    return (

        <View>
            <br />
            <br />
            <Text>Contador 02</Text>
            <Text>{contador}</Text>
            <Button title="clique aqui" onPress={() => setVariavel(contador + 1)} />

        </View>

    );

};



export default State;