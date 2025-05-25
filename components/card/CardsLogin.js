import { StyleSheet, View } from "react-native";


export default function CardsLogin(props){
    const colorCards = props.colorCards ? props.colorCards : ['184, 51, 106', '196, 144, 209']
    const rotate = props.rotate ? props.rotate : ['147.16deg', '176.35deg', '-170.57deg', '26.72deg', '39.8deg', '68.99deg']

    return(
        <View
        style={[ styles.cardsLoginPai, props.stylePai ]}
        >
            { Array.from({length: 6}, (_, index) => {
                const offIndex = [0, 1, 2, 2, 1, 0]
                const offset = offIndex[index] * 80;
                return (

                    <View
                    key={index}
                    style={[
                    styles.cardDefault, 
                    { 
                        backgroundColor: `rgba(${colorCards[index % 2]}, 0.4)`,
                        borderColor: `rgba(${colorCards[index % 2]}, 1)`,
                        transform: `rotate(${rotate[index]})`,
                        position: 'absolute',
                        top: (offIndex[index] * 80),
                        left: offset,
                        zIndex: index,
                    }
                ]}
                />
            )}
            )
            
            }
        </View>
    )
}

const styles = StyleSheet.create({
    cardsLoginPai: {
        height: '34vh',
        width: '134vw',
        flexShrink: 0,
        transform: 'rotate(-180deg)',
    },

    cardDefault: {
        flexShrink: 0,
        width: '152px',
        height: '228px',
        borderWidth: 17,
        borderStyle: 'solid',
        borderRadius: 10,
    }
})