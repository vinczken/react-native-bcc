import { View } from "react-native";
import LabelDefault from "../label/LabelDefault";
import InputDefault from "../input/InputDefault";
import TouchableOpacityIcon from "../button/TouchableOpacityIcon";
import { ThemeBackgroundColor, ThemeColor, ThemeValue } from "../../functions/GeneralsAux";
import { useTheme } from "../../contexts/ThemeContext";
import { useState } from "react";
import { BorderBl } from "iconoir-react-native";

export default function LabelInputModal({ textLabel, index, value, onChange, styles, editado, setEditado, ...props }) {
    const { theme } = useTheme()
    const [editing, setEditing] = useState(true)

    return (
        <>
            {props.disableLabel ? (<></>)
                : (
                    <LabelDefault
                        text={textLabel}
                        style={[styles.dado, ThemeColor('#7676CE', '#', theme)]}
                    />
                )
            }
            <View style={styles.infoInputBot}>
                <InputDefault
                    placeholder={textLabel}
                    value={value}
                    onChange={onChange}
                    inputCores={[
                        [
                            ThemeColor('#750D37', '#750D37', theme),
                            ThemeBackgroundColor('#CEEAFF', '#ACACDE', theme),
                        ],
                        ThemeValue('#CFBAE1', '#FFF2F6', theme),
                        ThemeValue('#F7F9F7', '#0B0B35', theme),
                        ThemeValue('#ACACDE', '#F7F9F7', theme),
                    ]}
                    style={[styles.infoInput]}
                //secureTextEntry={dado.includes('Senha')}
                />
                {textLabel.includes('Senha Atual') ? (
                    <></>
                ) : (
                    <TouchableOpacityIcon
                        icon={editado[index] ? 'Edit' : 'EditPencil'}
                        iconColor={ThemeValue('#F7F9F7', '#', theme)}
                        iconWidth={23}
                        iconHeight={23}
                        strokeWidth={2.8}
                        onPress={() => { setEditing }}
                        style={[
                            styles.dadoBut,
                            editado[index]
                                ? ([ThemeBackgroundColor('#648ED8', '#', theme), { borderBottomWidth: 0 }])
                                : ThemeBackgroundColor('#ACACDE', '#', theme)
                        ]}
                        borderColor={editado[index]
                            ? ThemeValue('#C1E0F7', '#', theme)
                            : ThemeValue('#7676CE', '#', theme)}
                        activeOpacity={1}
                    />
                )}
            </View>
        </>
    )
}