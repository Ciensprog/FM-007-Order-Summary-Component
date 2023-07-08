import { IconMusic } from '@/assets/icons/music'

import { Attribution } from '@/components/Attribution'

/*
|-------------------------------------------------------------------------------
| Component
|-------------------------------------------------------------------------------
*/

export function App() {
  return (
    <>
      <main className="my-10 z-10">
        <div className="bg-white max-w-[28.125rem] rounded-[1.25rem] w-full">
          <header className="overflow-hidden rounded-tl-[1.25rem] rounded-tr-[1.25rem]">
            <picture>
              <img src="banner.jpg" alt="Order summary banner" />
            </picture>
          </header>
          <section className="p-8 sm:pb-12 sm:pt-11 sm:px-12">
            <h1 className="font-black text-[1.375rem] text-center sm:text-[1.75rem]">
              Order Summary
            </h1>
            <p className="font-medium leading-[1.625rem] max-w-[16.5rem] mt-4 mx-auto text-[0.9375rem] text-center text-grey-light sm:text-base sm:leading-[1.625rem] sm:max-w-[22.125rem]">
              You can now listen to millions of songs, audiobooks, and podcasts
              on any device anywhere you like!
            </p>
            <form onSubmit={(event) => event.preventDefault()}>
              <div className="bg-grey-very-light flex gap-5 items-center mb-6 mt-6 px-4 py-[1.0625rem] rounded-[0.625rem] sm:mb-8 sm:mt-5 sm:px-6 sm:py-[1.5625rem]">
                <div className="h-12 w-12">
                  <IconMusic />
                </div>
                <div className="text-sm sm:leading-4 sm:text-base">
                  <p className="font-black">Annual Plan</p>
                  <p className="font-medium mt-0.5 text-grey-light sm:mt-2.5">
                    $59.99/year
                  </p>
                </div>
                <div className="ml-auto">
                  <a
                    href="/#"
                    className="font-bold leading-4 text-blue-normal text-[0.8125rem] transition-colors underline hover:text-blue-light sm:text-sm"
                    onClick={(event) => event.preventDefault()}
                  >
                    Change
                  </a>
                </div>
              </div>
              <button
                type="submit"
                className="bg-blue-normal font-black p-[0.9375rem] rounded-[0.625rem] shadow-[0_20px_20px_0_rgba(56_42_225_/_0.19)] text-[0.9375rem] text-white transition w-full hover:bg-blue-light"
              >
                Proceed to Payment
              </button>
            </form>
            <div className="mt-6 text-center sm:mt-8">
              <a
                href="/#"
                className="font-black text-[0.9375rem] text-grey-light transition-colors hover:text-grey-dark"
                onClick={(event) => event.preventDefault()}
              >
                Cancel Order
              </a>
            </div>
          </section>
        </div>
      </main>

      <Attribution />
    </>
  )
}
