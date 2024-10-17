import React from 'react';
import { Header, Footer } from '@/components/layouts';
import { Button } from "antd";
import creatLogo from "../../assets/img/creatLogo.png"
import { Card, CardHeader, CardBody, CardFooter,Heading,Text, Center } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const index = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <div className='flex justify-center gap-x-[200px] mt-[188px] mb-[147px]'>
            <Card align='center' width={400} height={400}>
              <CardHeader marginTop={26} padding={0}>
                <img src={creatLogo} alt="#" />
              </CardHeader>
              <CardBody padding={0}>
                <Text textAlign='Center' fontSize={20} fontWeight={600}>Create your Website <br /> Design</Text>
              </CardBody>
              <CardFooter>
                <Link to='/createWebPage'><Button className='bg-[#2187FF] text-white w-[236px] h-[68px] rounded-[10px] text-2xl font-bold'>Start</Button></Link>
              </CardFooter>
            </Card>

            <Card align='center' width={400} height={400}>
              <CardHeader marginTop={26} padding={0}>
                <img src={creatLogo} alt="#" />
              </CardHeader>
              <CardBody padding={0}>
                <Text textAlign='Center' fontSize={20} fontWeight={600}>Create your Logo <br /> Design</Text>
              </CardBody>
              <CardFooter>
                <Link to='/creatLogo'><Button className='bg-[#2187FF] text-white w-[236px] h-[68px] rounded-[10px] text-2xl font-bold'>Start</Button></Link>
              </CardFooter>
            </Card>

          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}

export default index;