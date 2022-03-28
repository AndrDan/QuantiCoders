import React from 'react';
import { useState } from 'react';
import './cards.css';
import FirstCard from './cards/FirstCard';
import SecondCard from './cards/SecondCard';
import ThirdCard from './cards/ThirdCard';
import FourthCard from './cards/FourthCard';
import FifthCard from './cards/FifthCard';
import Form from 'react-bootstrap/Form';

import { ReactComponent as PayPalIcon } from 'assets/paypal.svg';

import CardNavItem from './CardNavItem';
import CardContent from './CardContent';

const Cards = (register) => {
  const [activeCard, setActiveCard] = useState('card1');

  return (
    <div className="Cards">
      <Form className="paymethod-container">
        <Form.Label>Спосіб оплати</Form.Label>
        <div className="paymethod-list">
          <CardNavItem
            imgSrc={<PayPalIcon />}
            title="Карта Visa/MasterCard"
            className="CardNavItem"
            id="card1"
            activeCard={activeCard}
            setActiveCard={setActiveCard}
          />
          <CardNavItem
            imgSrc={<PayPalIcon />}
            title="Приват24"
            className="CardNavItem"
            id="card2"
            activeCard={activeCard}
            setActiveCard={setActiveCard}
          />
          <CardNavItem
            imgSrc={<PayPalIcon />}
            title="Тремінали України"
            className="CardNavItem"
            id="card3"
            activeCard={activeCard}
            setActiveCard={setActiveCard}
          />
          <CardNavItem
            imgSrc={<PayPalIcon />}
            title="WebMoney"
            className="CardNavItem"
            id="card4"
            activeCard={activeCard}
            setActiveCard={setActiveCard}
          />
          <CardNavItem
            imgSrc={<PayPalIcon />}
            title="PayPal"
            className="CardNavItem"
            id="card5"
            activeCard={activeCard}
            setActiveCard={setActiveCard}
          />
        </div>
        <Form.Group className="paymethod-list"></Form.Group>{' '}
      </Form>
      <Form className="paycard-form">
        <Form.Label>Введіть наступні данні</Form.Label>
        <div className="paycard-container">
          <CardContent id="card1" activeCard={activeCard}>
            <FirstCard />
          </CardContent>
          <CardContent id="card2" activeCard={activeCard}>
            <SecondCard {...register} />
          </CardContent>
          <CardContent id="card3" activeCard={activeCard}>
            <ThirdCard />
          </CardContent>{' '}
          <CardContent id="card4" activeCard={activeCard}>
            <FourthCard />
          </CardContent>
          <CardContent id="card5" activeCard={activeCard}>
            <FifthCard />
          </CardContent>
        </div>{' '}
      </Form>
    </div>
  );
};
export default Cards;
