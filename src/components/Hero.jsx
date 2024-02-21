

function Hero() {
    return (
        <section>
            <div className="hero min-h-screen"  style={{ backgroundImage: 'url(/images/hero.jpg)' }}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-black">Welcome Our Shop</h1>
                        <marquee className="mb-5 text-3xl">All premium Product Here U can Purchase now </marquee>
                        
                        <a href="/product"><button className="btn glass text-cyan-400">Get Started</button></a>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Hero;