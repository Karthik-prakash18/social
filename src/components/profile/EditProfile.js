import { Button, FormControl, FormLabel, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import React from 'react'
import Avatar from './Avatar';
import { useAuth } from '../../hooks/auth';
import { useUpdateAvatar } from '../../hooks/users';

export default function EditProfile({isOpen, onClose}) {
  const {user, isLoading: authLoading} = useAuth();
  const {setFile, updateAvatar, isLoading: fileLoading, fileURL} = useUpdateAvatar(user?.id);

  function handleChange(e) {
    setFile(e.target.files[0]);
  }

  if(authLoading) return "Loading...";

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>Edit Profile</ModalHeader>
            <ModalCloseButton avatar />
            <ModalBody>
                <HStack spacing="5">
                    <Avatar user={user} overrideAvatar={fileURL} />
                    <FormControl py="4">
                        <FormLabel htmFor="picture">Change Avatar</FormLabel>
                        <input type="file" accept="image/*" onChange={handleChange} />
                    </FormControl>
                </HStack>
                <Button loadingText="Uploading" w="full" my="6" colorScheme="teal"
                    onClick={updateAvatar} isLoading={fileLoading}>Save</Button>
            </ModalBody>
        </ModalContent>
    </Modal>
  );
}
