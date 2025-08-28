import type { ReactNode } from 'react';
import {BottleWine , Cake, Utensils, IceCreamBowl, Hamburger, Pizza } from 'lucide-react';
import expresso from '../assets/expresso.png';
import cappuccino from '../assets/cappuccino.jpg';
import choc from '../assets/choc.jpg';
import nutella from '../assets/nutella.jpg';
import mor from '../assets/mor.webp';
import picole from '../assets/picole.jpg';
import hamburguer from '../assets/hamburguer.avif';
import natural from '../assets/natural.jpg';
import hb from '../assets/hamburguer-b.jpg';
import arrumadinho from '../assets/arrumadinho.avif';
import macarronada from '../assets/macarronada.jpg';
import calabresa from '../assets/calabresa.jpg';
import frango from '../assets/catupiry.jpg';
import bolo from '../assets/bolo.jpg';
import torta from '../assets/maca.avif';

export type MenuItemType = {
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
};

export type CategoriaType = {
  tipo: string;
  icone: ReactNode;
  itens: MenuItemType[];
};

const menuData: CategoriaType[] = [
    {
        tipo: "Bebidas",
        icone: <BottleWine  size={24} />,
        itens: [
        {
            nome: "Expresso",
            descricao: "Café expresso tradicional",
            preco: 5.0,
            imagem: expresso,
        },
        {
            nome: "Cappuccino",
            descricao: "Café com leite e espuma",
            preco: 7.5,
            imagem: cappuccino,
        },
        ],
    },
    {
        tipo: "Shakes",
        icone: <IceCreamBowl  size={24} />,
        itens: [
        {
            nome: "Milkshake de Chocolate",
            descricao: "Delicioso milkshake com sorvete de chocolate",
            preco: 12.0,
            imagem: choc,
        },
        {
            nome: "Milkshake de Morango",
            descricao: "Delicioso milkshake com sorvete de morango",
            preco: 12.0,
            imagem: mor,
        },
        {
            nome: "Milkshake de creme nutella",
            descricao: "Delicioso milkshake com sorvete de creme e nutella",
            preco: 15.0,
            imagem: nutella,
        },
        {
            nome: "Picole de limao",
            descricao: "Delicioso picole de limao",
            preco: 3.0,
            imagem: picole,
        },
        ],
    },
    {
        tipo: "lanches",
        icone: <Hamburger size={24} />,
        itens: [
        {
            nome: "Hambúrguer",
            descricao: "Hambúrguer artesanal com queijo duplo e alface",
            preco: 15.0,
            imagem: hamburguer,
        },
        {
            nome: "Hambúrguer com bacon",
            descricao: "Hambúrguer artesanal com queijo cheddar, bacon e alface",
            preco: 15.0,
            imagem: hb,
        },
        {
            nome: "Sanduíche Natural",
            descricao: "Pão integral com peito de peru e salada",
            preco: 12.0,
            imagem: natural,
        },
        ],
    },
    {
        tipo: "Pratos",
        icone: <Utensils size={24} />,
        itens: [
        {
            nome: "Macarronada",
            descricao: "Macarronada ao molho sugo com manjericão",
            preco: 20.0,
            imagem: macarronada,
        },
        {
            nome: "Arrumadinho com charque",
            descricao: "feijão verde, farofa, charque acebolada e verduras",
            preco: 25.0,
            imagem: arrumadinho,
        },
        ],
    },
    {
        tipo: "Pizzas",
        icone: <Pizza size={24} />,
        itens: [
        {
            nome: "Pizza Calabresa",
            descricao: "Massa fina com molho de tomate, queijo e calabresa",
            preco: 25.0,
            imagem: calabresa,
        },
        {
            nome: "Pizza de Frango com Catupiry",
            descricao: "Massa fina com molho de tomate, queijo, frango desfiado e catupiry",
            preco: 25.0,
            imagem: frango,
        },
        ],
    },
    {
        tipo: "sobremesas",
        icone: <Cake size={24} />,
        itens: [
        {
            nome: "Bolo de Chocolate",
            descricao: "Bolo fofinho com cobertura de chocolate",
            preco: 8.0,
            imagem: bolo,
        },
        {
            nome: "Torta de Maçã",
            descricao: "Torta caseira com recheio de maçã e canela",
            preco: 9.0,
            imagem: torta,
        },
        ],
    },
]

export default menuData;