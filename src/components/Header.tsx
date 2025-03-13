import React from 'react'
import { NeonfizzLogo } from './NeonfizzLogo'

export default function Header() {
  return (
    <header className="-mb-28 flex justify-center py-4">
      <NeonfizzLogo className="z-10 h-20 cursor-pointer text-sky-800" />
    </header>
  )
}
