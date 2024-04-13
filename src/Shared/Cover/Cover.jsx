import { Parallax } from 'react-parallax';

const Cover = ({ title, image, subTitle }) => {
    return (
        <>
            <Parallax className='mb-20'
                blur={{ min: -50, max: 50 }}
                bgImage={image}
                bgImageAlt="Our Menu"
                strength={-200}
            >
                <div className="hero h-[600px]">
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                            <p className="mb-5">{subTitle}</p>

                        </div>
                    </div>
                </div>
            </Parallax>

        </>
    );
};

export default Cover;