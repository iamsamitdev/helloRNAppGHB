import { View, Text, StyleSheet, Button } from 'react-native'
import { useState, useEffect } from 'react'
import React from 'react'
import About from './About'
import mystyles from './Style'
import Greeting from './Greeting'

const App = () => {

  // สร้างตัวแปร counter และฟังก์ชัน setCounter ในการเปลี่ยนค่า counter โดยให้ค่าเริ่มต้นเป็น 0
  const [counter, setCounter] = useState(0)

  const [timer, setTimer] = useState(0)
  // การใช้ useEffect ในการทำงานหลังจาก render แล้ว
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer(prevCounter => prevCounter + 1)
    }, 1000)
    return () => clearInterval(intervalId)
  }, [])

  // ประกาศเป็น object
  const textTitle = {
    color: 'blue',
    fontSize: 40
  }

  return (
    <View style={styles.container}>
      <Text style={textTitle}>Timer: {timer}</Text>
      <Button title="Counter Up" onPress={() => setCounter(counter+1)} />
      <Text style={textTitle}>Counter: {counter}</Text>
      <Button title="Counter Down" onPress={() => setCounter(counter-1)} />
      <Text style={{color:'red', fontSize:30}}>Hello React Native</Text>
      <Text style={textTitle}>Welcome to MyApp</Text>
      <Text style={styles.textHeader}>This is my text</Text>
      <Text style={[textTitle, styles.textdesc, {backgroundColor: 'pink'}]}>This is multi style</Text>
      <Text style={[mystyles.container, mystyles.textHeader]}>My Style</Text>
      <Greeting name='John' age={20} />
      <Greeting name='Samit'/>
      {/* <Greeting name='Somsak' age='ok'/> */}
      <About />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'teal',
    padding: 20,
  },
  textHeader: {
    color: 'white',
    fontSize: 30,
  },
  textdesc: {
    borderWidth: 1,
    borderColor: 'yellow',
    borderStyle: 'dashed',
  }
})

export default App