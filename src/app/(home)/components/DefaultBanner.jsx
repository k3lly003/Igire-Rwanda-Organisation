const DefaultBanner = ({title, backgroundImage}) => {

    const jssStyles = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 0.3s ease-in-out',
        willChange: 'background-image',
    }

    return (
        <div className='flex flex-col justify-center items-center pt-60 md:pb-10 font-ibm' style={jssStyles}>
            <div className='flex justify-start w-[25rem] md:justify-center md:w-[75rem] xl:justify-start xl:max-w-screen-2xl'>
                 <h1 className="text-4xl sm:text-3xl md:text-5xl font-extrabold md:w-2/3 text-white">{title}</h1>
            </div>
        </div>
    )
}

export default DefaultBanner