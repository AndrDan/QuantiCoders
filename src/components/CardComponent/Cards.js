import React from 'react';
import { useState } from 'react';
import './cards.css';
import MainCard from './cards/MainCard';
import PlacholderCard from './cards/PlacholderCard';
import Form from 'react-bootstrap/Form';

import { ReactComponent as PayPalIcon } from 'assets/paypal.svg';

import CardNavItem from './CardNavItem';
import CardContent from './CardContent';

const Cards = (register) => {
  const [activeCard, setActiveCard] = useState('card2');

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
            <PlacholderCard />
          </CardContent>
          <CardContent id="card2" activeCard={activeCard}>
            <MainCard {...register} />
          </CardContent>
          <CardContent id="card3" activeCard={activeCard}>
            <PlacholderCard />
          </CardContent>{' '}
          <CardContent id="card4" activeCard={activeCard}>
            <PlacholderCard />
          </CardContent>
          <CardContent id="card5" activeCard={activeCard}>
            <PlacholderCard />
          </CardContent>
        </div>{' '}
      </Form>
    </div>
  );
};
export default Cards;
