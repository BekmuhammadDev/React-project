import React, { useState } from 'react';
import Card from "@components/ui/pricing_card";
import { Button } from "antd";

const Index = () => {
    const [showMore, setShowMore] = useState(false);

    const cards = [
        { id: 1 }, { id: 2 }, { id: 3 },
        { id: 4 }, { id: 5 }, { id: 6 }
    ];

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <section>
            <div className="container mx-auto max-w-[1440px]">
                <div className='mt-[170px]'>
                    <h1 className='text-center text-[40px] font-bold text-[#252B42] mb-[70px] md:hidden'>Testimonials</h1>

                    
                    <div className='flex justify-center items-center gap-[60px] mb-[58px] flex-wrap'>
                        {cards.slice(0, 3).map(card => (
                            <Card key={card.id} selectID={card.id} />
                        ))}
                    </div>

                  
                    {showMore && (
                        <div className='flex justify-center items-center gap-[60px]  mb-[58px] flex-wrap'>
                            {cards.slice(3).map(card => (
                                <Card key={card.id} selectID={card.id} />
                            ))}
                        </div>
                    )}

                    <div className='flex justify-center items-center mt-[110px] mb-[160px]'>
                        <Button
                            onClick={toggleShowMore}
                            className='w-[325px] h-[68px] rounded-[10px] bg-[#2091F9] text-white text-2xl font-bold'>
                            {showMore ? 'Show Less' : 'More Testimonials'}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Index;
