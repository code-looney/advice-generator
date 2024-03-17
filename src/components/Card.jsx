import React, { useEffect, useState } from 'react';
import Container from './Container';
import Title from './Title';
import Advice from './Advice';
import Button from './Button';
import Icon from './Icon';

const Card = () => {
    const [id, setId] = useState();
    const [advice, setAdvice] = useState('');

    // const handleButtonClick = () => {
    //     fetchData();
    // }

    const fetchData = ( ) => {
        fetch(`https://api.adviceslip.com/advice`)
        .then(res => res.json())
        .then(data => {
            setAdvice(data.slip.advice)
            setId(data.slip.id)
        })
    }


    return (
        <Container className="bg-card w-[450px] flex items-center text-center justify-center rounded-xl text-fontColor text-[25px] px-10">
            <Container className="flex flex-col gap-5 pt-3 translate-y-[24px]">
                <Title className="text-sub tracking-widest uppercase text-[12px]">Advice #{id}</Title>
                <Advice>"{advice}"</Advice>
                <Container className="flex flex-col gap-7 justify-center items-center">
                    <Icon className="rounded-full" iconURL="images/pattern-divider-mobile.svg" alt="" />
                    <Button onFetchDataClick={() => fetchData()} className="p-3 bg-btnColor rounded-full hover:shadow-custom transition ease-in-out">
                        <Icon iconURL="images/icon-dice.svg" />
                    </Button>
                </Container>
            </Container>
        </Container>
    );
};

export default Card;
