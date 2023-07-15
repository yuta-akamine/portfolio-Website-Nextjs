import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Box, Typography } from '@mui/material'
import Header from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    
    <Box>

      <Header />

      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        
        <Box>

          <div className="row">

            <h3 className="subtitle bottomspace col-sm-2">Home</h3>

          </div>

          <Typography component="p" className="txtBox">

            お仕事に取り組む際、依頼された方の目的を理解し達成するために最適な手段を考え、
            {/* <br> */}
            周りと協力しながら自分ができることに全力で取り組み、依頼された方の目的を達成する。
            {/* <br> */}
            人との繋がりを大切にし、目的を理解し、より良いものを目指し改善していく。
            {/* <br> */}
            そのようにお仕事に取り組んでいきたいと考えています。

          </Typography>

        </Box>

      </main>

    </Box>
  )
}
