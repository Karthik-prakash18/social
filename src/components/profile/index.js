import { Button, Divider, Flex, HStack, Stack, Text, useDisclosure } from '@chakra-ui/react';
import React from 'react'
import { useParams } from 'react-router-dom';
import { usePosts } from '../../hooks/posts';
import PostsLists from '../post/PostsLists';
import Avatar from './Avatar';
import { useUser } from '../../hooks/users';
import { format } from 'date-fns';
import EditProfile from './EditProfile';
import { useAuth } from '../../hooks/auth';

export default function Profile() {
  const {id} = useParams();
  const {posts, isLoading: postsLoading} = usePosts(id);
  const {user, isLoading: userLoading} = useUser(id);
  const {user: authUser, isLoading: authLoading} = useAuth();
  const {isOpen, onOpen, onClose} = useDisclosure();

  if(userLoading) return "Loading...";



  return (
    <Stack spacing="5">
        <Flex p={["4", "6"]} pos="relative" align="center">
            {/* Insert Avatar here (size 2xl) */}
            <Avatar size="2xl" user={user} />

            {!authLoading && (authUser.id === user.id) && (<Button pos="absolute" mb="2" top="6" right="6" colorScheme="teal" onClick={onOpen} >
                Change Avatar
            </Button>)}

            <Stack ml="10">
                {/* @username here */}
                <Text fontSize="2xl">{user.username}</Text>
                <HStack spacing="10">
                    <Text color="gray.700" fontSize={["sm", "lg"]}>
                        Posts: {posts.length}
                    </Text>
                    <Text color="gray.700" fontSize={["sm", "lg"]}>
                        Likes: {user.likes}
                    </Text>
                    <Text color="gray.700" fontSize={["sm", "lg"]}>
                        Joined: {format(user.date, "MMMM YYY")}
                    </Text>
                </HStack>
            </Stack>

            <EditProfile isOpen={isOpen} onClose={onClose} />
        </Flex>
        <Divider />
        {/* <Text>Posts here</Text> */}
        {postsLoading ? (<Text>Posts are Loading...</Text>) : (<PostsLists posts={posts} />)}
        
    </Stack>
  );
}
