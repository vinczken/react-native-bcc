import InputDefault from "../input/InputDefault"
import LabelDefault from "../label/LabelDefault"

export default function LabelInput({ textLabel, styleLabel, placeholderInput, valueInput, onChangeInput, inputCores, secureTextEntry, ...props }) {

    return (
        <>
            <LabelDefault
                text={textLabel}
                style={styleLabel}
                {...props}
            />
            <InputDefault
                value={valueInput}
                onChange={onChangeInput}
                placeholder={placeholderInput}
                inputCores={inputCores}
                secureTextEntry={secureTextEntry}
                {...props}
            />
        </>
    )
}