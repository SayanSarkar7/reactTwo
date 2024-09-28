import { Button, Container, HStack, Input, VStack } from '@chakra-ui/react'
import { pointer } from '@testing-library/user-event/dist/cjs/pointer/index.js';
import React from 'react'
import {AiOutlineCloudUpload} from "react-icons/ai";

const Upload = () => {
  return (
    <Container p={'16'} h={'100vh'} maxW={"container.xl"}>
        <VStack color={"purple.500"} h={"full"} justifyContent={"center"}>
            <AiOutlineCloudUpload  size={'10vmax'} />
            <form>
                <HStack>
                    <Input required type={'file'} css={{
                        "&::file-selector-button":{
                            border:"none",
                            width: "calc(50% + 36px)",
                            height:"100%",
                            marginLeft:"-18px",
                            color:"purple",
                            backgroundColor:"white",
                            cursor:"pointer"

                        }
                    }} />
                    <Button>Upload</Button>
                </HStack>
            </form>
        </VStack>
    </Container>
  )
}

export default Upload;