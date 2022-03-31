import React from 'react';
import { useForm } from 'react-hook-form';
import Switch from './SwitchComponent/Switch';
import Tabs from './TabComponent/Tabs';
import './popUp.css';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';

const PopUp = ({ active, setActive }) => {
  const { register, handleSubmit } = useForm({});
  const onSubmit = ({
    paycardNum1,
    paycardNum2,
    paycardNum3,
    paycardNum4,
    ...data
  }) => {
    data.cardNumber = paycardNum1 + paycardNum2 + paycardNum3 + paycardNum4;
    console.log(data);
  };

  return (
    <div
      className={active ? 'popUp active' : 'popUp'}
      onClick={() => setActive(false)}
    >
      <CloseButton onClick={() => setActive(false)} />
      <div
        className={active ? 'popUp__content active' : 'popUp__content'}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="header">Заповніть форму</h2>
        <Switch className="Switch" {...{ register }} />
        <h2 className="header">Види допомоги</h2>
        <h3 className="subheader">Ви можете змінити вид допомоги</h3>
        <Tabs className="Tabs" {...{ register }} />
        <div className="text-center">
          <Button
            id="btn-submit"
            type="submit"
            onClick={handleSubmit(onSubmit)}
          >
            Допомогти
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
