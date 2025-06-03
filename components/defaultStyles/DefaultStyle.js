import { useTheme } from "../../contexts/ThemeContext";
import { ThemeBackgroundColor, ThemeColor, ThemeValue } from "../../functions/GeneralsAux";


export function CadastroDefaultStyle(type) {
    const { theme } = useTheme();
    const cadastroLabelDefaultStyle = [
        ThemeColor('#210124', '#FFF2F6', theme),
        { marginLeft: 4, fontSize: 15 }
    ]
    if (type == 'label') return cadastroLabelDefaultStyle;
    const cadastroInputsDefaultStyle = [
        [
            ThemeColor('#750D37', '#750D37', theme),
            ThemeBackgroundColor('#DBF9F0', '#F2C572', theme),
            { paddingTop: 10, paddingBottom: 11, paddingHorizontal: 13, fontSize: 18 }
        ],
        ThemeValue('#C490D1', '#AA7BAD', theme),
        ThemeValue('#F7F9F7', '#7676CE', theme),
        ThemeValue('#B3DEC1', '#F29188', theme),
    ]
    if (type == 'input') return cadastroInputsDefaultStyle;
}

export function LoginDefaultStyle(type) {
    const { theme } = useTheme();
    const loginLabelDefaultStyle = ThemeColor('#210124', '#F7F9F7', theme)
    if (type == 'label') return loginLabelDefaultStyle;
    const loginInputsDefaultStyle = [
        [
            ThemeBackgroundColor('#CEEAFF', '#7676CE', theme),
            ThemeColor('#551159', '#F7F9F7', theme)
        ],
        ThemeValue('#C490D1', '#C59FC9', theme),
        ThemeValue('#F7F9F7', '#001643', theme),
        ThemeValue('#FF89B1', '#C59FC9', theme)
    ]
    if (type == 'input') return loginInputsDefaultStyle;
}

export function HomeDefaultStyle(type) {
    const { theme } = useTheme();
    const homeLabelDefaultStyle = ThemeColor('#210124', '#F7F9F7', theme)
    if (type == 'label') return homeLabelDefaultStyle;
    const homeInputsDefaultStyle = [
        [
            ThemeColor('#750D37', '#750D37', theme),
            ThemeBackgroundColor('#DBF9F0', '#ACACDE', theme),
        ],
        ThemeValue('#C490D1', '#FFF2F6', theme),
        ThemeValue('#FFECDB', '#0B0B35', theme),
        ThemeValue('#C490D1', '#F7F9F7', theme)
    ]
    if (type == 'input') return homeInputsDefaultStyle;
}

export function AccountDefaultStyle(type) {
    const { theme } = useTheme();
    const accountPai = ThemeBackgroundColor('#ABDAFC', '#0B0B35', theme)
    if (type == 'pai') return accountPai;
    const accountConfig = ThemeBackgroundColor('#E5FCFF', '#0B0B35', theme)
    if (type == 'config') return accountConfig;
    const accountInputsDefaultStyle = [
        [
            ThemeColor('#750D37', '#750D37', theme),
            ThemeBackgroundColor('#F7F9F7', '#ACACDE', theme),
        ],
        ThemeValue('#CFBAE1', '#FFF2F6', theme),
        ThemeValue('#ABDAFC', '#0B0B35', theme),
        ThemeValue('#ACACDE', '#F7F9F7', theme)
    ]
    if (type == 'input') return accountInputsDefaultStyle;
    const perfilCores = [
        ThemeValue('#7676CE', '#', theme),
        ThemeValue('#ACACDE', '#', theme)
    ]
    if (type == 'perfil') return perfilCores;
    const modalDefaultStyle = [
        [
            ThemeColor('#210124', '#750D37', theme),
            ThemeBackgroundColor('#CEEAFF', '#ACACDE', theme),
        ],
        ThemeValue('#CFBAE1', '#FFF2F6', theme),
        ThemeValue('#F7F9F7', '#0B0B35', theme),
        ThemeValue('#ACACDE', '#F7F9F7', theme),
    ]
    if (type == 'modal') return modalDefaultStyle;
}

export function CartDefaultStyle(type) {
    const { theme } = useTheme();
    const loginLabelDefaultStyle = ThemeColor('#210124', '#F7F9F7', theme)
    if (type == 'label') return loginLabelDefaultStyle;
    const loginInputsDefaultStyle = [
        [
            ThemeBackgroundColor('#CEEAFF', '#7676CE', theme),
            ThemeColor('#551159', '#F7F9F7', theme)
        ],
        ThemeValue('#C490D1', '#C59FC9', theme),
        ThemeValue('#F7F9F7', '#001643', theme),
        ThemeValue('#FF89B1', '#C59FC9', theme)
    ]
    if (type == 'input') return loginInputsDefaultStyle;
}