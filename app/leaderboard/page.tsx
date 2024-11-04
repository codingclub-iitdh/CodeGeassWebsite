'use client'

import { Tabs } from 'flowbite-react'
import Loading from '@/components/Loading/Loading'
import InfoTable from '@/components/Table/InfoTable'
import React, { useState, useEffect } from 'react'
import { SiLeetcode, SiCodeforces } from 'react-icons/si'
import styles from './page.module.css'

const LEADERBOARD_REVALIDATION_TIME = 60

const Page = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [leetcodeData, setLeetcodeData] = useState<string[][]>([])
  const [codeforcesData, setCodeforcesData] = useState<string[][]>([])
  const [loading, setLoading] = useState(true)

  const fetchLeetcodeData = async () => {
    try {
      const res = await fetch('/api/fetch/leetcode')
      if (!res.ok) throw new Error('Failed to fetch Leetcode data')
      
      const data = await res.json()
      const users = JSON.parse(data.leetcode)
      const formattedData = users.map((user: any) => [
        user.rollNumber,
        user.name,
        user.userHandle,
        user.ranking.toString(),
        user.stars.toString()
      ])
      setLeetcodeData(formattedData)
    } catch (error) {
      console.error('Leetcode fetch error:', error)
      setLeetcodeData([])
    }
  }

  const fetchCodeforcesData = async () => {
    try {
      const res = await fetch('/api/fetch/codeforces')
      if (!res.ok) throw new Error('Failed to fetch Codeforces data')
      
      const data = await res.json()
      const users = JSON.parse(data.codeforces)
      const formattedData = users.map((user: any) => [
        user.rollNumber,
        user.name,
        user.userHandle,
        user.rating.toString(),
        user.contests.toString(),
        user.last_contest_id.toString()
      ])
      setCodeforcesData(formattedData)
    } catch (error) {
      console.error('Codeforces fetch error:', error)
      setCodeforcesData([])
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      await Promise.all([
        fetchLeetcodeData(),
        fetchCodeforcesData()
      ])
      setLoading(false)
    }

    fetchData()
    const interval = setInterval(fetchData, LEADERBOARD_REVALIDATION_TIME * 1000)
    return () => clearInterval(interval)
  }, [])

  const leetcodeHeadings = [
    'Roll Number',
    'Name',
    'Handle',
    'Ranking',
    'Stars'
  ]

  const codeforcesHeadings = [
    'Roll Number',
    'Name',
    'Handle',
    'Rating',
    'Contests',
    'Last Contest'
  ]

  return (
    <div className={styles.LeaderboardWrapper}>
      <Tabs.Group
        aria-label='Default tabs'
        style='default'
        className='bg-transparent px-4 pt-2 sm:pt-6'
        onActiveTabChange={setActiveTab} // Set active tab here
      >
        <Tabs.Item
          active={activeTab === 0}
          title='LeetCode'
          icon={SiLeetcode}
          className='active:border-gray-500'
        >
          {loading ? (
            <Loading />
          ) : (
            <InfoTable
              headings={leetcodeHeadings} // Use leetcodeHeadings
              row_data={leetcodeData} // Use leetcodeData
              table_heading='Leetcode'
              setRowData={null}
            />
          )}
        </Tabs.Item>
        <Tabs.Item
          title='Codeforces'
          icon={SiCodeforces}
        >
          {loading ? (
            <Loading />
          ) : (
            <InfoTable
              headings={codeforcesHeadings} // Use codeforcesHeadings
              row_data={codeforcesData} // Use codeforcesData
              table_heading='Codeforces'
              setRowData={null}
            />
          )}
        </Tabs.Item>
      </Tabs.Group>
    </div>
  )
}

export default Page
