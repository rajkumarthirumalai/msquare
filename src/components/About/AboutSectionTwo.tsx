import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28" id="whyMsquareRef">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/Endpoint-bro.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/Endpoint-bro.svg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[670px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  How We Work:
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Experience seamless collaboration with MSquare. From initial requirement understanding to final delivery, we prioritize open communication and transparency. Your involvement throughout the process ensures that our services align perfectly with your goals.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  What Sets Us Apart:
                </h3>

                <ul className="space-y-4">
                  <li className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    <b>Service Excellence</b>: We uphold the highest standards of service excellence, ensuring that every interaction with MSquare exceeds your expectations.
                  </li>
                  <li className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    <b>Client-Centric Focus</b>: Your satisfaction is our priority. We listen closely to your needs, tailoring our services to deliver personalized solutions.
                  </li>
                  <li className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    <b>Innovative Solutions</b>: In a dynamic industry, we thrive on innovation. Our adaptive strategies and forward-thinking approaches enable us to provide cutting-edge solutions.
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
