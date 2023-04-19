import { WorksCard } from '@/components/works';
import { Work } from '@/services/works/types';
import React from 'react';
const dummyWorks: Work[] = [
  {
    title: 'title1',
    description: 'description1',
    tags: ['tag1', 'tag2'],
    thumbnail: 'https://picsum.photos/200/300',
    githubLink: '',
    demoLink: '',
  },
  {
    title: 'title2',
    description: 'description2',
    tags: ['tag1', 'tag2'],
    thumbnail: 'https://picsum.photos/200/300',
    githubLink: '',
    demoLink: '',
  },
];

const WorksList = () => {
  return (
    <>
      {dummyWorks.map((work) => (
        <WorksCard work={work} />
      ))}
    </>
  );
};

export default WorksList;
