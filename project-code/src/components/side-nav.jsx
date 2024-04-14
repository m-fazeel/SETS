'use client';

import React from 'react';
import Link from 'next/link';
import {User} from "@nextui-org/react";
import {Navbar,  NavbarBrand } from '@nextui-org/react';

import useNavigation from '@/hook/use-navigation';
import { Icon } from '@iconify/react';

const SideNav = () => {
    const {
        isHomeActive,
        isExploreActive,
        isNotificationsActive,
        isSettingsActive,
    } = useNavigation();

    return (
        <div className="flex-col space-y-4 items-center py-0 hidden sm:flex border-r border-zinc-700 h-full  w-[120px] md:w-[250px] md:items-start fixed bg-blue-300">
            <div className='w-full flex justify-center items-center pb-6'>
            <div className="w-full flex justify-center items-center bg-stone-800 py-4">
                <span className="text-white text-xl font-bold font-sans">SETS</span>
            </div>
            </div>
            
            
            {/* <Link
                href="/"
                className="flex flex-row space-x-1 items-center hover:bg-white/10 p-4 rounded-full duration-200"
            >
                <Icon icon="bi:twitter-x" width="38" height="38" />
            </Link> */}

            <Link
                href="/"
                className={`flex flex-row space-x-4 items-center px-4 py-3 rounded-full duration-200  relative hover:bg-white/50 ${isHomeActive ? 'bg-white/50' : ''}`}
            >
                <Icon icon="mingcute:home-5-fill" width="38" height="38" />
                <span
                    className={`text-xl pt-2 hidden md:flex font-bold ${isHomeActive ? 'font-bold' : ''}`}
                >
                    Dashboard
                </span>
                {/* <span className='h-2 w-2 rounded-full bg-sky-500 absolute top-3 right-[16px] md:right-[100px]'></span> */}
            </Link>
            <Link
                href="/inventory"
                className={`flex flex-row space-x-4 items-center px-4 py-3 rounded-full duration-200  relative hover:bg-white/50 ${isExploreActive ? 'bg-white/50' : ''}`}
            >
                <Icon
                    icon="uil:search"
                    width="38"
                    height="38"
                    className="stroke-current stroke-5"
                />
                <span
                    className={`text-xl pt-2 hidden md:flex ${isExploreActive ? 'font-bold' : ''}`}
                >
                    Inventory
                </span>
            </Link>
            <Link
                href="/notifications"
                className={`flex flex-row space-x-4 items-center px-4 py-3 rounded-full duration-200 hover:bg-white/50 ${isNotificationsActive ? 'bg-white' : ''}`}
            >
                <Icon icon="mingcute:notification-fill" width="38" height="38" />
                <span
                    className={`text-xl pt-2 hidden md:flex ${isNotificationsActive ? 'font-bold' : ''}`}
                >
                    Notifications
                </span>
            </Link>
            <Link
                href="/settings"
                className={`flex flex-row space-x-4 items-center px-4 py-3 rounded-full duration-200 hover:bg-white/50 ${isSettingsActive ? 'bg-white' : ''}`}
            >
                <Icon icon="ci:settings-filled" width="38" height="38" />
                <span
                    className={`text-xl pt-2 hidden md:flex ${isSettingsActive ? 'font-bold' : ''}`}
                >
                    Settings
                </span>
            </Link>

                <Link href="/logout" className="flex flex-row space-x-4 items-center px-4 py-3 rounded-full duration-200 hover:bg-white/50 w-full">
                    <Icon icon="ic:outline-logout" width="38" height="38" />
                    <span className="text-  xl pt-2 hidden md:flex">Logout</span>
                </Link>
                <div className="mt-auto w-full flex items-center absolute inset-x-4 bottom-0 h-16">
                <User
                    name="Michael Scott"
                    description="Admin"
                    avatarProps={{
                        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                    }}
                />
            </div>
        </div>

    );
};

export default SideNav;