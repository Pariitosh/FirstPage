import './App.css'
import {Center,Flex,Paper,SegmentedControl,Checkbox,TextInput,Button,Title,Text,Group} from "@mantine/core";
import {useEffect, useRef} from "react";

export function App() {
  const inp=useRef()
  useEffect(()=>{
    inp.current.style.backgroundColor="#535472"
    inp.current.style.borderColor="#272743d"
    
    },)

  return(
    <Center h='100vh' bg='#272743'>
      <Paper bg='#535472' h='70vh' w='70vw' radius='15px' >
        <Flex h='100%'  align='center' justify='center' gap="10%">
          <Flex w='30%' justify='start' direction='column' align='start' h='70%'   gap='2%'>
            <Title order={1}>Help us do more</Title>
            <Text order={6}>We'll get right to this point: we're asking you to support us. We're a nonprofit that relies on
              support from people like you. if everyone reading this gives $10 monthly, we can thrive for years.
            </Text>
          </Flex>
          <Flex w='30%' h='70%' direction='column' justify='start' align='start' gap='8%'>
            <div>
            <p>Select gift frequency</p>
              <SegmentedControl color='#535472' bg='#272743' radius="xl" size='md' data={['Monthly', 'One Time']} />
            </div>
            <div>
              <p>Select amount (in US dollars)</p>
              <Group  className='amount'>
                <Button  variant="outline" radius="xl">$10</Button>
                <Button  variant="outline" radius="xl">$20</Button>
                <Button  variant="outline" radius="xl">$30</Button>
                <Button  variant="outline" radius="xl">$40</Button>
                <Button  variant="outline" radius="xl">Other</Button>
              </Group>
            </div>
            <Checkbox color='blue' label="Yes, I'll generously add $0.75 each month to cover the transaction fees"  ></Checkbox>
            <div>
              <TextInput ref={inp}  label='Name' placeholder='Enter your name'></TextInput>
              <p style={{color:'#76A4F6'}}>Click here to give in honor of other person</p>
            </div>
            <Button size='xl'>Donate Now</Button>
          </Flex>
        </Flex>
      </Paper>
      
    </Center>
    )
}