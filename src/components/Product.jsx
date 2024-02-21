
function Product() {
  return (
    <section >
      <div className="flex justify-around lg:justify-between py-8 ">
        <h1 className="font-bold text-red-600 text-2xl">Popular Categories</h1>
        <div className="flex">
          <a className="font-bold text-red-600 hover:text-red-500 text-lg hover:text-xl" href="">View all</a>
          <svg xmlns="http://www.w3.org/2000/svg" className="fill-red-600 w-8 h-7 " height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" /></svg>
        </div>
      </div>

      <div className="grid grid-cols-2 justify-between md:grid-cols-2 lg:grid-cols-4 px-6 pb-20 gap-4 ">

        <div data-aos="zoom-in-up" data-aos-duration="1000" className="rounded-xl overflow-hidden glass">
          <figure><img src="/mask/s1.webp" alt="car!" /></figure>
          <div className="card-body items-center">
            <h2 className="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-center">
              <a href=""><button className="btn btn-[#1f5780]">Buy it<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              </button>
              </a>
            </div>
          </div>
        </div>



        <div data-aos="zoom-in-up" data-aos-duration="1000" className="rounded-xl overflow-hidden glass">
          <figure><img src="/mask/s7.webp" alt="car!" /></figure>
          <div className="card-body items-center">
            <h2 className="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-center">
              <a href=""><button className="btn btn-accent">Buy it<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              </button>
              </a>
            </div>
          </div>
        </div>



        <div data-aos="zoom-in-up" data-aos-duration="1000" className="rounded-xl overflow-hidden glass">
          <figure><img src="/mask/s1.webp" alt="car!" /></figure>
          <div className="card-body items-center">
            <h2 className="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-center">
              <a href=""><button className="btn btn-accent">Buy it<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              </button>
              </a>
            </div>
          </div>
        </div>

        <div data-aos="zoom-in-up" data-aos-duration="1000" className="rounded-xl overflow-hidden glass">
          <figure><img src="/mask/s7.webp" alt="car!" /></figure>
          <div className="card-body items-center">
            <h2 className="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-center">
              <a href=""><button className="btn btn-accent">Buy it<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              </button>
              </a>
            </div>
          </div>
        </div>

      </div>


    </section>




  );
}

export default Product;