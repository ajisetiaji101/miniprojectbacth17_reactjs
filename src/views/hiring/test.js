import React from 'react'
import Moment from 'react-moment';

export default function test() {
    const dateToFormat = new Date('1976-04-19T12:59-0500');
    return (
    <div><Moment date={dateToFormat} /></div>
  )
}
