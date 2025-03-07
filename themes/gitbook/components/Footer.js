import { BeiAnGongAn } from '@/components/BeiAnGongAn'
import { siteConfig } from '@/lib/config'
import SocialButton from './SocialButton'
/**
 * 站点也叫
 * @param {*} param0
 * @returns
 */
const Footer = ({ siteInfo }) => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate =
    parseInt(since) < currentYear ? since + '-' + currentYear : currentYear

  return (
    <footer className='z-20 border p-2 rounded-lg bg:white dark:border-black dark:bg-hexo-black-gray justify-center text-center w-full text-sm relative'>
      <SocialButton />

      <div className='flex justify-center'>
        <div>
          <i className='mx-1 animate-pulse fas fa-heart' />{' '}
          <a
            href={siteConfig('LINK')}
            className='underline font-bold text-gray-500 dark:text-gray-300 '>
            {siteConfig('AUTHOR')}
          </a>
          .<br />
        </div>
        © {`${copyrightDate}`}
      </div>






    </footer>
  )
}

export default Footer
