import { GetServerSideProps } from 'next'
import React, { useEffect, useState } from 'react'

import BottomNav from '../components/BottomNav'
import Hero from '../components/Hero'
// import { useLocalStorage } from '.././helper/useLocalStorage'
import { useLocalStorage } from '../helper/useLocalStorage'

const username = process.env.NEXT_PUBLIC_USERNAME

export default function Portfolio2({ name, bio, githubRepoData }: any) {
  const [items, setItems] = useState('')

  useEffect(() => {
    //@ts-ignore
    const items = JSON.parse(localStorage.getItem('name'))
    if (items) {
      setItems(items)
    }
  }, [])
  const [userData, setUserData] = useLocalStorage<string>('userData', '')
  const [githubRepo, setGithubRepo] = useLocalStorage<string[]>('repo', [])

  useEffect(() => {
    setUserData(name)
    setGithubRepo(githubRepoData)
  }, [])

  return (
    <div>
      <Hero name={name} bio={bio} />
      <BottomNav />
    </div>
  )
}
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const githubUser = await fetch(
    //@ts-ignore
    `https://api.github.com/users/${username}`,
  )
  const githubRepo = await fetch(
    //@ts-ignore
    `https://api.github.com/users/${username}/repos?per_page=20`,
  )
  const { name, bio } = await githubUser.json()
  const githubRepoData = await githubRepo.json()
  return { props: { name, bio, githubRepoData } }
}
