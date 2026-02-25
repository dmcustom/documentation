import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'User Guide',
    image: require('@site/static/img/dismay-good.png').default,
    description: (
      <>
Includes complete guides on installation, usage, and customization for both the PCS and LMS.
	  </>
    ),
  },
  {
    title: 'FAQ / Troubleshooting',
    image: require('@site/static/img/dismay-what.png').default,
    description: (
      <>
Got questions? Our Frequently Asked Questions and troubleshooting solutions are here to help.
	  </>
    ),
  }, 
  {
    title: 'Customization',
    image: require('@site/static/img/dismay-yay.png').default,
    description: (
      <>
If you’re looking for a guide to customize the system, we’ve got you covered.
	  </>
    ),
  },  
];

function Feature({Svg, image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Svg && (
          <Svg className={styles.featureSvg} role="img" />
        )}
        {image && (
          <img
            src={image}
            className={styles.featureSvg}
            alt={title}
          />
        )}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
