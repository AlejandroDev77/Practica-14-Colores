import { useState, useEffect } from "react";
import "./../styles/GeometricColor.scss";

const RandomGeometricColor: React.FC = () => {

    const [hue, setHue] = useState<number>(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
            const randomHue = Math.floor(Math.random() * 360);
            setHue(randomHue);
        }, 2000);

        return () => clearInterval(intervalo);
    }, []);

 
    const randomTheme = {
        color1: `hsl(${hue}, 75%, 55%)`,
        color2: `hsl(${(hue + 90) % 360}, 75%, 55%)`,
        color3: `hsl(${(hue + 180) % 360}, 75%, 55%)`,
        color4: `hsl(${(hue + 270) % 360}, 75%, 55%)`,
    };

    return (
        <section className="geometric-container">
            <h3>colores aleatorios</h3>
            <p></p>
            
            <div className="unified-shape">
                <div 
                    className="part" 
                    style={{ backgroundColor: randomTheme.color1 }}
                ></div>
                <div 
                    className="part" 
                    style={{ backgroundColor: randomTheme.color2 }}
                ></div>
                <div 
                    className="part" 
                    style={{ backgroundColor: randomTheme.color3 }}
                ></div>
                <div 
                    className="part" 
                    style={{ backgroundColor: randomTheme.color4 }}
                ></div>
            </div>

            
        </section>
    );
};

export default RandomGeometricColor;
