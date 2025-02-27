/**
 * 不蒜子统计 访客和阅读量
 * @returns
 */
export default function AnalyticsBusuanzi() {
  return (
    <div className='flex gap-x-1'>
      <span className='hidden busuanzi_container_site_pv whitespace-nowrap'>
      </span>
      <span className='hidden busuanzi_container_site_uv whitespace-nowrap'>
      </span>
    </div>
  )
}
