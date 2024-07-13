import React, { useEffect, useState } from 'react'
import { Image } from 'phosphor-react';
import { Card } from '../Components/Card';
import { SeachBar } from '../Components/SeachBar';
import queen from "../assets/images/queen.jpeg";


import {
    Dialog, Slide, DialogContent,
} from "@mui/material";
import { ImageCard } from '../Components/ImageCard';
import { Horse, Heart, Cube, ShareNetwork } from "phosphor-react";
import axios from 'axios';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export const Home = () => {


    const [isLoading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [items, setItems] = useState();
    const [singleViewData, setSingleViewData] = useState();

    console.log("singleViewData>>", singleViewData)

    // setTimeout(() => {
    //     setIsLoading(false)
    // }, 500)



    //SingleViewOfItems ApiCall
    const SingleViewOfItems = async (id) => {
        setIsOpen(true)

        try {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                }
            });
            setSingleViewData(res?.data)
        } catch (err) {
            window.alert("SOMETHING WRONG!")
        }
    }



    // initial APi_Call
    useEffect(() => {
        try {
            const getData = async () => {
                setIsLoading(true)
                const res = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
                setItems(res?.data)
                setIsLoading(false)
            }
            getData()

        } catch (err) {
            setIsLoading(false)
            window.alert("SOMETHING WRONG !!")
        }
    }, [])



    return (
        <main className='p-5'>
            <div className='max-w-full flex'>
                <SeachBar />
                <button className='w-12 h-12 flex items-center justify-center glass1'>
                    <Image size={28} color="white" weight="fill" />
                </button>
            </div>

            <div className='App flex flex-wrap gap-2.5 p-5 mt-4 items-center justify-center overflow-y-scroll h-lvh scrollbar-thumb-custom glass'>
                {
                    items?.map((el, index) => {
                        return (
                            <>
                                <div key={index} onClick={() => SingleViewOfItems(el?.id)}>
                                    {isLoading ? <Card key={index} /> : <Card el={el} pic={queen} />}
                                </div>
                            </>
                        )
                    })
                }
            </div>

            {/* <Card pic={faker.image.avatar()} /> */}
            {/* Glass */}
            {/* <div className='container1 glass1'></div> */}
            {/* <Loading /> */}



            <Dialog open={isOpen}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => setIsOpen(false)}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogContent
                    sx={{
                        backgroundColor: "#3C3C5E",
                    }}
                >
                    <ImageCard height={'h-full'} width={"w-full"} imgSrc={'https://img.freepik.com/premium-photo/sunrise-meadow-with-deer_1051578-70772.jpg?w=360'}>
                        <h3 className='text-xl font-bold mb-2'>{singleViewData?.title}</h3>
                        <p>
                            <span className='text-indigo-300'>{singleViewData?.body}</span>
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
                </DialogContent>
            </Dialog>
        </main>
    )
}
