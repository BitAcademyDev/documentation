import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import Translate, {translate} from '@docusaurus/Translate';


function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{translate({message: "site.Title"})}</h1>
        <p className="hero__subtitle">{translate({message: "site.TagLine"})}</p>
        <div className={styles.buttons}>
          <Link
            to="/docs/students">
              <Translate id="homePage.diveIn">
                  Dive in
              </Translate>
              &nbsp;🧑‍🎓
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title={translate({message: "site.Title"})}
      description={translate({message: "site.TagLine"})}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
