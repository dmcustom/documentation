import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>

        <p className="hero__subtitle">
          {siteConfig.tagline}
        </p>

        {/* 🔥 Discord Badge */}
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <a
            href="https://discord.gg/NGRgd9rv8G"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.shields.io/discord/1162524097830461440?style=for-the-badge&logo=discord&label=Discord&color=5865F2&labelColor=2f3136"
              alt="Discord"
            />
          </a>
        </div>

      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />	  	  
	  <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
