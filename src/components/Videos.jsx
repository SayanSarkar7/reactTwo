import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import "../video.css"

const Videos = () => {
    const videosArr = [
        'https://cdn.pixabay.com/video/2024/06/20/217490_large.mp4',
        'https://cdn.pixabay.com/video/2024/09/06/230060_large.mp4',
        'https://cdn.pixabay.com/video/2024/08/20/227567_large.mp4',
        'https://cdn.pixabay.com/video/2024/08/30/228847_large.mp4',
        'https://cdn.pixabay.com/video/2024/06/17/217115_large.mp4',
        'https://cdn.pixabay.com/video/2024/03/03/202749-918944227_large.mp4',
        'https://cdn.pixabay.com/video/2024/03/04/202982-919365848_large.mp4',
      ];
    const [videoSrc,setVideoSrc]=useState(videosArr[0]);
    console.log(videosArr[0]);
    
  return (
    <Stack minH={'100vh'} direction={['column', 'row']}>
      <VStack  w={'full'} alignItems={'flex-start'} p={'8'} overflowY={'auto'}>
        <video
          controls
          controlsList={'nodownload'}
          src={videoSrc}
          style={{ width: '100%', height:'80vh' }}
          
          
        ></video>
        {/* <iframe className='my-custom-class' width="560" height="315" src="https://www.youtube.com/embed/rOpRl6nZbWU?si=bdPzOd6CUB9qysrJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
        <Heading>Sample Heading</Heading>
        <Text>
          This is a sample video for testing and demo.A news video is an
          audiovisual report that presents current events, breaking news, or
          significant updates to a broad audience. These videos typically
          combine live footage, images, interviews, voiceovers, and commentary
          to provide a well-rounded view of the story being reported. News
          videos are produced by media outlets and distributed on television,
          news websites, and increasingly on social media platforms such as
          YouTube, Facebook, and Twitter, where they reach a global audience
          almost instantly. The purpose of a news video is to inform viewers
          quickly and accurately about the most important issues of the day.
          Whether covering politics, social issues, economics, entertainment, or
          international events, news videos aim to provide clear and concise
          updates while maintaining journalistic integrity. The combination of
          visuals and sound makes news videos more impactful than written
          reports, as they can show real-time events, emotional reactions, or
          on-the-ground conditions, adding a layer of authenticity to the story.
          News videos typically feature dynamic editing and fast-paced visuals
          to keep the audience engaged while providing necessary context and
          background information. Interviews with experts, witnesses, or key
          figures add depth and multiple perspectives to the story. With the
          rise of social media, news videos have become shorter and more
          shareable, designed to catch attention quickly. Whether it's breaking
          news or a deeper dive into a significant event, news videos are a
          powerful tool for delivering information to viewers in an engaging,
          accessible format.
        </Text>
      </VStack>
      <VStack w={['full', 'xl']} alignItems={'stretch'} p={'8'}  overflowY={'auto'} spacing={'8'}>
        {videosArr.map((item,index)=>(
          <Button variant={'ghost'} colorScheme='purple' onClick={()=>setVideoSrc(item)} >
            vid {index+1}
            {/* {item} */}
        </Button>
        ))}
      </VStack>
    </Stack>
  );
};

export default Videos;
