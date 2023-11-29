import { ScriptProps } from "next/script";

interface Props extends ScriptProps {};

const Banner = (props: Props) => {
    const { children } = props; 

    return (
        <div className="banner">
            <img src="/banner.svg" alt="" className='banner__image'/>
            <div className="banner__content">
                {children}
            </div>
        </div>
    )
}

export default Banner;