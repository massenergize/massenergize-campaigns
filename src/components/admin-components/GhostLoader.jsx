import React from 'react'
import { Spinner } from '@kehillahglobal/ui'

export default function GhostLoader () {
  return (
    <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgba(255,255,255,0.5)',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 100,
        bottom: 0,
    }}>
         <Spinner color="#6e207c" radius={56} variation="TwoHalfCirclesType" />
    </div>
  )
}
