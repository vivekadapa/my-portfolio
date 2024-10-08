"use client"

import React, { useState } from 'react'
import { IconBrandWhatsapp } from '@tabler/icons-react'

const Contact = () => {

    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setError(''); // Reset error
    }

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    const handleSubmit = async () => {
        if (!validateEmail(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        setLoading(true);

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();
            if (data.success) {
                console.log("Email Sent Successfully")
            }
        } catch (error) {
            alert('An error occurred while sending the email.');
        } finally {
            setLoading(false);
        }
    }
    return (
        <div className="bg-blue-50 rounded-lg flex flex-col gap-2 dark:bg-blue-800 dark:bg-opacity-30 p-6">
            <div className="flex flex-col gap-3 my-2">
                <h1 className="text-2xl text-gray-900 dark:text-gray-100 font-bold">Want to hire me for a job?</h1>
                <p className="text-xl">Drop a message here</p>
                <a href="https://wa.me/917680808622/?text=I%20have%20a%20job%20for%20you" className="bg-[#4ade80] w-fit flex gap-2 font-semibold rounded-lg px-4 py-2"> <IconBrandWhatsapp />Whatsapp</a>
            </div>
            <hr />
            <div className="flex flex-col mt-4 gap-4">
                <label className="text-xl font-semibold" htmlFor="">Drop Your mail here, I will reach out to you</label>
                <div className="flex relative dark:text-gray-100 dark:bg-gray-800 text-gray-900">
                    <input type="text" value={email}
                        onChange={handleEmailChange}
                        className="rounded-lg flex-grow px-4 py-2"
                        placeholder="vivekchaitana1324@gmail.com" />
                    <button onClick={handleSubmit} disabled={loading}
                        className="font-semibold absolute rounded-r-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100  right-0 px-6 py-2">
                        {loading ? 'Sending...' : 'Send'}
                    </button>
                </div>
                {error && <p className="text-red-500">{error}</p>}
            </div>
        </div>
    )
}

export default Contact