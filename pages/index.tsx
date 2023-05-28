import React, { useEffect, useState } from "react"
import { GetStaticProps } from "next"
import Layout from "../components/Layout"
import Post, { PostProps } from "../components/Post"
// pages/index.tsx
import prisma from '../lib/prisma';
import mainLogo from '../public/images/logo-no-background.svg';

import Image from "next/image";
import LinkButton from "../components/LinkButton";
import { useSession } from "next-auth/react";


export const getStaticProps: GetStaticProps = async () => {
 
  return {
    props: {  },
    revalidate: 10,
  };
};

type Props = {
  feed: PostProps[]
}

const Home: React.FC<Props> = (props) => {

  const { data: session } = useSession()


  return (
    <Layout>
      <div className="flex p-5 m-5 justify-center max-h-96">
        <Image alt="main logo" src={mainLogo}></Image>
      </div>
      { session &&  
        <div className="flex justify-center m-3 flex-col items-center">
          <LinkButton href="/my-groups" className="bg-primary">My Groups</LinkButton>
          <LinkButton href="/join-group">Join Group</LinkButton>
          <LinkButton href="/create-group">Create Group</LinkButton>
        </div>
      }
    </Layout>
  )
}

export default Home
