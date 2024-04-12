import { Header } from '../atoms/Header'
import { IProject } from '@/types/project.type'
import { SectionWrapper } from '../../hoc'
import Tilt from 'react-parallax-tilt'
import { config } from '../../constants/config'
import { fadeIn } from '../../utils/motion'
import { github } from '../../assets'
import { motion } from 'framer-motion'
import parse from 'html-react-parser'
import { useGetAllProjectsQuery } from '../../store/services/project.service'

const ProjectCard: React.FC<{ index: number } & IProject> = ({ title, techonology, linkCode, sortDesc, images }) => {
  return (
    <motion.div>
      <Tilt>
        <div className='bg-tertiary w-full rounded-2xl p-5 sm:w-[300px] flex flex-col h-[400px]'>
          <div className='relative h-[230px] w-full'>
            <img src={(images as string[])[0]} alt={title} className='object-cover w-full h-full rounded-2xl' />
            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <button
                onClick={() => window.open(linkCode, '_blank')}
                className='flex items-center justify-center w-10 h-10 rounded-full cursor-pointer black-gradient'
              >
                <img src={github} alt='github' className='object-contain w-1/2 h-1/2' />
              </button>
            </div>
          </div>
          <div className='mt-auto '>
            <h3 className='text-[24px] font-bold text-white'>{title}</h3>
            <p className='text-secondary mt-2 text-[14px] line-clamp-2'>{sortDesc && parse(sortDesc)}</p>
            <div className='flex flex-wrap gap-2 mt-4 truncate'>
              {techonology &&
                techonology?.frontend?.slice(0, 3)?.map((tag) => (
                  <p key={tag} className={`text-[14px] capitalize`}>
                    #{tag}
                  </p>
                ))}
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  const { data } = useGetAllProjectsQuery()
  console.log('🚀 ~ Works ~ data:', data)

  return (
    <>
      <Header useMotion={true} {...config.sections.works} />

      <div className='flex w-full'>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]'
        >
          {config.sections.works.content}
        </motion.p>
      </div>

      <div className='flex flex-wrap mt-20 gap-7'>
        {data &&
          data.length > 0 &&
          data.slice(0, 4).map((project, index) => <ProjectCard key={`project-${index}`} index={index} {...project} />)}
      </div>
    </>
  )
}

export default SectionWrapper(Works, '')