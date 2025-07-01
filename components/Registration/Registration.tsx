'use client'

import { NextPage } from 'next'
import RegBlock from './RegBlock/RegBlock'
import { useState, useContext } from 'react'
import Modal from 'react-modal'
import styles from './Registration.module.css'
import { Tabs } from 'flowbite-react'
import axios from 'axios'
import useAuth from '@/hooks/useAuth'
import { State } from '@/types/AuthContext/AuthContext.type'
import { useRouter } from 'next/navigation'

interface Props {}

interface FormData {
  fullName: string
  rollNumber: string
  userHandle: string
  url: string
}

const Registration: NextPage<Props> = ({}) => {
  // We are handelling codeforces registration here
  const handleChangeInput_cf = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs_cf({
      ...inputs_cf,
      [e.target.name]: e.target.value,
    })
  }

  const [inputs_cf, setInputs_cf] = useState({
    fullName: '',
    rollNumber: '',
    userHandle: '',
  })

  const [authState, setAuthState] = useState<State>({
    loading: false,
    data: null,
    error: null,
  })

  const { registerIn } = useAuth()
  const router = useRouter()

  // We are handelling leetcode registrations here
  const handleChangeInput_lt = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs_lt({
      ...inputs_lt,
      [e.target.name]: e.target.value,
    })
  }

  const [inputs_lt, setInputs_lt] = useState({
    fullName: '',
    rollNumber: '',
    userHandle: '',
  })
  const [formdata, setFormdata] = useState<FormData>({
    fullName: '',
    rollNumber: '',
    userHandle: '',
    url: '',
  })

  const handleOpen = (data: any) => {
    setFormdata(data)
    registerIn(data, setAuthState)
    if (authState.error === null) {
      router.push('/leaderboard')
    }
  }

  return (
    <>
      <div
        className={`${styles.RegWrapper} grid gap-0 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1`}
      >
        <Tabs.Group
          aria-label='Pills'
          style='default'
          className={
            styles.tabGroup +
            ' text-center justify-center text-sm border-b-0 my-0 gap-y-0 gap-x-0.5 py-0'
          }
        >
          <Tabs.Item active title='Codeforces'>
            <div>
              <RegBlock
                title='Codeforces'
                inputs={inputs_cf}
                handleChangeInput={handleChangeInput_cf}
                handleOpen={handleOpen}
                type={0}
              />
            </div>
          </Tabs.Item>
          <Tabs.Item title='LeetCode'>
            <div>
              <RegBlock
                title='LeetCode'
                inputs={inputs_lt}
                handleChangeInput={handleChangeInput_lt}
                handleOpen={handleOpen}
                type={1}
              />
            </div>
          </Tabs.Item>
        </Tabs.Group>
      </div>
    </>
  )
}

export default Registration
