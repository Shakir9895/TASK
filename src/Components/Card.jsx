import React from 'react'
import { ImageCard } from "./ImageCard"
import queen from "../assets/images/queen.jpeg";
import { Horse, Heart, Cube, ShareNetwork } from "phosphor-react";


export const Card = ({ pic, el }) => {

    const Discription = el?.body?.slice(0,35);

    console.log(el)
    return (
        <ImageCard imgSrc={pic}>
            <h3 className='text-xl font-bold mb-2'>{el?.title}</h3>
            <p>
                {Discription} <span className='text-indigo-300'>{Discription ? '...more' : ""}</span>
            </p>
            <div className='space-x-4 mt-4'>
                <button className='btn'>
                    <Cube weight="fill" />
                </button>
                <button className='btn'>
                    <Heart weight="duotone" />
                </button>
                <button className='btn'>
                    <Horse />
                </button>

                <button className='btn'>
                    <ShareNetwork />
                </button>


            </div>
        </ImageCard>
    )
}
