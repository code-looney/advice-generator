import React, {useEffect, useState} from 'react';
import Container from './Container';
import Title from './Title';
import Advice from './Advice';
import Button from './Button';
import Icon from './Icon';

const Card = () => {
    const [id, setId] = useState();
    const [advice, setAdvice] = useState();


    const fetchData = () => {
            console.log('test')
            }

    
        // useEffect(() => {
        //     const fetchData = () => {
        //         fetch(`https://api.adviceslip.com/advice`)
        //         .then(res => res.json())
        //         .then(data => {
        //             setId(data.slip.id)
        //             setAdvice(data.slip.advice)
        //         })
        //     }
        //     fetchData()
        // }, [id, advice])


  return (
    <Container className={`bg-card w-[450px] flex items-center text-center justify-center rounded-xl text-fontColor text-[25px] px-10`}>
        <Container className='flex flex-col gap-5 pt-3 translate-y-[24px]'>
            <Title className={`text-sub tracking-widest uppercase text-[12px]`}>Advice #{id && id}</Title>
            <Advice>"{advice}"</Advice>
            <Container className='flex flex-col gap-7 justify-center items-center'>
                <Icon className='rounded-full' iconURL={`public/images/pattern-divider-mobile.svg`} alt="" />
                <Button onClick={() => console.log('test')} className={`p-3 bg-btnColor rounded-full hover:shadow-custom transition ease-in-out`}><Icon iconURL={`public/images/icon-dice.svg`} /></Button>
            </Container>
        </Container>
    </Container>
  )
}

export default Card