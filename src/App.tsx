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
          <section className="pb-12 pt-11 px-12">
            <h1 className="font-black text-[1.75rem] text-center">
              Order Summary
            </h1>
            <p className="font-medium leading-[1.625rem] max-w-[22.125rem] mt-4 mx-auto text-center text-grey-light">
              You can now listen to millions of songs, audiobooks, and podcasts
              on any device anywhere you like!
            </p>
            <div className="bg-grey-very-light flex gap-5 items-center mt-5 px-6 py-[1.5625rem] rounded-[0.625rem]">
              <div className="h-12 w-12">
                <IconMusic />
              </div>
              <div className="">
                <h4 className="font-black">Annual Plan</h4>
                <p className="font-medium text-grey-light">$59.99/year</p>
              </div>
              <div className="ml-auto">
                <a
                  href="/#"
                  className="font-bold leading-4 text-blue-normal text-sm underline"
                  onClick={(event) => event.preventDefault()}
                >
                  Change
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Attribution />
    </>
  )
}
