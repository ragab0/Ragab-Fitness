"use client";
import { InfinitySpin } from 'react-loader-spinner';

export default function Loading() {
  return (
    <div className='flex justify-center items-center my-[100px]'>
      <InfinitySpin color="grey" />
    </div>
  )
}