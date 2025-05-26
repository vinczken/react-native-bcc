

export function LightDarkModeColor(colorL, colorD, lightMode){
    return (
        lightMode ?
        { color: colorL } :
        { color: colorD }
    )
}

export function LightDarkModeBackgroundColor(colorL, colorD, lightMode) {
    return (
        lightMode ?
            { backgroundColor: colorL } :
            { backgroundColor: colorD }
    )
}