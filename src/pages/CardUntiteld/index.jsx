import React from 'react';
import { Header } from '@/components/layouts';
import { Button, Stack, } from '@chakra-ui/react';
import Card from "@components/ui/untitledCard";
import { ChevronLeftIcon, ChevronRightIcon, } from '@chakra-ui/icons'
import { Link, useNavigate } from 'react-router-dom';


const index = () => {

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };



    return (
        <>
            <Header />
            <main>
                <section>
                    <div className='container mx-auto max-w-[1440px] '>
                        <div>
                            <div className='grid grid-cols-2  justify-center gap-x-[191px]  p-20'>
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                

                            </div>
                        </div>

                        <div className='flex justify-center mt-[70px] mb-[74px]'>
                            <Stack direction='row' spacing={1} gap={500} alignItems='center'>
                                <Link >
                                    <Button onClick={handleGoBack} leftIcon={<ChevronLeftIcon boxSize={7} />} w={145} h='60px' colorScheme='blue' variant='outline' className='text-base font-bold'>
                                        Back
                                    </Button>
                                </Link>
                                <Button rightIcon={<ChevronRightIcon boxSize={7} />} w={145} h='60px' type='submit' colorScheme='blue' variant='solid' className='text-base font-bold'>
                                    Create
                                </Button>
                            </Stack>
                        </div>
                    </div>

                </section>
            </main>

        </>
    );
};

export default index;