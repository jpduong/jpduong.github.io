"use client";

import {
  Avatar,
  Button,
  Container,
  HStack,
  Heading,
  IconButton,
  ListItem,
  Text,
  UnorderedList,
  useColorMode,
  Link,
  VStack,
  Divider,
  SimpleGrid,
  Box,
} from "@chakra-ui/react";
import { ContentBlock } from "./components/ui/content-block";
import {
  CONTENT_BUILDING,
  CONTENT_PROJECTS,
  CONTENT_POSTS,
  LINK_LEONARDO,
  LINK_LINKED_IN,
  LINK_INSTAGRAM,
  LINK_GITHUB,
} from "./constants";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <main>
      <Container pt={32}>
        <HStack justify="space-between" align="center">
          <Avatar name="James Duong" src="avatar.jpg" size="2xl" mb={8} />
          <VStack>
            <Link href={LINK_INSTAGRAM} target="_blank">
              <IconButton
                icon={<FaInstagram />}
                aria-label="instagram"
                variant="outline"
              />
            </Link>
            <Link href={LINK_LINKED_IN} target="_blank">
              <IconButton
                icon={<FaLinkedin />}
                aria-label="linkedin"
                variant="outline"
              />
            </Link>
            <Link href={LINK_GITHUB} target="_blank">
              <IconButton
                icon={<FaGithub />}
                aria-label="github"
                variant="outline"
              />
            </Link>
          </VStack>
        </HStack>
        <HStack justify={"space-between"} mb={4}>
          <Heading>jd</Heading>
          <IconButton
            variant="outline"
            onClick={toggleColorMode}
            aria-label="toggle color mode button"
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          />
        </HStack>
        <UnorderedList mb={16}>
          <ListItem>
            senior software engineer @{" "}
            <Link href={LINK_LEONARDO} color="blue.300">
              leonardo.ai
            </Link>
          </ListItem>
          <ListItem>passionate in tech + basketball</ListItem>
        </UnorderedList>
        {/* <Text fontWeight="bold" color="grey" mb={4}>
          Posts
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
          {CONTENT_PROJECTS.map((content, idx) => (
            <ContentBlock content={content} key={idx} />
          ))}
        </SimpleGrid> */}
      </Container>
    </main>
  );
}
