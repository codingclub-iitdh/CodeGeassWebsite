'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Tabs, type TabsRef } from 'flowbite-react'
import Loading from '@/components/Loading/Loading'
import InfoTable from '@/components/Table/InfoTable'
import styles from './page.module.css'
import { FOSS } from '@/types/Members/foss.types'
import { CP } from '@/types/Members/cp.types'
import { GD } from '@/types/Members/gd.types'
import { WebDev } from '@/types/Members/webdev.types'
import { members } from '@/types/Members/members.types'
import { SiBmcsoftware, SiCodeforces } from 'react-icons/si'
import { MdWeb } from "react-icons/md";
import { IoGameController } from 'react-icons/io5'
import { IoIosPeople } from 'react-icons/io'

import Header from '@/components/Members/Header'

const MEMBERS_REVALIDATION_TIME = 60 * 60 * 12

const Page = () => {
  const [memArr, setMemArr] = useState<string[][]>([[]])
  const [cpArr, setCpArr] = useState<string[][]>([[]])
  const [gdArr, setGdArr] = useState<string[][]>([[]])
  const [fossArr, SetFossArr] = useState<string[][]>([[]])
  const [webArr, SetWebArr] = useState<string[][]>([[]])
  const [activeTab, setActiveTab] = useState<number>(0)
  const tabsRef = useRef<TabsRef>(null)
  const props = { setActiveTab, tabsRef }

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/fetch/members`, {
        next: {
          revalidate: MEMBERS_REVALIDATION_TIME,
        },
        method: 'GET',
      })
      if (res.status !== 200) {
        setMemArr([[]])
      }
      const data = await res.json()
      const dict_data: members[] = JSON.parse(data.members)
      const arr: string[][] = []
      dict_data.forEach(element => {
        arr.push(Object.values(element).map(e => e.toString()))
      })
      setMemArr(arr)
    }
    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/fetch/cpmembers`, {
        next: {
          revalidate: MEMBERS_REVALIDATION_TIME,
        },
        method: 'GET',
      })
      if (res.status !== 200) {
        setCpArr([[]])
      }
      const data = await res.json()
      const cf_data: CP[] = JSON.parse(data.codeforces)
      const lt_data: CP[] = JSON.parse(data.leetcode)
      const arr: string[][] = []
      cf_data.forEach(element => {
        let new_ele = {
          name: '',
          roll_number: 0,
          handle: '',
        }
        new_ele['name'] = element.member.name
        new_ele['roll_number'] = element.member.roll_number
        new_ele['handle'] = element.handle
        arr.push(Object.values(new_ele).map(e => e.toString()))
      })
      lt_data.forEach(element => {
        let new_ele = {
          name: '',
          roll_number: 0,
          handle: '',
        }
        new_ele['name'] = element.member.name
        new_ele['roll_number'] = element.member.roll_number
        new_ele['handle'] = element.handle
        arr.push(Object.values(new_ele).map(e => e.toString()))
      })
      setCpArr(arr)
    }
    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/fetch/gdmembers`, {
        next: {
          revalidate: MEMBERS_REVALIDATION_TIME,
        },
        method: 'GET',
      })
      if (res.status !== 200) {
        setGdArr([[]])
      }
      const data = await res.json()
      const dict_data: GD[] = JSON.parse(data.gameDevMembers)
      const arr: string[][] = []
      dict_data.forEach(element => {
        let new_ele = {
          name: '',
          roll_number: 0,
          role: '',
        }
        new_ele['name'] = element.member.name
        new_ele['roll_number'] = element.member.roll_number
        new_ele['role'] = element.role
        arr.push(Object.values(new_ele).map(e => e.toString()))
      })
      setGdArr(arr)
    }
    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/fetch/fossmembers`, {
        next: {
          revalidate: MEMBERS_REVALIDATION_TIME,
        },
        method: 'GET',
      })
      if (res.status !== 200) {
        SetFossArr([[]])
      }
      const data = await res.json()
      const dict_data: FOSS[] = JSON.parse(data.foss)
      const arr: string[][] = []
      dict_data.forEach(element => {
        let new_ele = {
          name: '',
          roll_number: 0,
          github_uname: '',
        }
        new_ele['name'] = element.member.name
        new_ele['roll_number'] = element.member.roll_number
        new_ele['github_uname'] = element.github_uname
        arr.push(Object.values(new_ele).map(e => e.toString()))
      })
      SetFossArr(arr)
    }
    fetchData()
  }, [])
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/fetch/webdevmembers`, {
        next: {
          revalidate: MEMBERS_REVALIDATION_TIME,
        },
        method: 'GET',
      })
      if (res.status !== 200) {
        SetWebArr([[]])
      }
      const data = await res.json()
      const dict_data: WebDev[] = JSON.parse(data.webdev)
      const arr: string[][] = []
      dict_data.forEach(element => {
        let new_ele = {
          name: '',
          roll_number: 0,
          github_uname: '',
        }
        new_ele['name'] = element.member.name
        new_ele['roll_number'] = element.member.roll_number
        new_ele['github_uname'] = element.github_uname
        arr.push(Object.values(new_ele).map(e => e.toString()))
      })
      SetWebArr(arr)
    }
    fetchData()
  }, [])

  const headings_mem: string[] = ['Name', 'Roll Number', 'Wing']
  const headings_foss: string[] = ['Name', 'Roll Number', 'GitHub ID']
  const headings_cp: string[] = ['Name', 'Roll Number', 'handle']
  const headings_gd: string[] = ['Name', 'Roll Number', 'Role']
  const headings_webdev: string[] = ['Name', 'Roll Number', 'GitHub ID']

  return (
    <>
      <div className={styles.membersWrapper}>
        <Header />
        <Tabs.Group
          aria-label='Default tabs'
          style='default'
          ref={props.tabsRef}
          className='bg-transparent px-4 pt-2 sm:pt-6'
          onActiveTabChange={tab => props.setActiveTab(tab)}
        >
          <Tabs.Item active title='Members' icon={IoIosPeople}>
            {memArr ? (
              <InfoTable
                headings={headings_mem}
                row_data={memArr}
                table_heading='Members'
                setRowData={null}
              />
            ) : (
              <Loading />
            )}
          </Tabs.Item>
          <Tabs.Item title='Free & Open Source Software' icon={SiBmcsoftware}>
            {fossArr ? (
              <InfoTable
                headings={headings_foss}
                row_data={fossArr}
                table_heading='Free and Open Source'
                setRowData={null}
              />
            ) : (
              <Loading />
            )}
          </Tabs.Item>
          <Tabs.Item title='Web Development' icon={MdWeb}>
            {webArr ? (
              <InfoTable
                headings={headings_webdev}
                row_data={webArr}
                table_heading='Web Development'
                setRowData={null}
              />
            ) : (
              <Loading />
            )}
          </Tabs.Item>
          <Tabs.Item title='Competitive Programming' icon={SiCodeforces}>
            {cpArr ? (
              <InfoTable
                headings={headings_cp}
                row_data={cpArr}
                table_heading='Competitive Programming'
                setRowData={null}
              />
            ) : (
              <Loading />
            )}
          </Tabs.Item>
          <Tabs.Item title='Game Dev' icon={IoGameController}>
            {gdArr ? (
              <InfoTable
                headings={headings_gd}
                row_data={gdArr}
                table_heading='Game Development'
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
