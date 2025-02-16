import Link from 'next/link'
import React from 'react'

const OurLinks = () => {
  return (
    <>
      <section className='bg-transparent font-sans'>
        <div className='py-4 px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-6'>
          <div className='max-w-screen-md'>
            <h2 className='mb-4 text-4xl md:text-5xl tracking-tight font-extrabold text-white'>
              Useful Links
            </h2>
            <p className='mb-2 font-light sm:text-xl text-gray-400'>
            This is a collection of links for the Coding Club at IIT Dharwad. 
            Here, you can find essential resources and information to stay connected and engaged with the club:
            </p>
            <div>
              <ol className='space-y-4 text-white text-2xl sm:text-3xl list-inside list-decimal font-sans font-bold pt-4 tracking-tight'>
                <li>Socials</li>

                <ul className='pl-5 mt-1 space-y-1 list-disc list-inside font-light text-base sm:text-xl text-gray-300 tracking-normal'>
                <li>
                  <span className='font-semibold'>Website:</span> <Link className="text-blue-500" href="https://codingclub.iitdh.ac.in">https://codingclub.iitdh.ac.in</Link>
                </li>
                <li>
                  <span className='font-semibold'>Instagram:</span> <Link className="text-blue-500" href="https://instagram.com/coding_clubiitdh">https://instagram.com/coding_clubiitdh</Link>
                </li>
                <li>
                  <span className='font-semibold'>LinkedIn:</span> <Link className="text-blue-500" href="https://www.linkedin.com/company/coding-club-iit-dharwad">https://www.linkedin.com/company/coding-club-iit-dharwad</Link>
                </li>
                <li>
                  <span className='font-semibold'>Github:</span> <Link className="text-blue-500" href="https://github.com/codingclub-iitdh">https://github.com/codingclub-iitdh</Link>
                </li>
                <li>
                  <span className='font-semibold'>Open Student Society 2019:</span> <Link className="text-blue-500" href="https://oss2019.github.io/">https://oss2019.github.io/</Link>
                </li>
                <li>
                  <span className='font-semibold'>OSS 2019 Github:</span> <Link className="text-blue-500" href="https://github.com/oss2019">https://github.com/oss2019</Link>
                </li>
                </ul>

                <li>Members and Groups</li>

                <ul className='pl-5 mt-1 space-y-1 list-disc list-inside font-light text-base sm:text-xl text-gray-300 tracking-normal'>
                <li>
                  <span className='font-semibold'>Whatsapp Community:</span> <Link className="text-blue-500" href="https://tinyurl.com/cciitdh-community-2024">https://tinyurl.com/cciitdh-community-2024</Link>
                </li>
                {/* <li>
                  <span className='font-semibold'>Members:</span> <Link className="text-blue-500" href="https://docs.google.com/spreadsheets/d/18o9yN70ogyTdNevbLwCQMkqZEG-2OShKkjyVyA_B2Yg/">https://docs.google.com/spreadsheets/d/18o9yN70ogyTdNevbLwCQMkqZEG-2OShKkjyVyA_B2Yg/</Link>
                </li> */}
                <li>
                  <span className='font-semibold'>Members:</span> <Link className="text-blue-500" href="https://codingclub.iitdh.ac.in/members">https://codingclub.iitdh.ac.in/members</Link>
                </li>
                <li>
                  <span className='font-semibold'>Codeforces Group:</span> <Link className="text-blue-500" href="https://codeforces.com/group/VxUi69EfJo">https://codeforces.com/group/VxUi69EfJo</Link>
                </li>
                </ul>

                <li>Events and Discussions</li>

                <ul className='pl-5 mt-1 space-y-1 list-disc list-inside font-light text-base sm:text-xl text-gray-300 tracking-normal'>
                  <li>
                    <span className='font-semibold'>Internal Events Info:</span> <Link className= "text-blue-500" href="https://docs.google.com/document/d/1HESi-4I2TBYckg53PNHLfmKu1l1_aSy-10JysNebi50/">Google Docs</Link>
                  </li>
                  <li>
                    <span className='font-semibold'>External Events Info:</span> <Link className= "text-blue-500" href="https://docs.google.com/document/d/10ClU86OdUtAzjsUjd-nDtGjr8IGtQjwDD-N0rSw95Q8/">Google Docs</Link>
                  </li>
                  <li>
                    <span className='font-semibold'>Weekly Discussions:</span> <Link className="text-blue-500" href="https://tinyurl.com/cciitdh-disc-2024">https://tinyurl.com/cciitdh-disc-2024</Link>
                  </li>
                </ul>

                <li>Miscellaneous</li>

                <ul className='pl-5 mt-1 space-y-1 list-disc list-inside font-light text-base sm:text-xl text-gray-300 tracking-normal'>
                <li>
                  <span className='font-semibold'>FOSS Repositories:</span> <Link className="text-blue-500" href="https://docs.google.com/document/d/1TX5wqq5I9rQhkTblcN4ib6dNqYdZjt2vdsXoaGg2nEo/">Google Docs</Link>
                </li>
                <li>
                  <span className='font-semibold'>Anonymous Feedback Form:</span> <Link className="text-blue-500" href="https://tinyurl.com/cciitdh-feedback">https://tinyurl.com/cciitdh-feedback</Link>
                </li>
                <li>
                  <span className='font-semibold'>Open For All Tasks:</span> <Link className="text-blue-500" href="https://github.com/users/codingclub-iitdh/projects/1">Github</Link>
                </li>
                </ul>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OurLinks
