import React from 'react';
import { AiOutlineCalendar, AiOutlineShoppingCart, AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock } from 'react-icons/ai';
import { FiShoppingBag, FiEdit, FiPieChart, FiBarChart, FiCreditCard, FiStar, FiShoppingCart } from 'react-icons/fi';
import { BsKanban, BsBarChart, BsBoxSeam, BsCurrencyDollar, BsShield, BsChatLeft } from 'react-icons/bs';
import { BiColorFill } from 'react-icons/bi';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine, RiStockLine } from 'react-icons/ri';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';
import { TiTick } from 'react-icons/ti';
import { GiLouvrePyramid } from 'react-icons/gi';
import { GrLocation } from 'react-icons/gr';
import {AiOutlineHome} from 'react-icons/ai'
import {BsDatabaseCheck} from 'react-icons/bs'
import {BsLungs} from 'react-icons/bs'
import {CgPerformance} from 'react-icons/cg'
import {FaDisease} from 'react-icons/fa'
export const links = [
  {
    title: 'Peformances',
    links: [
      {
        name: 'Classification des sons',
        icon: <CgPerformance />,
      },
      {
        name: 'Classification des pathologies',
        icon: <CgPerformance />,
      }
    
    ],
  },
    {
      title: 'Données utilisées',
      links: [
        {
          name: 'ICBHI',
          icon: <BsDatabaseCheck />,
        }
      
      ],
    },
    {
      title: 'effectuer un test avec le split officiel',
      links: [
        {
          name: 'sons',
          icon: <BsLungs />,
        },
        {
          name: 'pathologies',
          icon: <FaDisease />,
        },
  
    
      ],
    },
    {
      title: 'effectuer un test avec le split 80-20',
      links: [
        {
          name: 'son',
          icon: <BsLungs />,
        },
        {
          name: 'pathologie',
          icon: <FaDisease />,
        },
  
    
      ],
    },
  ];
  export const generalInfo = [
    {
      icon: <MdOutlineSupervisorAccount />,
      amount: '1000',
      percentage: '-4%',
      title: 'Visites',
      iconColor: '#03C9D7',
      iconBg: '#E5FAFB',
      pcColor: 'red-600',
    },
    {
      icon: <BsBoxSeam />,
      amount: '4,396',
      percentage: '+23%',
      title: 'Tests effectués',
      iconColor: 'rgb(255, 244, 229)',
      iconBg: 'rgb(254, 201, 15)',
      pcColor: 'green-600',
    },
    {
      icon: <FiBarChart />,
      amount: '423,39',
      percentage: '+38%',
      title: 'Précision',
      iconColor: 'rgb(228, 106, 118)',
      iconBg: 'rgb(255, 244, 229)',
  
      pcColor: 'green-600',
    }
   
  ];

  export const loginFields=[
    {
        labelText:"Email address",
        labelFor:"email-address",
        id:"email-address",
        name:"email",
        type:"email",
        autoComplete:"email",
        isRequired:true,
        placeholder:"Adresse mail"   
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Mot de passe"   
    }
]

export const signupFields=[
    {
        labelText:"Username",
        labelFor:"username",
        id:"username",
        name:"username",
        type:"text",
        autoComplete:"username",
        isRequired:true,
        placeholder:"Username"   
    },
    {
        labelText:"Email address",
        labelFor:"email-address",
        id:"email-address",
        name:"email",
        type:"email",
        autoComplete:"email",
        isRequired:true,
        placeholder:"Email address"   
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Password"   
    },
    {
        labelText:"Confirm Password",
        labelFor:"confirm-password",
        id:"confirm-password",
        name:"confirm-password",
        type:"password",
        autoComplete:"confirm-password",
        isRequired:true,
        placeholder:"Confirm Password"   
    }
]
