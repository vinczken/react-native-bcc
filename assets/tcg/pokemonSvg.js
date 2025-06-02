import Svg, { Defs, G, Image, Path, Pattern, Use } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgPokemonSvg = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={213}
        height={218}
        fill="none"
        {...props}
    >
        <G filter="url(#pokemon-svg_svg__a)">
            <Path
                fill="url(#pokemon-svg_svg__b)"
                d="M7 7h204v204H7z"
                shapeRendering="crispEdges"
            />
        </G>
        <Defs>
            <Pattern
                id="pokemon-svg_svg__b"
                width={1}
                height={1}
                patternContentUnits="objectBoundingBox"
            >
                <Use xlinkHref="#pokemon-svg_svg__c" transform="scale(.01563)" />
            </Pattern>
            <Image
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEXNzaz///9KiyD/vbT/e3vVQVqD7sVazZSD5lpqtCAglFoQEBAQUiDFczmLWjl7MSlS6kOuAAAAAXRSTlMAQObYZgAAAkxJREFUSIntkrFr21AQxoVHxxSyeCgdgqHgFG3R2M3K2BQCngINXWRItHTRg2dN2UwzeeqlWjrUgvMb0qVO9DSkarEi+W39BwqmY02Hdi09OZOfJS+lW05ouh/ffd/dM4z7+j/14NtiMzD/8X0zMV8sXmwEFgf2n5+bLFhz+/kmYG7NLbsKqO3UzL1nex37uAJon5vDzweWZXcrJHYhG3752ulUAWYGEDxVlrXfPSqfMNiFIAs6dhWQQTDMwLTtbvewVTNrpg40FGSwq9T+4eP2eTtov14DIAmGqmV2b4PbYBAM3q50k53EBGglLQIyuA0ggVXg6iw7S0w1k1KqAIoPblaA6zcZqtRhjCEqGQOA0gB4Qt0TxRhH5jkzUrjUHF5Me56rmJ9j6MhxBlID1IVyHDdlPmLYj8f6BGMLYOQ4hQeO2I+uoXWpARLC0cghEykNIQFtQjFDuCcE+N6UgEzqa6QSzYnTS9npSwJUSd8It4+8HuPvtxHxpqRf720fE9D/XQC6gaUJ59WxQ8CvZhXg3cWkXQsUZR5SjwSqAWwoxTjLGQqlcBwbepDRJH83KwTkB8wxmkpXyxAWZ6LHkNO5UYgQ/dWoI5o9i7EoRb9gLFyVqDMukBRkrJDOlbK1qCEXI75U8KiZchzrIfnYTSkg0rvDPMQyoJf6dwDPS87R4Pix52MuPDddAvq2twgga5HgbppH6xMMI8IJRY1yTguRZefaknWRT2PlMT6OZmUvyqg/akrjk/9QnZZ1C41LWQg1196rVqXq9/Xv9Rcg+1obVcyBbwAAAABJRU5ErkJggg=="
                id="pokemon-svg_svg__c"
                width={64}
                height={64}
                preserveAspectRatio="none"
            />
        </Defs>
    </Svg>
);
export default SvgPokemonSvg;