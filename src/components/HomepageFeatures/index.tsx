import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';


import {translate} from '@docusaurus/Translate';

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: translate({message: 'homePage.features.learnByDoing.title'}),
        Svg: require('@site/static/img/homepage/programming.svg').default,
        description: (
            <>
                {translate({message: 'homePage.features.learnByDoing.content'})}
            </>
        ),
    },
    {
        title: translate({message: 'homePage.features.autonomy.title'}),
        Svg: require('@site/static/img/homepage/choices.svg').default,
        description: (
            <>
                {translate({message: 'homePage.features.autonomy.content'})}
            </>
        ),
    },
    {
        title: translate({message: 'homePage.features.community.title'}),
        Svg: require('@site/static/img/homepage/community.svg').default,
        description: (
            <>
                {translate({message: 'homePage.features.community.content'})}
            </>
        ),
    },
];

function Feature({title, Svg, description}: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img"/>
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
