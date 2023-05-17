import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [text, setText] = useState('');
  return (
    <>
      <Head>
      <title>Journal</title>
      <meta name="description" content="A simple journal app with Next.js and Flask" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <h1 className="text-4xl mb-10">Journal</h1>
        <TextField
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write your journal entry here..."
          multiline
          rows={10}
          fullWidth
          variant="outlined"
        />
      </main>
    </>
  )
}
