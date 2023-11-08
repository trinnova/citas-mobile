import React from 'react'
import { Pressable, SafeAreaView, Text, View, StyleSheet } from 'react-native'

const InformacionPaciente = ({paciente, setModalPaciente}) => {
    return (
        <SafeAreaView
            style={styles.contenedor}
        >
            <Text style={styles.titulo}>
                Información {''}
                <Text style={styles.tituloBold}>Paciente</Text>

                    <View>
                        <Pressable
                            style={styles.btnCerrar}
                            onPress={() => setModalPaciente(false)}
                        >
                            <Text style={styles.btnCerrarTexto}>X Cerrar</Text>
                        </Pressable>
                    </View>
            </Text>

            <Text>{paciente.paciente}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create(
    {
        contenedor: {
            backgroundColor: '#F59E0B',
            flex: 1
        },

        titulo: {
            fontSize: 30,
            fontWeight: '600',
            textAlign: 'center',
            marginTop: 30,
            color: '#FFF',
        },

        tituloBold: {
            fontWeight: '900',
        },

        btnCerrar: {
            marginVertical: 30,
            backgroundColor: '#E06900',
            marginHorizontal: 30,
            padding: 15,
            borderRadius: 10,
        },

        btnCerrarTexto: {
            color: '#FFF',
            textAlign: 'center',
            fontWeight: '900',
            fontSize: 16,
            textTransform: 'uppercase',
        },
    }
)

export default InformacionPaciente
