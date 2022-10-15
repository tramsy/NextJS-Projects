import React from 'react'
import Image from 'next/image';


const ProfilePicture = () => {
  return (
    <Image
    src="/images/profile.jpg"
    height={144}
    width={144}
    alt="Eliot"
    />
  )
}

export default ProfilePicture