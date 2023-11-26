import { useState } from 'react'
import { Box, Button, AbsoluteCenter, Text } from '@chakra-ui/react'




function App({ value }) {

  const [countador, setCountador] = useState(value)

  const incrementar = (valor) => {
    setCountador(countador + valor)
  }
  const resetear = () => {
    setCountador(0)
  }
  const decrementar = (valor = 1, negativo) => {
    if (!negativo && countador - valor < 0) {
      setCountador(0)
      return
    }
    setCountador(countador - valor)
  }


  return (
    <Box w='100%' h='100%' bgGradient='linear(red.100 0%, orange.100 25%, yellow.100 50%)'>
      <Box textAlign="center">

        <Text as={"h1"} fontSize={"65px"} m={"5px"}>Contador</Text>
        <br />
        <Text fontSize={"50px"} m={"5px"}>{countador}</Text>

      </Box>

      <Box position='relative' h='100px' m={"50px"} bgGradient='linear(red.100 0%, orange.100 25%, yellow.100 50%)'>
        <AbsoluteCenter bg='white' p='4' color='white' axis='both' bgGradient='linear(red.100 0%, orange.100 25%, yellow.100 50%)'>

          <Button onClick={() => incrementar(1)}
            size='md'
            height='48px'
            width='100px'
            border='2px'
            borderColor='grey'
            margin="5px"

          >
            Mas +
          </Button>
          <Button
            size='md'
            height='48px'
            width='100px'
            border='2px'
            borderColor='grey'
            m={"5px"}
            onClick={() => resetear()}
          >
            Reset
          </Button>
          <Button
            onClick={() => decrementar(1, false)}
            size='md'
            height='48px'
            width='100px'
            border='2px'
            borderColor='gray'
            margin="5px"
          >
            Menos -
          </Button>
        </AbsoluteCenter>
      </Box>

    </Box>
  )
}

export default App
