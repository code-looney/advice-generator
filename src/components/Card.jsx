import React, {useEffect, useState} from 'react';
import Container from './Container';
import Title from './Title';
import Advice from './Advice';

const Card = () => {
    const [id, setId] = useState();
    const [advice, setAdvice] = useState();
    
    useEffect(() => {
        fetch(`https://api.adviceslip.com/advice`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setId(data.slip.id)
        })
    }, [id])

        useEffect(() => {
        fetch(`https://api.adviceslip.com/advice`)
        .then(res => res.json())
        .then(data => {
            console.log(data.slip.advice)
            setAdvice(data.slip.advice)
        })
    }, [advice])


  return (
    <Container className={`bg-card h-[250px] w-[400px] md:h-[280px] md:w-[500px] flex flex-col items-center justify-around rounded-md text-fontColor text-[20px]`}>
        <Title className={`text-sub uppercase`}>Advice #{id && id}</Title>
        <Advice>"{advice}"</Advice>
        <Container className='flex'>
            <hr /><img src="public/images/pattern-divider-mobile.svg" alt="" /><hr />
        </Container>
    </Container>
  )
}

export default Card