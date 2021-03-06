import React from 'react';
import './tabs.css';
import { useState } from 'react';
import PlaceholderTab from './tabs/PlaceholderTab';
import MainTab from './tabs/MainTab';

import { ReactComponent as ClothesIcon } from 'assets/clothes.svg';
import { ReactComponent as HandIcon } from 'assets/hand.svg';
import { ReactComponent as HeartIcon } from 'assets/heart.svg';
import { ReactComponent as WalletIcon } from 'assets/wallet.svg';

import TabNavItem from './TabNavItem';
import TabContent from './TabContent';

const Tabs = (register) => {
  const [activeTab, setActiveTab] = useState('tab2');

  return (
    <div className="Tabs">
      <ul className="nav-tabs">
        <TabNavItem
          imgSrc={<HandIcon />}
          title="Зробити"
          className="TabNavItem"
          id="tab1"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          imgSrc={<WalletIcon />}
          title="Фінансова допомога"
          className="TabNavItem"
          id="tab2"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          imgSrc={<ClothesIcon />}
          title="Матеріальна допомога"
          className="TabNavItem"
          id="tab3"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          imgSrc={<HeartIcon />}
          title="Волонтерство"
          className="TabNavItem"
          id="tab4"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </ul>

      <div className="outlet">
        <TabContent id="tab1" activeTab={activeTab}>
          <PlaceholderTab />
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          <MainTab {...register} />
        </TabContent>
        <TabContent id="tab3" activeTab={activeTab}>
          <PlaceholderTab />
        </TabContent>{' '}
        <TabContent id="tab4" activeTab={activeTab}>
          <PlaceholderTab />
        </TabContent>
      </div>
    </div>
  );
};
export default Tabs;
