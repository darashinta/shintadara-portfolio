const Contact = () => {
  return (
    <section className="px-4 py-10 sm:py-16 md:py-20 sm:px-8 md:px-16 lg:px-36">
      <div className="inline-block p-4 transition-all duration-500 border-2 border-dashed rounded-lg sm:p-6 md:p-8 animate-softBounce hover:animate-none hover:translate-y-0 border-darkNavyBlue">
        <div className="p-4 border-2 rounded-lg sm:p-6 md:p-8 border-darkNavyBlue">
          <h2 className="py-2 text-xl font-semibold sm:text-2xl md:text-3xl text-darkNavyBlue">
            Contact
          </h2>
          <div>
            <p className="text-sm sm:text-base md:text-lg">
              aku tertarik untuk berteman dengan kalian semua, Let&apos;s
              connect.
            </p>
            <div className="mt-4">
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto: https://alfadhilibnufikri.com"
                    target="_blank"
                    className="flex flex-row items-center hover:underline "
                  >
                    <img
                      className="w-4 h-4 mr-2"
                      src="https://img.icons8.com/?size=100&id=53388&format=png&color=000000"
                      alt="Email Icon"
                    />
                    shintadara42@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
