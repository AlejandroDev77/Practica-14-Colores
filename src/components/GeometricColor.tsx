import { useState } from "react";
import "../styles/GeometricColor.scss";

const GeometricColor: React.FC = () => {
    const [hue, setHue] = useState<number>(90);

 
    const partescolores = {
        arriba: `hsl(${hue}, 70%, 50%)`,
        abajo: `hsl(${(hue + 90) % 360}, 70%, 50%)`,
        izquierdo: `hsl(${(hue + 180) % 360}, 70%, 50%)`,
        derecho: `hsl(${(hue + 270) % 360}, 70%, 50%)`,
    };

    return (
        <section className="geometric-container">
            <h3>color</h3>
            
            <input 
                type="range" 
                min="0" 
                max="360" 
                value={hue} 
                onChange={(e) => setHue(Number(e.target.value))} 
            />

            <div className="unified-shape">
                <div 
                    className="part top-left" 
                    style={{ backgroundColor: partescolores.arriba }}
                ></div>
                <div 
                    className="part top-right" 
                    style={{ backgroundColor: partescolores.abajo }}
                ></div>
                <div 
                    className="part bottom-left" 
                    style={{ backgroundColor: partescolores.izquierdo }}
                ></div>
                <div 
                    className="part bottom-right" 
                    style={{ backgroundColor: partescolores.derecho }}
                ></div>
            </div>
        </section>
    );
};

export default GeometricColor;
