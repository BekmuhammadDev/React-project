import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
} from '@chakra-ui/react'
import {items} from "@mocks/db"
import "./style.scss"

const index = ({selectedId }) => {
    const selectedItem = items.find(item => item.id === selectedId);
    return (
        <>
            <Accordion allowToggle>
               
                    <AccordionItem key={selectedItem.id} border='none'>
                        <h2 className='text-base font-bold'>
                            <AccordionButton>
                                <Box as="span"  textAlign="left">
                                {selectedItem.title}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        {selectedItem.content}
                        </AccordionPanel>
                    </AccordionItem>
                
            </Accordion>

        </>
    );
};

export default index;


//     const selectedItem = items.find(item => item.id === selectedId);
//     return (
//         <>
//             <Accordion allowToggle>
               
//                     <AccordionItem key={selectedItem.id} border='none'>
//                         <h2 className='text-base font-bold'>
//                             <AccordionButton>
//                                 <Box as="span"  textAlign="left">
//                                 {selectedItem.title}
//                                 </Box>
//                                 <AccordionIcon />
//                             </AccordionButton>
//                         </h2>
//                         <AccordionPanel pb={4}>
//                         {selectedItem.content}
//                         </AccordionPanel>
//                     </AccordionItem>
                
//             </Accordion>

//         </>
//     );