import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';


import {translate} from '@docusaurus/Translate';

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    link: string;
};

const FeatureList: FeatureItem[] = [
    {
        title: translate({message: 'homePage.features.exercises.title'}),
        Svg: require('@site/static/img/homepage/code.svg').default,
        link: "docs/exercises"
    },
    {
        title: translate({message: 'homePage.features.gamification.title'}),
        Svg: require('@site/static/img/homepage/gamification.svg').default,
        link: "docs/gamification"
    },
    {
        title: translate({message: 'homePage.features.reviews.title'}),
        Svg: require('@site/static/img/homepage/reviews.svg').default,
        link: "docs/reviews"
    },
    {
        title: translate({message: 'homePage.features.attendance.title'}),
        Svg: require('@site/static/img/homepage/attendance.svg').default,
        link: "docs/attendance"
    },
    {
        title: translate({message: 'homePage.features.surveys.title'}),
        Svg: require('@site/static/img/homepage/surveys.svg').default,
        link: "docs/surveys"
    },
    {
        title: translate({message: 'homePage.features.1-on-1.title'}),
        Svg: require('@site/static/img/homepage/1-on-1.svg').default,
        link: "docs/1-in-1"
    }
];

function Feature({title, Svg, link}: FeatureItem) {
    return (
        <a href={link} className={clsx('padding--l card', styles.feature)}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img"/>
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
            </div>
        </a>
    );
}

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="flex gap-lg wrap">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
