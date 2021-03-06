import React from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import { Redirect } from "@docusaurus/router";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return <Redirect to="/dev-blog/blog" />;
}

export default Home;
