import Link from 'next/link'

const FAQ = () => {
  return (
    <>
      <section className='bg-transparent font-sans'>
        <div className='py-4 px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-6'>
          <div className='max-w-screen-md'>
            <h2 className='mb-4 text-4xl md:text-5xl tracking-tight font-extrabold text-white'>
              Frequently Asked Questions
            </h2>
            {/* <p className='mb-2 font-light sm:text-xl text-gray-400'>
              Membership in the club offers a formal avenue to build a strong
              network, collaborate effectively, and enhance competitiveness.
              Joining the Coding Club provides valuable exposure and
              opportunities to showcase skills and talents. Expand your
              professional connections, and gain visibility by becoming a
              member.
              <br />
              <br />
              Prior to submitting your membership application, it is imperative
              to fulfill certain prerequisites. Begin by carefully selecting the
              wing of the club you wish to join. The regulations governing each
              wing are delineated as follows:
            </p> */}
            <div>
              <ol className='space-y-4 text-white text-2xl sm:text-3xl list-inside list-decimal font-sans font-bold pt-4 tracking-tight'>
                {/* <li>General</li> */}

                <ul className='pl-5 mt-1 space-y-1 list-disc list-inside font-light text-base sm:text-xl text-gray-300 tracking-normal'>
                  <li className='font-semibold'>
                    What is the purpose of joining the Coding Club?
                  </li>
                  <p>
                    Membership in the club offers a formal avenue to 
                    build a strong network, collaborate effectively, 
                    and enhance competitiveness. Joining provides valuable 
                    exposure opportunities to showcase skills and talents, 
                    expand your professional connections, foster 
                    collaboration, and gain visibility.
                  </p>
                  <br/>

                  <li className='font-semibold'>
                    What benefits do I get from joining the club?
                  </li>
                  <p>
                    Members get a chance to actively participate in
                    the events organized by the club, as well as get 
                    to contribute to technical events of our institute 
                    such as PARSEC. Club members selected via extensive 
                    procedures and who have notable contributions in club 
                    projects will be given preference in the selections 
                    for external events such as Inter IIT Tech Meet. 
                    Finally, it all comes down to personal and career 
                    advancements by being part of an active organization 
                    of tech enthusiasts.
                  </p>
                  <br/>

                  <li className='font-semibold'>
                    What are the prerequisites for applying for club membership?
                  </li>
                  <p>
                    Before submitting your membership application, 
                    it's important to fulfill certain prerequisites. 
                    This includes selecting the wing of the club you wish 
                    to join and meeting specific criteria outlined for each wing.
                  </p>
                  <br/>

                  <li className='font-semibold'>
                    I am new to programming, which wing is suitable for me?
                  </li>
                  <p>
                    We encourage you to explore and find out what interests you. 
                    However if you are just starting out, we suggest you join the 
                    Competitive Programming or Free and Open Source Software wing as 
                    they are very beginner friendly.
                  </p>
                  <br/>

                  <li className='font-semibold'>
                    Can non-members contribute to club projects?
                  </li>
                  <p>
                    Absolutely! everyone is allowed to contribute to the club projects. 
                    The core team however, remains responsible for active development 
                    during the lifetime of the project.
                  </p>
                  <br/>

                  <li className='font-semibold'>
                    Can I work on two or more projects at once?
                  </li>
                  <p>
                    Currently, we <span className='font-semibold'> strongly </span> 
                    recommend members to stick to one project 
                    at a time if they are active developers. However, contributions are
                    always welcome if the member has the capability to finish their 
                    main project on time. This recommendation also applies across 
                    clubs in case the individual is a member of other clubs.
                  </p>
                  <br/>

                  <li className='font-semibold'>
                    Is there a platform where I can voice my concerns and suggestions?
                  </li>
                  <p>
                    We have a Coding Club community on Whatsapp. You can participate actively
                    in discussions related to all the topics in the community and also voice
                    your suggestions. 
                    Feedback/Suggestions can also be sent via the 
                    <Link href="https://docs.google.com/forms/d/1pIbNpp2Xv0mMzThAPMAAUSiNGOYgyb5caOG1uF2L-ZA/" className="text-blue-500"> Anonymous Feedback Form </Link>
                    or sent directly to the club admins.
                  </p>
                  <br/>
                </ul>
              </ol>
            </div>
            <div className='flex flex-col mt-8 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4'>
              <Link
                href='/members/wanna_join'
                target='_top'
                className='inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center border rounded-lg focus:ring-4 text-white border-gray-600 hover:bg-gray-700 focus:ring-gray-600'
              >
                <svg
                  className='mr-2 -ml-1 w-5 h-5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='2 2 17 21'
                >
                  <path d='M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2Zm-3 15H4.828a1 1 0 0 1 0-2h6.238a1 1 0 0 1 0 2Zm0-4H4.828a1 1 0 0 1 0-2h6.238a1 1 0 1 1 0 2Z' />
                  <path d='M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z' />
                </svg>
                Enrollment Policy 
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FAQ
