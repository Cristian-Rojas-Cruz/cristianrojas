import { ScriptProps } from "next/script";

interface Props extends ScriptProps {};

const Card = (props: Props) => {
    const { children } = props; 

    return (
        <div className="card">
        </div>
    )
}

export default Card;