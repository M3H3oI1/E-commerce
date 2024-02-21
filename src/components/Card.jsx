function Card() {
  return (

    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-6 pb-20  mt-10 justify-between  gap-4">

      <div data-aos="zoom-in-right" data-aos-duration="1000" className="card bg-base-100 hover:bg-slate-100   border border-green-600 hover:border-blue-800 shadow-lg shadow-zinc-600 hover:shadow-pink-200">
        <div className="flex flex-col p-5 mx-9">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto fill-orange-600 hover:fill-teal-700" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" /></svg>
          <div className="mx-auto">
            <p className="font-bold text-xl text-center">Free Shipping</p>
            <p className="text-lg">Free shipping on all your order</p>
          </div>
        </div>
      </div>


      <div data-aos="zoom-in-up" data-aos-duration="1000" className="card bg-base-100 hover:bg-slate-100  border border-green-600 hover:border-blue-800 shadow-lg  shadow-zinc-600 hover:shadow-pink-200">
        <div className="flex flex-col p-5 mx-9">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto  fill-orange-600 hover:fill-teal-700" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24" /></g><g><g><path d="M21,12.22C21,6.73,16.74,3,12,3c-4.69,0-9,3.65-9,9.28C2.4,12.62,2,13.26,2,14v2c0,1.1,0.9,2,2,2h1v-6.1 c0-3.87,3.13-7,7-7s7,3.13,7,7V19h-8v2h8c1.1,0,2-0.9,2-2v-1.22c0.59-0.31,1-0.92,1-1.64v-2.3C22,13.14,21.59,12.53,21,12.22z" /><circle cx="9" cy="13" r="1" /><circle cx="15" cy="13" r="1" /><path d="M18,11.03C17.52,8.18,15.04,6,12.05,6c-3.03,0-6.29,2.51-6.03,6.45c2.47-1.01,4.33-3.21,4.86-5.89 C12.19,9.19,14.88,11,18,11.03z" /></g></g></svg>
          <div className="mx-auto" >
            <p className="font-bold text-xl">Customer Support 24/7</p>
            <p className="text-lg">Instant access to Support</p>
          </div>
        </div>
      </div>


      <div data-aos="zoom-in-down" data-aos-duration="1000" className="card bg-base-100 hover:bg-slate-100  border border-green-600 hover:border-blue-800 shadow-lg  shadow-zinc-600 hover:shadow-pink-200">
        <div className="flex flex-col p-5 mx-9">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto  fill-orange-600 hover:fill-teal-700" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm0 10c-2.76 0-5-2.24-5-5h2c0 1.66 1.34 3 3 3s3-1.34 3-3h2c0 2.76-2.24 5-5 5z" /></svg>
          <div className="mx-auto">
            <p className="font-bold text-xl">100% Secure Payment</p>
            <p className="text-lg">We ensure your money is save</p>
          </div>
        </div>
      </div>


      <div data-aos="zoom-in-left" data-aos-duration="1000" className="card bg-base-100 hover:bg-slate-100  border border-green-600 hover:border-blue-800 shadow-lg  shadow-zinc-600 hover:shadow-pink-200">
        <div className="flex flex-col p-5 mx-9">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto  fill-orange-600 hover:fill-teal-700" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z" /></svg>
          <div className="mx-auto">
            <p className="font-bold text-xl">Money-Back Guarantee</p>
            <p className="text-lg"> Money-Back Guarantee</p>
          </div>
        </div>
      </div>

    </section>





  );
}

export default Card;