'use client'
import React from 'react'
import Image from 'next/image'
import classes from './Footer.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
export default function Footer() {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <div id='footer'>
      <div className={classes.footer}>
        <div className={classes.footerDiv}>
          <div className={classes.footerImageWrapper}>
            <Link href='#'>
              <Image
                src='/Footer/Logo4x.png'
                width={180}
                height={180}
                priority
                alt='coding_club_logo'
              />
            </Link>
          </div>
          <div className={classes.footerLinksWrapper}>
            <div
              aria-current='page'
              className={`${classes.footerlink} ${classes.navLink}`}
            >
              <Link href='/'>Home</Link>
            </div>
            {/*
            <div className={`${classes.footerlink} ${classes.navLink}`}>
              <Link href='/leaderboard'>Leaderboard</Link>
            </div>
            */}
            <div className={`${classes.footerlink} ${classes.navLink}`}>
              <Link href='/events'>Events</Link>
            </div>
            <div className={`${classes.footerlink} ${classes.navLink}`}>
              <Link href='/members/wanna_join'>Membership Norms</Link>
            </div>
            <div className={`${classes.footerlink} ${classes.navLink}`}>
              <Link href='/faq'>
                FAQs
              </Link>
            </div>
          </div>

          <div className={classes.footerContactWrapper}>
            <h6
              className={classes.footerlink}
              style={{ color: 'white', padding: '1rem' }}
            >
              Contact Us!
            </h6>
            <div>
              <a
                href='mailto:codingclub@iitdh.ac.in'
                className={classes.footerlink}
              >
                codingclub@iitdh.ac.in
              </a>
            </div>
            <div>
              <a href='mailto:oss@iitdh.ac.in' className={classes.footerlink}>
                oss@iitdh.ac.in
              </a>
            </div>
          </div>
          <div className={classes.rightFooterWrapper}>
            <div className={classes.footerIconsWrapper}>
              <Link
                href='https://in.linkedin.com/company/coding-club-iit-dharwad'
                target='_blank'
                className={classes.footerlink}
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
              <Link
                href='https://www.github.com/oss2019/'
                target='_blank'
                className={classes.footerlink}
              >
                <FontAwesomeIcon icon={faGithub} />
              </Link>
              <Link
                href='https://github.com/oss2019/CodeGeassWebsite'
                target='_blank'
                className={classes.footerlink}
              >
                <FontAwesomeIcon icon={faGithub} />
              </Link>
            </div>
            <div>© Copyright - {year} Coding Club all right reserved</div>
          </div>
        </div>
      </div>
    </div>
  )
}
