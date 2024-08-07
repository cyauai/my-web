"use client";

import { useEffect, useState } from "react";
import { ReactTerminal, TerminalContextProvider } from "react-terminal";

function Terminal() {
  const [fileContent, setFileContent] = useState("");

  useEffect(() => {
    const filePath = "/welcome_ascii.txt"; // 替換為你的文件路徑
    fetch(filePath)
      .then((response) => response.text())
      .then((text) => setFileContent(text))
      .catch((error) => console.error("Error fetching the file:", error));
  }, []);

  const commands = {
    help: (
      <table>
        <br />
        <tbody>
          <tr>
            <td
              style={{
                color: "#6A9C9E",
                paddingRight: "24px",
                whiteSpace: "nowrap",
              }}
            >
              <strong>whoami</strong>
            </td>
            <td style={{ paddingLeft: "64px", color: "#E6B9A6" }}>
              Who is Ken Au?
            </td>
          </tr>
          <tr>
            <td
              style={{
                color: "#6A9C9E",
                paddingRight: "24px",
                whiteSpace: "nowrap",
              }}
            >
              <strong>email</strong>
            </td>
            <td style={{ paddingLeft: "64px", color: "#E6B9A6" }}>
              Send email to me
            </td>
          </tr>
          <tr>
            <td
              style={{
                color: "#6A9C9E",
                paddingRight: "24px",
                whiteSpace: "nowrap",
              }}
            >
              <strong>projects</strong>
            </td>
            <td style={{ paddingLeft: "64px", color: "#E6B9A6" }}>
              See my github
            </td>
          </tr>
          <tr>
            <td
              style={{
                color: "#6A9C9E",
                paddingRight: "24px",
                whiteSpace: "nowrap",
              }}
            >
              <strong>banner</strong>
            </td>
            <td style={{ paddingLeft: "64px", color: "#E6B9A6" }}>
              Show the banner
            </td>
          </tr>
          <tr>
            <td
              style={{
                color: "#6A9C9E",
                paddingRight: "24px",
                whiteSpace: "nowrap",
              }}
            >
              <strong>help</strong>
            </td>
            <td style={{ paddingLeft: "64px", color: "#E6B9A6" }}>
              You obviously already know what this does
            </td>
          </tr>
          <tr>
            <td
              style={{
                color: "#6A9C9E",
                paddingRight: "24px",
                whiteSpace: "nowrap",
              }}
            >
              <strong>clear</strong>
            </td>
            <td style={{ paddingLeft: "64px", color: "#E6B9A6" }}>
              Clear terminal
            </td>
          </tr>
          <tr>
            <td
              style={{
                color: "#6A9C9E",
                paddingRight: "24px",
                whiteSpace: "nowrap",
              }}
            >
              <strong style={{ color: "red" }}>danger</strong>
            </td>
            <td style={{ paddingLeft: "64px", color: "#E6B9A6" }}>
              Don&apos;t do this
            </td>
          </tr>
        </tbody>
      </table>
    ),
    email: () => {
      window.location.href = "mailto:cyauai@gmail.com";
    },
    projects: () => {
      window.open("https://github.com/cyauai", "_blank");
    },
    danger: () => {
      window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
    },
    whoami: (
      <div>
        <br />
        <span>
          Hello! My name is Ken, and I am a developer with more than 3 years of
          experience. My strongest area is the frontend part, especially the
          mobile side with Flutter. I am also keen to explore myself
          horizontally. I have side projects using Node.js on the backend side.
          I continually learn and explore new skills. Currently, I am studying
          for the AWS associate certificate and have some experience in DevOps,
          such as setting up CI/CD pipelines and managing infrastructure.
        </span>
        <br />
        <br />
        <span>
          Additionally, I am a firm believer in AI and its potential to change
          the world. I constantly explore different AI tools and try to
          integrate them into my side projects.
        </span>
        <br />
        <br />
        <span>
          Besides my passion for technology, I am also a boxer. I train 4-5 days
          a week and have participated in several competitions. Last year, I was
          just one step away from becoming the 2023 champion, but unfortunately,
          I lost. Nevertheless, I will keep learning and training in both
          software development and boxing.
        </span>
        <br />
        <br />
        <span>
          Feel free to find me for sparring or to exchange any technology ideas
          :)
        </span>
      </div>
    ),
    banner: (
      <div>
        <br />
        <pre>{fileContent}</pre>
      </div>
    ),
  };

  const welcomeMessage = (
    <div>
      <br />
      <pre>{fileContent}</pre>
      <br />
      <p>Welcome to the Ken Au Terminal</p>
      <p>Type &apos;help&apos; to see available commands.</p>
      <br />
    </div>
  );

  return (
    <TerminalContextProvider>
      <ReactTerminal
        commands={commands}
        prompt={"kenau@portfolio:~$"}
        theme={"material-ocean"}
        welcomeMessage={welcomeMessage}
      />
    </TerminalContextProvider>
  );
}

export default Terminal;
