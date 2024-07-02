import React, { useState } from 'react';
import ForgeReconciler, { Text, Box, Button, UserGroup, User, Strong, Heading, Image, xcss, LinkButton } from '@forge/react';
import { Modal, ModalBody, ModalTransition, ModalTitle, ModalFooter, ModalHeader, Link, Inline, Stack } from '@forge/react';

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const [isBoxVisible, setIsBoxVisible] = useState(true);
  const [isNotGoingVisible, setIsNotGoingVisible] = useState(true);
  const [userCount, setUserCount] = useState(7);
  const [isLinkVisible, setIsLinkVisible] = useState(true);
  const [isNotGoingVisible2, setIsNotGoingVisible2] = useState(true);
  const [userCount2, setUserCount2] = useState(4);
  const [isBoxVisible2, setIsBoxVisible2] = useState(true);

  const handleGoingClick = () => {
    setIsNotGoingVisible(false);
    setUserCount(prevCount => prevCount + 1);
  };

  const handleNotGoingClick = () => {
    setIsBoxVisible(false);
  };

  const handleGoingClick2 = () => {
    setIsNotGoingVisible2(false);
    setUserCount2(prevCount => prevCount + 1);
  };

  const handleNotGoingClick2 = () => {
    setIsBoxVisible2(false);
  };

  const cardBorder = xcss({
    borderRadius: 'border.radius',
    marginBottom: 'space.200'
  });

  const descriptionStyling = xcss({
    borderRadius: 'border.radius',
    backgroundColor: 'color.background.discovery',
    padding: 'space.300'
  })

  return (
    <>
      <Stack spread="space-between">
      <Box>
        {isBoxVisible && (
          <Box padding="space.200" backgroundColor="color.background.accent.blue.subtlest" xcss={cardBorder}>
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
                src="https://www.experienceeducate.org/s/Educate-logo-vertical-box-no-mission-no-background.png"
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
            <Box>
              {isLinkVisible && (
                <LinkButton spacing="none" appearance="link" onClick={handleOpenModal}>
                  Learn more
                </LinkButton>
              )}
            </Box>
          </Box>
        )}
      </Box>
      {isBoxVisible2 && (
        <Box padding="space.200" backgroundColor="color.background.accent.blue.subtlest" xcss={cardBorder}>
          <Inline spread='space-between'>
            <Box>
              <Text>
                <Strong>15th July 2024</Strong>
              </Text>
              <Box paddingBlock="space.50">
                <Text fontSize="small">12:00 - 17:00</Text>
              </Box>
            </Box>
            <Image
              src="https://www.roomtoread.org/media/l2vhltjx/microsoftteams-image-14.png"
              alt="charity logo"
              size="xsmall"
            />
          </Inline>
          <Box paddingBlockStart='space.150'>
            <Heading as="h3">Booth at Sydney Fair Volunteer</Heading>
            <Box paddingBlock="space.50">
              <Text fontSize="medium">The Rocks, Australia</Text>
            </Box>
          </Box>
          <Box paddingBlock="space.200" display="inline-flex" alignItems="center">
            {isNotGoingVisible2 ? (
              <Button appearance="primary" onClick={handleGoingClick2}>Going</Button>
            ) : (
              <Button appearance="warning" onClick={handleGoingClick2}>Going</Button>
            )}
            {isNotGoingVisible2 && (
              <Button onClick={handleNotGoingClick2}>
                Not Going
              </Button>
            )}
          </Box>
          <Box>
            <UserGroup>
              {Array.from({ length: userCount2 }, (_, index) => (
                <User key={index} accountId={`user-${index}`} />
              ))}
            </UserGroup>
          </Box>
          <Box>
            {isLinkVisible && (
              <LinkButton spacing="none" appearance="link" onClick={handleOpenModal}>
                Learn more
              </LinkButton>
            )}
          </Box>
        </Box>
      )}
      </Stack>
      <ModalTransition>
        {isModalOpen && (
          <Modal onClose={handleCloseModal}>
            <ModalHeader>
              <ModalTitle>Book Sale Volunteer</ModalTitle>
            </ModalHeader>
            <ModalBody>
              <Box padding="space.0">
                <Image
                  src="https://www.lifelinesouthcoast.org.au/wp-content/uploads/2021/11/LLSC_Homepage_Volunteer.jpg"
                  alt="Event banner"
                />
              </Box>
              <Text>
                <Strong>10th July 2024</Strong>
              </Text>
              <Heading as="h6">10:00 - 16:30</Heading>
              <Text>Cnr of George and, Bathurst St, Sydney NSW 2000, Australia</Text>
              <Box paddingBlock="space.200">
                <Button appearance="primary" onClick={handleGoingClick}>Going</Button>
                {isNotGoingVisible && (
                  <Button onClick={() => { handleNotGoingClick(); handleCloseModal(); }} marginLeft="space.500">
                    Not Going
                  </Button>
                )}
              </Box>
              <Box xcss={descriptionStyling}>
                <Heading as="h6">What To Expect?</Heading>
                <Text>Join us for a meaningful day at our book sale volunteering event in Sydney, Australia, on July 10th, hosted by 'Educate,' an educational philanthropic partner of Atlassian. From 10 AM to 4:30 PM, you'll have the opportunity to contribute to our mission of promoting education through book sales. Help us organize, sort, and sell books, making education accessible to more individuals. Your support will make a lasting impact on our community's learning initiatives.</Text>
              </Box>
              <Text>
                <Link openNewTab="true" href="https://www.lifelinenb.org.au/support-lifeline/volunteering-with-us/">Click here</Link> to register for the event!
              </Text>
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

