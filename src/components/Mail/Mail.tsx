/*
We're constantly improving the code you see.
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import "./style.css";

interface Props {
    className: any;
    shape: string;
}

export const Mail = ({
                         className,
                         shape = "https://cdn.animaapp.com/projects/652df3c13a37cc0469b5faaa/releases/654723f27fdc3538947dcbb1/img/shape-1.svg",
                     }: Props) => {
    return (
        <div className={`mail ${className}`}>
            <img className="shape" alt="Shape" src={shape} />
        </div>
    );
};
