import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState, useEffect } from "react";
import axios from 'axios';
import TypingDots from '../components/TypingDots';
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {


    //user input
    const [inputValue, setInputValue] = useState('');
    //chat log to hold all messages/conversation
    const [chatLog, setChatLog] = useState([]);
    //when we are waiting for api response
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (event) => {
        //prevent default so it doesn't reload the page
        event.preventDefault();
        //take user message and add to conversation history
        setChatLog((prevChatLog) => [...prevChatLog, { type: 'user', message: inputValue }])
        //when user presses send, trigger send message
        sendMessage(`in terms of accounting: ${inputValue}`);
        //clear out the user input to get ready for new message
        setInputValue('');
    }

    //get data from openAI
    const sendMessage = (message) => {
        const url = '/api/chat';

        const data = {
            model: "gpt-3.5-turbo-0613",
            messages: [{ "role": "user", "content": message }]
        };

        //before we make api call set isloading to true
        setIsLoading(true);

        //post request 
        axios.post(url, data).then((response) => {
            console.log(response);
            setChatLog((prevChatLog) => [...prevChatLog, { type: 'bot', message: response.data.choices[0].message.content }])
            setIsLoading(false);
        }).catch((error) => {
            setIsLoading(false);
            console.log(error);
        })
    }
    return (
        <div className="bg-gradient-to-l from-indigo-200 via-red-200 to-yellow-100 h-screen flex items-center">
            <motion.div
                initial={{ x: -300 }}
                animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: 70 }}
                className='container p-5 mx-auto max-w-[650px] font-custom'>
                <div className="bg-secondary-300 bg-opacity-50 rounded-t-3xl sticky">
                    <h1 className="text-7xl text-center text-white p-2">CPA[i]</h1>
                </div>
                <div className="flex flex-col bg-white bg-opacity-50 h-[550px] overflow-auto no-scrollbar">
                    <div className="flex-grow p-6">
                        <div className="flex flex-col space-y-3">
                            <div className="bg-primary-500 rounded-lg p-4 text-white max-w-sm">
                                <Typewriter
                                    options={{
                                        delay: 35,
                                    }}
                                    onInit={(typewriter) => {
                                        typewriter
                                            .pauseFor(1500)
                                            .typeString("Hi there! I'm here to answer any of your accounting questions. How can I help you?")
                                            .start()
                                    }}
                                />
                            </div>
                            {
                                //display all the of the messages
                                chatLog.map((message, index) => (
                                    <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'
                                        }`}> <div className={`${message.type === 'user' ? 'bg-primary-300' : 'bg-primary-500'
                                            } rounded-lg p-4 text-white max-w-sm`}>
                                            {message.message}
                                        </div>
                                    </div>
                                ))
                            }
                            {
                                //display typing dots while response is loading
                                isLoading &&
                                <TypingDots />
                            }
                        </div>
                    </div>
                </div>
                <form className="w-full flex justify-center" onSubmit={handleSubmit}>
                    <input className="w-full h-16 rounded-bl-3xl p-5" type="text" placeholder="Type your accounting question..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                    <button className="hover:bg-secondary-300 hover:bg-opacity-50 w-20 h-16 rounded-br-3xl bg-opacity-100 bg-secondary-900 text-white font-bold rounded" type="submit">Send</button>
                </form>
            </motion.div>
        </div>
    )
}
