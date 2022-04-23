/* eslint-disable react/no-unescaped-entities */
import { GetServerSideProps } from 'next'
import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown/with-html'
import { fetchUserReadme } from '../lib/UserataFetch'
import BottomNav from '../components/BottomNav'
const username = process.env.NEXT_PUBLIC_USERNAME

export default function About() {
  const [data, setData] = React.useState<string | null>('')

  React.useEffect(() => {
    async function GtihubReadMe() {
      //@ts-ignore
      const github = await fetchUserReadme(username)

      setData(github)
    }
    GtihubReadMe()
  }, [data])

  return (
    <>
      <BottomNav />

      <div className="container mx-auto flex flex-col items-start px-5 mt-6 max-w-5xl min-h-[182vh] xs:min-h-[170vh] sm:min-h-screen ">
        <div className="bg-[#60A5FA] h-[120px] top-36 right-20 absolute w-[120px] rounded-full blur-[90px] filter "></div>
        <div className="bg-[#60A5FA] h-[120px] top-[200px] right-[200px] absolute w-[120px] rounded-full blur-[90px] filter "></div>
        <h1 className="SpaceGroteskBold text-[50px] sm:text-[64px]">
          About Me 👨‍
        </h1>
        <p className="SpaceGroteskRegular text-[20px] sm:text-[24px] ">
          A brief intro to who i am and how i do what i do:
        </p>
        <h1 className="SpaceGroteskRegular py-5 text-2xl sm:text-4xl ">
          I am{' '}
          <span className=" text-4xl sm:text-6xl SpaceGroteskBold ">
            {username}
          </span>
        </h1>
        <div className="bg-[#60A5FA] h-[120px] top-[30rem] left-[5px] absolute w-[120px] rounded-full blur-[90px] filter "></div>
        <div className="bg-[#60A5FA] h-[120px] top-[30rem] left-[5px] absolute w-[120px] rounded-full blur-[90px] filter "></div>

        <div className="SpaceGroteskRegular text-[20px] sm:text-[24px]  max-w-5xl mt-3">
          <ReactMarkdown allowDangerousHtml>{data!}</ReactMarkdown>
        </div>
        <>
          <div className="relative block group  my-7 cursor-pointer">
            <span className="absolute inset-0 border-2  border-[#188AEC] rounded-lg"></span>
            <div className="transition bg-[#188AEC] text-white rounded-lg group-hover:-translate-x-0  group-hover:-translate-y-0 -translate-x-3 translate-y-2">
              <div className="py-3 px-10 ">
                <p className="mt-1 text-xl">Say Hello</p>
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  )
}

// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
//   const githubUser = await fetch(
//     //@ts-ignore
//     `https://api.github.com/users/${params.username}`,
//   )
//   const githubRepo = await fetch(
//     //@ts-ignore
//     `https://api.github.com/users/${params.username}/repos?per_page=20`,
//   )
//   //@ts-ignore

//   const githubUserData = await githubUser.json()
//   const githubRepoData = await githubRepo.json()

//   return { props: { githubRepoData, githubUserData } }
// }
