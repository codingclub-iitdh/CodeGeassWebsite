'use client'
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Tabs, type TabsRef } from 'flowbite-react';
import Loading from '@/components/Loading/Loading';
import InfoTable from '@/components/Table/InfoTable';
import styles from './../../app/members/page.module.css';
import { FOSS } from '@/types/Members/foss.types';
import { CP } from '@/types/Members/cp.types';
import { GD } from '@/types/Members/gd.types';
import { WebDev } from '@/types/Members/webdev.types';
import { members } from '@/types/Members/members.types';
import { SiBmcsoftware, SiCodeforces } from 'react-icons/si';
import { IoGameController } from 'react-icons/io5';
import { IoIosPeople } from 'react-icons/io';
import Modal from 'react-modal';
import Alert from '@mui/material/Alert';

const MEMBERS_REVALIDATION_TIME = 60 * 60 * 12;

interface FormData {
  name: string;
  roll_number: string;
  wing: string;
  github_id?: string;
  role?: string;
  leetCode_id?: string;
  codeForces_id?: string;
}

const MembersPage = () => {
  const [memArr, setMemArr] = useState<string[][]>([[]]);
  const [cpArr, setCpArr] = useState<string[][]>([[]]);
  const [gdArr, setGdArr] = useState<string[][]>([[]]);
  const [fossArr, SetFossArr] = useState<string[][]>([[]]);
  const [webdevArr, setWebdevArr] = useState<string[][]>([[]]);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const tabsRef = useRef<TabsRef>(null);
  const props = { setActiveTab, tabsRef }
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    roll_number: '',
    wing: 'FOSS',
    github_id: '',
    role: 'DEVELOPER',
    leetCode_id: '',
    codeForces_id: '',
  });

  const handleOpen = () => {
    setIsModalVisible(true);
  };

  const handleClose = () => {
    setIsModalVisible(false);
  };

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name === '') {
      setError('Name should not be empty');
    } else if (formData.roll_number === '') {
      setError('Roll Number should not be empty');
    } else if (formData.wing === 'FOSS' && formData.github_id === '') {
      setError('Github Id should not be empty');
    } else if (
      formData.wing === 'CP' &&
      formData.codeForces_id === '' &&
      formData.leetCode_id === ''
    ) {
      setError('Provide details for at least 1 CP handle');
    } else if (error === null) {
      try {
        const response = await axios.post('/api/admin/members', formData);
        console.log(response.data);
        fetchDataMembers();
        fetchCpData();
        fetchDataGameDev();
        fetchDataFoss();
        fetchDataWebDev();
        console.log('Member added successfully');
      } catch (error: any) {
        setError(error.response.data.error);
        console.log('Error adding member:', error);
      } finally {
        handleClose();
      }
    }
  };

  const fetchDataMembers = async () => {
    const res = await fetch(`/api/fetch/members`, {
      next: {
        revalidate: MEMBERS_REVALIDATION_TIME,
      },
      method: 'GET',
    });
    if (res.status !== 200) {
      setMemArr([[]]);
    }
    const data = await res.json();
    const dict_data: members[] = JSON.parse(data.members);
    const arr: string[][] = [];
    dict_data.forEach(element => {
      arr.push(Object.values(element).map(e => e.toString()));
    });
    setMemArr(arr);
  };

  const fetchCpData = async () => {
    const res = await fetch(`/api/fetch/cpmembers`, {
      next: {
        revalidate: MEMBERS_REVALIDATION_TIME,
      },
      method: 'GET',
    });
    if (res.status !== 200) {
      setCpArr([[]]);
    }
    const data = await res.json();
    const cf_data: CP[] = JSON.parse(data.codeforces);
    const lt_data: CP[] = JSON.parse(data.leetcode);
    const arr: string[][] = [];
    cf_data.forEach(element => {
      let new_ele = {
        name: '',
        roll_number: 0,
        handle: '',
      };
      new_ele['name'] = element.member.name;
      new_ele['roll_number'] = element.member.roll_number;
      new_ele['handle'] = element.handle;
      arr.push(Object.values(new_ele).map(e => e.toString()));
    });
    lt_data.forEach(element => {
      let new_ele = {
        name: '',
        roll_number: 0,
        handle: '',
      };
      new_ele['name'] = element.member.name;
      new_ele['roll_number'] = element.member.roll_number;
      new_ele['handle'] = element.handle;
      arr.push(Object.values(new_ele).map(e => e.toString()));
    });
    setCpArr(arr);
  };

  const fetchDataGameDev = async () => {
    const res = await fetch(`/api/fetch/gdmembers`, {
      next: {
        revalidate: MEMBERS_REVALIDATION_TIME,
      },
      method: 'GET',
    });
    if (res.status !== 200) {
      setGdArr([[]]);
    }
    const data = await res.json();
    const dict_data: GD[] = JSON.parse(data.gameDevMembers);
    const arr: string[][] = [];
    dict_data.forEach(element => {
      let new_ele = {
        name: '',
        roll_number: 0,
        role: '',
      };
      new_ele['name'] = element.member.name;
      new_ele['roll_number'] = element.member.roll_number;
      new_ele['role'] = element.role;
      arr.push(Object.values(new_ele).map(e => e.toString()));
    });
    setGdArr(arr);
  };

  const fetchDataFoss = async () => {
    const res = await fetch(`/api/fetch/fossmembers`, {
      next: {
        revalidate: MEMBERS_REVALIDATION_TIME,
      },
      method: 'GET',
    });
    if (res.status !== 200) {
      SetFossArr([[]]);
    }
    const data = await res.json();
    const dict_data: FOSS[] = JSON.parse(data.foss);
    const arr: string[][] = [];
    dict_data.forEach(element => {
      let new_ele = {
        name: '',
        roll_number: 0,
        github_uname: '',
      };
      new_ele['name'] = element.member.name;
      new_ele['roll_number'] = element.member.roll_number;
      new_ele['github_uname'] = element.github_uname;
      arr.push(Object.values(new_ele).map(e => e.toString()));
    });
    SetFossArr(arr);
  };

  const fetchDataWebDev = async () => {
    const res = await fetch(`/api/fetch/webdevmembers`, {
      next: {
        revalidate: MEMBERS_REVALIDATION_TIME,
      },
      method: 'GET',
    });
    if (res.status !== 200) {
      setWebdevArr([[]]);
    }
    const data = await res.json();
    const dict_data: WebDev[] = JSON.parse(data.webDevMembers);
    const arr: string[][] = [];
    dict_data.forEach(element => {
      let new_ele = {
        name: '',
        roll_number: 0,
        github_uname: '',
      };
      new_ele['name'] = element.member.name;
      new_ele['roll_number'] = element.member.roll_number;
      new_ele['github_uname'] = element.github_uname;
      arr.push(Object.values(new_ele).map(e => e.toString()));
    });
    setWebdevArr(arr);
  };

  useEffect(() => {
    fetchDataMembers();
    fetchCpData();
    fetchDataGameDev();
    fetchDataFoss();
    fetchDataWebDev();
  }, []);
