import { useState } from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import TouchableOpacityDefault from "../button/TouchableOpacityDefault";
import TouchableOpacityIcon from "../button/TouchableOpacityIcon";
import InputDefault from "./InputDefault";
const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

export default function InputSearch({ inputCores, botaoCores, assuntosCores, ...props }) {

    const assuntosPesquisar = ['Shiny', 'Especial', 'TCG', 'Digimon', 'Pokemon', 'Cartas', 'Ilimitado']
    const [pesquisa, setPesquisa] = useState('');

    const inputStyle = [
        {
            width: '88%',
            paddingTop: 6,
            paddingBottom: 9,
            paddingHorizontal: 13,
            fontSize: 18
        },
        ...inputCores[0]
    ]
    inputCores[0] = inputStyle

    return (
        <View
            style={[styles.paiSearch]}
        >
            <View
                style={[styles.inpButSearch]}
            >
                <InputDefault
                    value={pesquisa}
                    onChange={setPesquisa}
                    placeholder={props.placeholder}
                    style={props.inputStyle}
                    inputCores={inputCores}
                />
                {props.buttonDisabled ? (
                    <></>
                ) : (

                    <TouchableOpacityIcon
                        onPress={props.buttonOnPress}
                        style={[
                            styles.touchSearch,
                            botaoCores[0],
                        ]}
                        borderColor={botaoCores[1]}
                        iconColor={botaoCores[2]}
                        icon={'Search'}
                    />
                )
                }
            </View>
            {props.assuntos ? (
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingVertical: 10 }}
                >
                    <View
                        style={[styles.assuntos]}
                    >

                        {assuntosPesquisar.map((item, index) => (

                            <TouchableOpacityDefault
                                key={index}
                                text={item}
                                onPress={() => setPesquisa(item)} // MUDAR
                                style={[
                                    styles.assuntosBotao,
                                    assuntosCores[0]
                                ]}
                                textStyle={[
                                    styles.assuntosTexto,
                                    assuntosCores[0][1]
                                ]}
                                borderColor={
                                    assuntosCores[1]
                                }
                            />
                        ))}
                    </View>
                </ScrollView>
            ) : (
                <></>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    paiSearch: {
        flexDirection: 'column',
    },
    inpButSearch: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 9
    },
    touchSearch: {
        width: 0.1 * screenWidth,
        height: 0.1 * screenWidth,
        paddingVertical: 0,
        paddingHorizontal: 0
    },
    assuntos: {
        flexDirection: 'row',
        gap: 8,
        marginHorizontal: 15
    },
    assuntosBotao: {
        height: 'auto',
        paddingVertical: 3,
        paddingHorizontal: 10,
        overflow: 'visible'
    },
    assuntosTexto: {
        fontSize: 17,
        fontFamily: 'PixelifySans-Medium'
    }
})