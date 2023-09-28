import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { summarizer, github, studysphere, cinemate, pinterest } from '@/public/assets/projects';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Article Summarizer'
            backgroundImg={summarizer}
            projectUrl='/summarizer'
            tech='React JS'
          />
          <ProjectItem
            title='Github User finder'
            backgroundImg={github}
            projectUrl='/github'
            tech='React JS'

          />
          <ProjectItem
            title='Study Sphere'
            backgroundImg={studysphere}
            projectUrl='/studysphere'
            tech='React JS'

          />
          <ProjectItem
            title='cinemate'
            backgroundImg={cinemate}
            projectUrl='/cinemate'
            tech='React js'

          />
          <ProjectItem
            title='Pinterest Clone'
            backgroundImg={pinterest}
            projectUrl='/pinterest'
            tech='Next JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;