const headings_mem: string[] = ['Name', 'Roll Number', 'Wing', '']
const headings_foss: string[] = ['Name', 'Roll Number', 'GitHub ID']
const headings_cp: string[] = ['Name', 'Roll Number', 'handle']
const headings_gd: string[] = ['Name', 'Roll Number', 'Role']
const headings_webdev: string[] = ['Name', 'Roll Number', 'GitHub ID']
  return (
    <>
      {error ? (
        <Alert
          className={styles.errorBox}
          severity='error'
          onClose={() => {
            setError(null)
          }}
        >
          {JSON.stringify(error, null, 2).replace(/"/g, '')}
        </Alert>
      ) : null}

      <div className={styles.membersWrapper}>
        <Modal
          isOpen={isModalVisible}
          onRequestClose={handleClose}
          shouldCloseOnOverlayClick={true}
          style={{
            overlay: {
              zIndex: '100',
            },
          }}
          className={styles.membersModal}
        >
          <h1>Add Member</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleFormChange}
              />
            </label>

            <label>
              Roll Number:
              <input
                type='text'
                name='roll_number'
                value={formData.roll_number}
                onChange={handleFormChange}
              />
            </label>

            <label>
              Wing:
              <select
                name='wing'
                value={formData.wing}
                onChange={handleFormChange}
              >
                <option value='FOSS'>FOSS</option>
                <option value='GAME_DEV'>Game Dev</option>
                <option value='CP'>Competitive Programming</option>
                <option value='WEB_DEV'>Web Development</option>
                <option value='NETWORKING'>Networking</option>
                <option value='CYBERSECURITY'>Cyber Security</option>
              </select>
            </label>

            {formData.wing === 'FOSS' && (
              <div>
                <label>
                  Git hub Id:
                  <input
                    type='text'
                    name='github_id'
                    value={formData.github_id}
                    onChange={handleFormChange}
                  />
                </label>
              </div>
            )}
            {formData.wing === 'GAME_DEV' && (
              <div>
                <label>
                  Role :
                  <select
                    name='role'
                    value={formData.role}
                    onChange={handleFormChange}
                  >
                    <option value='DEVELOPER'>Developer</option>
                    <option value='ASSET_DES'>Asset Designer</option>
                    <option value='MUSIC_COMP'>Music Composer</option>
                    <option value='STORY_WRITING'>Story Writer</option>
                    <option value='ENV_DES'>Environment Designer</option>
                  </select>
                </label>
              </div>
            )}
            {formData.wing === 'CP' && (
              <div>
                <label>
                  Leet code:
                  <input
                    type='text'
                    name='leetCode_id'
                    value={formData.leetCode_id}
                    onChange={handleFormChange}
                  />
                </label>

                <label>
                  Code Forces:
                  <input
                    type='text'
                    name='codeForces_id'
                    value={formData.codeForces_id}
                    onChange={handleFormChange}
                  />
                </label>
              </div>
            )}
            {formData.wing === 'WEB_DEV' && (
              <div>
                <label>
                  GitHub Profile:
                  <input
                    type='text'
                    name='github_id'
                    value={formData.github_id}
                    onChange={handleFormChange}
                  />
                </label>
              </div>
            )}

            <button type='submit'>Submit</button>
          </form>
        </Modal>
        <Tabs.Group
          aria-label='Default tabs'
          style='default'
          ref={props.tabsRef}
          className='bg-transparent px-4 pt-2 sm:pt-6'
          onActiveTabChange={tab => props.setActiveTab(tab)}
        >
          <Tabs.Item active title='Members' icon={IoIosPeople}>
            {memArr ? (
              <>
                <button className={styles.addButton} onClick={handleOpen}>
                  Add Data
                </button>
                <InfoTable
                  headings={headings_mem}
                  row_data={memArr}
                  setRowData={setMemArr}
                  table_heading='Members'
                  userType={'admin'}
                />
              </>
            ) : (
              <Loading />
            )}
          </Tabs.Item>
          <Tabs.Item title='Free & Open Source Software' icon={SiBmcsoftware}>
            {fossArr ? (
              <InfoTable
                headings={headings_foss}
                row_data={fossArr}
                table_heading='FOSS MEMBERS'
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
          <Tabs.Item title='Web Development' icon={SiBmcsoftware}>
            {webdevArr ? (
              <InfoTable
                headings={headings_webdev}
                row_data={webdevArr}
                table_heading='Web Development'
                setRowData={null}
              />
            ) : (
              <Loading />
            )}
          </Tabs.Item>
        </Tabs.Group>
      </div>
    </>
  );
}


MembersPage.requireAuth = true // Required Authentication

export default MembersPage
