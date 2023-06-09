"use client";
import { Container, Link, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function Home() {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("../../asset/raphael_cv.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "raphael_cv.pdf";
        alink.click();
      });
    });
  };
  return (
    <Container centerContent>
      <Text>About me</Text>
      <div>
        <a href="/raphael_cv.pdf" target="_blank" rel="noopener noreferrer">
          Open PDF
        </a>
      </div>
    </Container>
  );
}
