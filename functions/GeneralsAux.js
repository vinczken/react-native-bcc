

export function ThemeColor(colorL, colorD, theme){
    return (
        theme == 'light' ?
        { color: colorL } :
        { color: colorD }
    )
}

export function ThemeBackgroundColor(colorL, colorD, theme) {
    return (
        theme == 'light' ?
            { backgroundColor: colorL } :
            { backgroundColor: colorD }
    )
}

export function ThemeValue(colorL, colorD, theme) {
    return (
        theme == 'light' ? 
            colorL :
            colorD
    )
}