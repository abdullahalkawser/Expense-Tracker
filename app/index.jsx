import { Image, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useRouter } from 'expo-router'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/welcome')
    }, 1000) //

    return () => clearTimeout(timer)
  }, [])

  return (
    <View className='flex-1 justify-center items-center '>
      <Image
        className=''
        resizeMode='contain'
        source={require('../assets/images/splashImage.png')}
      />
    
    </View>
  )
}
