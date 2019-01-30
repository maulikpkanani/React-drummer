import React from 'react'
import { soundList } from '../../sound-data'
import DrumPad from '../DrumPad/DrumPad'
import './Keys.css'

const Keys = ({onDisplayName}) => (
  <div className='Keys-container'>
    {soundList.map(sound => (
      <DrumPad key={sound.id} sound={sound} onDisplayName={onDisplayName} />
    ))}
  </div>
)

export default Keys
