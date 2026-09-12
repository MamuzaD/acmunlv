
import AnimatedSVG from '@/components/animated-svg'
import Footer from '@/components/layout/footer'

export default function DefaultLayout({ children }: { children: React.ReactNode }) {


  return (
    <>
      <AnimatedSVG />
      <main className="grow">{children}</main>
      <Footer />
    </>
  )
}
