import type { NextPage } from "next";
import Image from "next/image";
import { useState, useEffect, useLayoutEffect, useRef } from "react";
import React from "react";
import { Layout } from "@/components/layout";
import Background from "@/components/Background"
import { Footer } from "@/components/footer";


const Home: NextPage<any> = ({ officers }) => {
  return (
    <Layout>
      <div className='relative w-full m-0 h-screen'>
        <Background className='opacity-30' />
        <main className='relative w-full min-h-screen bg-transparent'>
          <div className="h-screen flex flex-col justify-center items-center">
            <h1 className="text-white text-3xl font-bold animate-bounce">Spring Institute</h1>
            {/* <Voter /> */}
          </div>
          <div className="h-screen flex flex-col justify-center items-center">
            {/* <Graph/> */}
          </div>
          <Footer/>
        </main>
        {/* <InteractiveCanvas /> */}
      </div>

    </Layout>
  );
};


export default Home;
