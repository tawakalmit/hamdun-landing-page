import React from 'react'
import Head from 'next/head'

export default function HamdunHead({title}) {
  return (
    <div>
        <Head>
            <title>{title} | Hamdun</title>
            <link rel="icon" href="/asset/logo.png" />
            <link rel="manifest" href="/manifest.json" />
        </Head>
    </div>
  )
}
