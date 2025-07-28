
export default function ArtDecoCorner({classes, width, height, color = "#FFC107"}) {

    return (
        <svg data-testid="art-deco-corner" width={width} height={height} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes} >
            {/* Carré externe */}
            <rect x="0" y="0" width="80" height="80" fill="none"/>
            {/* Zigzag épais en bas à droite */}
            <polyline points="80,60 60,80 80,80" fill="none" stroke={color} strokeWidth="3"/>
            {/* Sunburst (rayons géométriques décoratifs) */}
            <line x1="80" y1="80" x2="80" y2="65" stroke={color} strokeWidth="2"/>
            <line x1="80" y1="80" x2="69" y2="80" stroke={color} strokeWidth="2"/>
            <line x1="80" y1="80" x2="70" y2="70" stroke={color} strokeWidth="1.5"/>
            <line x1="80" y1="80" x2="75" y2="62" stroke={color} strokeWidth="1"/>
            {/* Double encadrement Art déco */}
            <polyline points="49,80 80,49" fill="none" stroke={color} strokeWidth="1"/>
            <polyline points="56,80 80,56" fill="none" stroke={color} strokeWidth="1"/>
        </svg>
    )
}