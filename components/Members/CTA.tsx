import Link from 'next/link'

const CTA = () => {
  return (
    <>
      <section className='bg-transparent font-sans'>
        <div className='py-4 px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-6'>
          <div className='max-w-screen-md'>
            <h2 className='mb-4 text-4xl md:text-5xl tracking-tight font-extrabold text-white'>
              Welcome to the Coding Club!
            </h2>
            <p className='mb-2 font-light sm:text-xl text-gray-400'>
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
            </p>
            <div>
              <ol className='space-y-4 text-white text-2xl sm:text-3xl list-inside list-decimal font-sans font-bold pt-4 tracking-tight'>
                <li>Free and Open Source Software</li>

                <ul className='pl-5 mt-1 space-y-1 list-disc list-inside font-light text-base sm:text-xl text-gray-300 tracking-normal'>
                  <p>
                    The FOSS Wing, true to the nature of Free and Open Source
                    Software, is a wing with very little restrictions on
                    participation. The procedure for applying for membership in
                    the Coding Club's FOSS Wing is as follows:
                  </p>
                  <li>
                    <span className='font-semibold'>Open-to-All Tasks: </span>
                    The Coding Club will have certain tasks that are open to
                    all, including individuals who are not yet members of the
                    club. Anyone can participate and contribute to these tasks,
                    showcasing their skills and interest in coding.
                  </li>
                  <li>
                    <span className='font-semibold'>Contribution Proof: </span>
                    Individuals who have contributed to the open-to-all tasks
                    should send proof of their contributions to the FOSS Wing
                    Lead. Proof may include links to code repositories, pull
                    requests, or any other relevant evidence of their
                    contributions.
                  </li>
                  <li>
                    <span className='font-semibold'>
                      Contributions from Experienced Developers:{' '}
                    </span>
                    Individuals with experience in open-source development may
                    submit their contributions to relevant projects. This
                    includes submitting code changes, bug fixes, or other
                    valuable contributions to open-source projects.
                  </li>
                  {/* <li>
                    <span className='font-semibold'>Shortlisting: </span>
                    Submissions by applicants will be reviewed, and shortlisted
                    candidates will be selected for the next stage. Shortlisting
                    criteria may include relevant coding Skills, project
                    experience, and open-source contributions. Exceptional
                    contributors from the open-to-all tasks may receive
                    invitations to join the club.
                  </li> */}
                  <li>
                    <span className='font-semibold'>Selection: </span>
                    Successful candidates, based on their performance in the tasks
                    and overall qualifications, will be offered membership in
                    the Coding Club.
                  </li>
                  <li>
                    The list of open-to-all tasks can be viewed publicly on our Github page: <a href="https://github.com/users/codingclub-iitdh/projects/1" className="text-blue-500">@codingclub-iitdh's Tasks List</a>
                  </li>
                  <br/>
                </ul>

                <li>Competitive Programming</li>

                <ul className='pl-5 mt-1 space-y-1 list-disc list-inside font-light text-base sm:text-xl text-gray-300 tracking-normal'>
                  <p>
                    At present, our membership application process exclusively
                    acknowledges Codeforces and LeetCode as the recognized
                    platforms. The criteria for each platform are outlined as
                    follows:
                  </p>
                  <li>
                    As part of the membership requirements, it is mandatory to
                    participate in a{' '}
                    <span className='font-semibold'>
                      minimum of two contests per month
                    </span>{' '}
                    on either of the designated platforms. Active engagement in
                    contests is essential to demonstrate commitment and growth
                    in your programming skills. Along with this, we also require
                    the members to participate in the{' '}
                    <span className='font-semibold'>
                      in-semester Competitive Coding events
                    </span>{' '}
                    which will be held by the Coding Club.
                  </li>
                  <li>
                    For membership consideration, specific minimum ratings on{' '}
                    <span className='font-semibold'>Codeforces</span> have been
                    established based on the respective batch years. As of the
                    current criteria, the minimum rating requirements are set
                    at:{' '}
                    <ul>
                      <li>
                        <span className='font-semibold'>- 1200</span> for the{' '}
                        <span className='font-semibold'>
                          M.Tech, 2021 and 2022 batches,
                        </span>{' '}
                        and
                      </li>
                      <li>
                        <span className='font-semibold'>- 900</span> for the{' '}
                        <span className='font-semibold'>
                          2023 and 2024 batches.
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li>
                    In accordance to previous rule, a minimum contest rating on{' '}
                    <span className='font-semibold'>LeetCode</span> has been
                    established for each batch year. For{' '}
                    <span className='font-semibold'>
                      M.Tech, 2021 and 2022
                    </span>{' '}
                    batch students, the minimum contest rating requirements is
                    set at{' '}
                    <span className='font-semibold'>
                      1700
                    </span>{' '}
                    while for{' '}
                    <span className='font-semibold'>
                      2023 and 2024            
                    </span>{' '}  
                    batch students, the minimum contest rating requirements is 
                    set at{' '}
                    <span className='font-semibold'>
                      1600.
                    </span>{' '}
                  </li>
                  <li>
                    These ratings serve as indicators of your competency and
                    proficiency in programming, contributing to a competitive
                    and balanced membership composition.
                  </li>
                  <li>
                    It is important to adhere to all the required criteria for
                    maintaining membership within the club. Failure to meet any
                    of the necessary criteria for{' '}
                    <span className='font-semibold'>
                      two consecutive months
                    </span>{' '}
                    will result in the termination of your membership.
                  </li>
                </ul>

                <li>Game Development Wing</li>

                <ul className='pl-5 mt-1 space-y-1 list-disc list-inside font-light text-base sm:text-xl text-gray-300 tracking-normal'>
                  <p>
                    The requirements for joining the Game Development wing are
                    as follows{' '}
                  </p>
                  <li>
                    Participation in online{' '}
                    <span className='font-semibold'>GameJams</span> on platforms
                    such as itch.io, or equivalent events such as{' '}
                    <span className='font-semibold'>
                      in-semester Game Development events
                    </span>{' '}
                    held by the Coding Club. Individuals have to submit their
                    creations along with the source code during the recruitment
                    process.
                  </li>
                  <li>
                    The submissions have to be{' '}
                    <span className='font-semibold'>
                      complete, working games
                    </span>{' '}
                    conforming to the rules set by the particular GameJam or
                    event they were made for. Submissions will be reviewed and
                    shortlisted individuals will be asked to attend a QnA
                    session.
                  </li>
                  <li>
                    The applicant will only be accepted into the club if the
                    <span className='font-semibold'>
                      {' '}
                      submission quality and interview performance
                    </span>{' '}
                    is up to the evaluator's level of expectation.
                  </li>
                  <li>
                    The members of the club are expected to work on Club
                    Projects, or if interested, work on their own games and
                    present them at the end of each semester. Regular updates
                    should be provided to the club heads regarding the status of
                    the game being developed.
                  </li>
                </ul>

                <li>Web Development Wing</li>

                <ul className='pl-5 mt-1 space-y-1 list-disc list-inside font-light text-base sm:text-xl text-gray-300 tracking-normal'>
                  <p>
                    The requirements for joining the Web Development wing are as
                    follows{' '}
                  </p>
                  <li>
                    The applicants, during the recruitment process, are required
                    to submit a{' '}
                    <span className='font-semibold'>
                      web development project/mini-project
                    </span>{' '}
                    based on a problem statement of their choosing.
                  </li>
                  <li>
                    The submissions should be{' '}
                    <span className='font-semibold'>
                      complete and look presentable
                    </span>
                    . If the project was worked on by a team, the efforts of the
                    applicant in the project should be clearly outlined and be
                    verifiable.
                  </li>
                  <li>
                    The technical knowledge requirements and the nature of
                    submissions are divided into three categories to adjust for
                    experience:
                    <ul>
                      <li>
                        {' '}
                        <span className='font-semibold'>- 2024 batch: </span>
                        HTML/CSS/JS{' '}
                      </li>
                      <li>
                        {' '}
                        <span className='font-semibold'>- 2023 batch: </span>
                        ReactJS or equivalent frameworks{' '}
                      </li>
                      <li>
                        {' '}
                        <span className='font-semibold'>
                          - M.Tech, 2022 and 2021 batches:{' '}
                        </span>
                        Knowledge of Full Stack devlopment{' '}
                      </li>
                    </ul>
                  </li>
                  <li>
                    The shortlisting process will depend on the submission
                    quality, and shortlisted individuals will be invited to an
                    interview.
                  </li>
                  <li>
                    Members will be selected based on their project impact and
                    interview performance, along with a variety of other factors
                    such as technical know-how of website and application
                    building.
                  </li>
                  <li>
                    Members are required to participate in{' '}
                    <span className='font-semibold'>in-semester events</span>{' '}
                    that are relevant to Web and App development to remain part
                    of the club. Along with this, they are required to work on a{' '}
                    <span className='font-semibold'>
                      project of their choice
                    </span>{' '}
                    (can be Club Projects), providing regular updates regarding
                    its status to the club heads.
                  </li>
                </ul>
              </ol>
            </div>

            <p className='mt-5 font-light sm:text-xl text-gray-400'>
              Please note that the specific tasks, projects, and club
              membership criteria may be subject to change or elaboration
              by the Wing Leads or the Club Secretaries. Interested
              individuals should contact the club if they have any doubts
              in the application process and club guidelines.
            </p>


            <div className='flex flex-col mt-8 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4'>
              <Link
                href='/faq'
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
                FAQs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CTA
