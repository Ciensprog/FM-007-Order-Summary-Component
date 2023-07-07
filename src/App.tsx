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
        </div>
      </main>

      <Attribution />
    </>
  )
}
