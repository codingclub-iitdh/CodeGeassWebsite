'use client'

import { Tabs, type TabsRef } from 'flowbite-react'
import Loading from '@/components/Loading/Loading'
import InfoTable from '@/components/Table/InfoTable'
import React, { useState, useRef, useEffect } from 'react'
import { SiLeetcode, SiCodeforces } from 'react-icons/si'

import styles from './page.module.css'

const LEADERBOARD_REVALIDATION_TIME = 60

const Page = async () => {
  const [activeTab, setActiveTab] = useState<number>(0)
  const [arrLt, setArrlt] = useState<string[][]>([[]])
  const [arrCf, setArrCf] = useState<string[][]>([[]])
  const tabsRef = useRef<TabsRef>(null)
  const props = { setActiveTab, tabsRef }

  useEffect(() => {
    console.log('Leetocde Fetch')
    const fetchData = async () => {
      const res = await fetch(`/api/fetch/leetcode`, {
        next: { revalidate: LEADERBOARD_REVALIDATION_TIME },
        method: 'GET',
      })
      if (res.status !== 200) {
        console.log('Leetocde Fetch NO RESPONSE')
        setArrlt([[]])
      }
      console.log('Leetcode Fetch WITH RESPONSE')
      const data = await res.json()
      const dict_data: object[] = JSON.parse(data.leetcode)

      const arr: string[][] = []
      dict_data.forEach(element => {
        arr.push(Object.values(element).map(e => e.toString()))
      })
      setArrlt(arr)
    }
    fetchData()
  }, [])

  useEffect(() => {
    console.log('Codeforce Fetch')
    const fetchData = async () => {
      const res = await fetch(`/api/fetch/codeforces`, {
        next: { revalidate: LEADERBOARD_REVALIDATION_TIME },
        method: 'GET',
      })
      if (res.status === 400) {
        console.log('Codeforce Fetch NO RESPONCE')
        setArrCf([[]])
      }
      console.log('Codeforce Fetch WITH RESPONCE')
      const data = await res.json()
      const dict_data: any[] = JSON.parse(data.codeforces)

      const arr: string[][] = []
      dict_data.forEach(element => {
        arr.push([
          element.rollNumber.toString(),
          element.name.toString(),
          element.userHandle.toString(),
          element.rating.toString(),
          element.contests.toString(),
          element.last_contest_id.toString(),
        ])
      })
      setArrCf(arr)
    }
    fetchData()
  }, [])

  const headings_lt: string[] = [
    'rollNumber',
    'fullName',
    'userHandle',
    'Ranking',
    'Stars',
  ]

  // fetchLeetcodeUsersByAPI()
  const headings_cf: string[] = [
    'rollNumber',
    'fullName',
    'userHandle',
    'Rating',
    'Contests',
    'Last Contest',
  ]

  return (
    <>
      <div className={styles.LeaderboardWrapper}>
        <Tabs.Group
          aria-label='Default tabs'
          style='default'
          ref={props.tabsRef}
          className='bg-transparent px-4 pt-2 sm:pt-6'
          onActiveTabChange={tab => props.setActiveTab(tab)}
        >
          <Tabs.Item
            active
            title='LeetCode'
            icon={SiLeetcode}
            className='active:border-gray-500'
          >
            {arrLt ? (
              <InfoTable
                headings={headings_lt}
                row_data={arrLt}
                table_heading='Leetcode'
                setRowData={null}
              />
            ) : (
              <Loading />
            )}
          </Tabs.Item>
          <Tabs.Item title='Codeforces' icon={SiCodeforces}>
            {arrCf ? (
              <InfoTable
                headings={headings_cf}
                row_data={arrCf}
                table_heading='Codeforces'
                setRowData={null}
              />
            ) : (
              <Loading />
            )}
          </Tabs.Item>
        </Tabs.Group>
      </div>
    </>
  )
}

export default Page
