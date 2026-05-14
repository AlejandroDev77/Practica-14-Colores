import { useState } from "react";
const ContrastChecker : React.FC = () => {

    const [bgcolor, setBgColor] = useState<string>("#646cff");

    return (
        <section className="contrast-tool">

            <h3> Prueba contraste</h3>

            <input
                type="color"
                value={bgcolor}
                onChange={(e) => setBgColor(e.target.value)}
            />

            <div className="preview-box" style={{backgroundColor:bgcolor}}>

                <p style={{color: '000000'}} >
                    texto negro
                </p>

                <p style={{color: 'ffffff'}} >
                    texto blanco
                </p>


            </div>



        </section>

    );




}

export default ContrastChecker;
