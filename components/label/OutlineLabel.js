import { Svg, Text as SvgText, TSpan } from 'react-native-svg';

export default function OutlineLabel(props) {
    const textAnchor = 'center'
    const textSize = 30
    const strokeWidth = 9
    const position = {
        x: '2%',
        y: 40
    }

    return (
        <Svg height="100%" width="65%">
            {/* Texto de contorno (borda) - renderizado primeiro */}
            <SvgText
                x={position.x}
                y={position.y}
                stroke={props.borderColor}      // Cor da borda
                strokeWidth={strokeWidth}   // Grossura da borda (mais espessa que o texto)
                fill="transparent"  // Sem preenchimento interno
                textAnchor={textAnchor}
                fontSize={textSize}
                fontFamily='PixelifySans-Bold'
            >
                {props.text.map((line, index) => (
                    <TSpan key={index} x={position.x} dy={index === 0 ? 0 : textSize + 5}>
                        {line}
                    </TSpan>
                ))}
            </SvgText>

            {/* Texto principal - renderizado por cima */}
            <SvgText
                x={position.x}
                y={position.y}
                fill={props.textColor}       // Cor do texto
                textAnchor={textAnchor}
                fontSize={textSize}
                fontWeight="bold"
                fontFamily='PixelifySans-Bold'
            >
                {props.text.map((line, index) => (
                    <TSpan key={index} x={position.x} dy={index === 0 ? 0 : textSize + 5}>
                        {line}
                    </TSpan>
                ))}
            </SvgText>
        </Svg>
    )
}