import Link from 'next/link'

const Header = () => {
  return (
    <>
      <section className='bg-transparent font-sans'>
        <div className='py-4 px-4 mx-auto max-w-screen-xl sm:py-8 md:px-0'>
          <div className='max-w-screen-md'>
            <h2 className='mb-4 text-3xl md:text-5xl tracking-tight font-extrabold text-white'>
              Unlock Your Potential: Join the Coding Club and Shape Your Digital
              Future!
            </h2>
            <p className='mb-1 font-light sm:text-xl text-gray-400'>
              Empower yourself at our Coding Club. Join now to shape your
              digital destiny and unleash your true potential in a world driven
              by code.
            </p>
            <div className='flex flex-col mt-4 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4'>
              <Link
                href='/members/wanna_join'
                target='_top'
                className='inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center border rounded-lg focus:ring-4 text-white border-gray-600 hover:bg-gray-700 focus:ring-gray-600'
              >
                Enrollment Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Header
