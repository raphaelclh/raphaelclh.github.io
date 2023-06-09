"use client";

import {
  Box,
  Heading,
  Text,
  Image,
  Flex,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";

import Section from "../components/section";
import Timeline from "@/components/timeline";

type SizeValue = {
  base: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
};

type SizeKey = "normal" | "subSubSection" | "subSectionTitle";

type TextSizePropsAlias = {
  [key in SizeKey]: SizeValue;
};

export interface TextSizeProps extends TextSizePropsAlias {}

const Home = () => {
  const textSize: TextSizeProps = {
    normal: {
      base: "10px",
      sm: "13px",
      md: "18px",
      lg: "20px",
      xl: "22px",
    },
    subSubSection: {
      base: "14px",
      sm: "18px",
      md: "22px",
      lg: "26px",
      xl: "30px",
    },
    subSectionTitle: {
      base: "20px",
      sm: "24px",
      md: "28px",
      lg: "36px",
      xl: "42px",
    },
  };

  return (
    <Box>
      <Section marginTop="-50px" h="100vh" w="100vw" padding={"50px"}>
        <Box display={"flex"} justifyContent={"center"}>
          <Box>
            <Heading
              fontSize={textSize.subSectionTitle}
              animation="typing 3.5s steps(40, end), blink-caret .75s  infinite"
              overflow={"hidden"}
              whiteSpace={"nowrap"}
              margin={"0 auto"}
              borderRight={".15em solid orange"}
            >
              Hi. I&apos;m Raphael
            </Heading>
          </Box>
        </Box>
        <Text textAlign={"center"} fontSize={textSize.normal}>
          Software Engineer in Singapore
        </Text>
      </Section>
      <Section
        // h="1200vh"
        w="100vw"
        bg="palette.200"
        makeAbsoluteCenter={true}
        headerComponent={
          <Flex h={16} alignItems={"center"} justifyContent={"center"}>
            <Text textAlign={"center"} fontSize={textSize.subSectionTitle}>
              About me
            </Text>
          </Flex>
        }
      >
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"center"}
          marginTop={{ base: "70px", sm: "70px" }}
          direction={{ base: "column-reverse", md: "row" }}
        >
          <Box p={4} wordBreak={"break-word"} width={{ md: "80%", lg: "60%" }}>
            <Text fontSize={textSize.normal}>
              A seasoned full-stack software engineer with a deep focus on
              problem-solving and architectural design. With significant
              experience in diverse roles across multiple organizations, I have
              developed a strong acumen for delivering scalable applications and
              efficient cloud solutions. <br />
              <br />
              Recognized for my contributions to a paper on Edge Computing in
              the esteemed IEEE Globecom 2019, I am a continuous learner aiming
              to implement innovative solutions to improve business operations
              and customer experience.
            </Text>
          </Box>
          <Box>
            <Image
              borderRadius="full"
              boxSize={{ base: "150px", md: "200px", lg: "250px" }}
              src="/profile_pic_1.jpg"
              alt="Profile Picture"
              marginLeft={"auto"}
              marginRight={"auto"}
            />
            <Box m={4}></Box>
            <Text textAlign={"center"} fontSize={textSize.subSectionTitle}>
              Raphael Chua
            </Text>

            <Link
              color="teal.500"
              href="/raphael_cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Text textAlign={"center"} fontSize={textSize.normal}>
                Download resume
              </Text>
            </Link>
          </Box>
        </Flex>
      </Section>
      <Section
        makeAbsoluteCenter={false}
        w="100vw"
        paddingBottom="100px"
        headerComponent={
          <Flex h={16} alignItems={"center"} justifyContent={"center"}>
            <Text textAlign={"center"} fontSize={textSize.subSectionTitle}>
              Work Experience & Education
            </Text>
          </Flex>
        }
      >
        <Timeline textSize={textSize}></Timeline>
      </Section>
    </Box>
  );
};

export default Home;
