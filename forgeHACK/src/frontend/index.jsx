import React, { useState } from 'react';
import ForgeReconciler, { Text, Box, Button, UserGroup, User, Strong, Heading, Image, xcss, LinkButton } from '@forge/react';
import { Modal, ModalBody, ModalTransition, ModalTitle, ModalFooter, ModalHeader, Link, Inline } from '@forge/react';

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const [isBoxVisible, setIsBoxVisible] = useState(true);
  const [isNotGoingVisible, setIsNotGoingVisible] = useState(true);
  const [userCount, setUserCount] = useState(7);
  const [isLinkVisible, setIsLinkVisible] = useState(true);

  const handleGoingClick = () => {
    setIsNotGoingVisible(false);
    setUserCount(prevCount => prevCount + 1);
  };

  const handleNotGoingClick = () => {
    setIsBoxVisible(false);
  };

  return (
    <>
      {isBoxVisible && (
        <Box padding="space.200" backgroundColor="color.background.accent.blue.subtlest">
          <Inline spread='space-between'>
            <Box>
              <Text>
                <Strong>10th July 2024</Strong>
              </Text>
              <Box paddingBlock="space.50">
                <Text fontSize="small">10:00 - 16:30</Text>
              </Box>
            </Box>
            <Image
              src="https://www.roomtoread.org/media/l2vhltjx/microsoftteams-image-14.png"
              alt="charity logo"
              size="xsmall"
            />
          </Inline>
          <Box paddingBlockStart='space.150'>
            <Heading as="h3">Book Sale Volunteer</Heading>
            <Box paddingBlock="space.50">
              <Text fontSize="medium">Sydney, Australia</Text>
            </Box>
          </Box>
          <Box paddingBlock="space.200" display="inline-flex" alignItems="center">
            {isNotGoingVisible ? (
              <Button appearance="primary" onClick={handleGoingClick}>Going</Button>
            ) : (
              <Button appearance="warning" onClick={handleGoingClick}>Going</Button>
            )}
            {isNotGoingVisible && (
              <Button onClick={handleNotGoingClick}>
                Not Going
              </Button>
            )}
          </Box>
          <Box>
            <UserGroup>
              {Array.from({ length: userCount }, (_, index) => (
                <User key={index} accountId={`user-${index}`} />
              ))}
            </UserGroup>
          </Box>
          <Box
            backgroundColor="color.background.discovery"
          >
            {isLinkVisible && (
              <LinkButton spacing="none" appearance="link" onClick={handleOpenModal}>
                Learn more
              </LinkButton>
            )}
          </Box>
        </Box>
      )}
      <ModalTransition>
        {isModalOpen && (
          <Modal onClose={handleCloseModal}>
            <ModalHeader>
              <ModalTitle>Book Sale Volunteer</ModalTitle>
            </ModalHeader>
            <ModalBody>

            <Text>
              <Strong>10th July 2024</Strong>
            </Text>
            <Heading as="h6">10:00 - 16:30</Heading>
            <Text>Sydney, Australia</Text>
            <Box paddingBlock="space.200">
              <Button appearance="primary" onClick={handleGoingClick}>Going</Button>
              {isNotGoingVisible && (
                <Button appearance="subtle" onClick={() => { handleNotGoingClick(); handleCloseModal(); }} marginLeft="space.500">
                  Not Going
                </Button>
              )}
            </Box>
            <Text>Join us for a meaningful day at our book sale volunteering event in Sydney, Australia, on July 10th, hosted by 'Educate,' an educational philanthropic partner of Atlassian. From 10 AM to 4:30 PM, you'll have the opportunity to contribute to our mission of promoting education through book sales. Help us organize, sort, and sell books, making education accessible to more individuals. Your support will make a lasting impact on our community's learning initiatives.</Text>
            <Text>
              <Link openNewTab="true" href="https://atlassian.com">Click here</Link> to register for the event!
            </Text>
            <Image
              src="https://sevoice.com.au/wp-content/uploads/2020/12/Lucas-Hutchesson--scaled.jpg"
              alt="Example of an animated GIF depicting Homer Simpson retreating into bushes, referencing the popular 'Homer Simpson disappearing' meme"
            />
            </ModalBody>
            <ModalFooter>
              <Button appearance="subtle" onClick={handleCloseModal}>
                Close
              </Button>
            </ModalFooter>
          </Modal>
        )}
      </ModalTransition>
    </>
  );
};

ForgeReconciler.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
