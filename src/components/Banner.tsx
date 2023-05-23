const Banner: React.FC = () => {

    return (
        <div className="banner">
            <img src="/banner.svg" alt="" className='banner__image'/>
            <div className="banner__content">
                <h1>Cristian Rojas</h1>
                <p>Web Developer, System administrator and DevOps Enthusiast.</p>
            </div>
        </div>
    )
}

export default Banner;