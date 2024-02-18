"use client"
import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { ThemeToggle } from './Themetoggle';
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs';


export function Navbar() {
   
    return (
        <nav className="border-b bg-background h-[10vh] flex items-center">
            <div className='container flex items-center justify-between'> 
                <Link href='/'>
                    <h1 className="font-bold text-3xl">First Serve</h1>
                </Link>
                <div className='flex items-center gap-x-5'>
                <ThemeToggle />
                <div className='flex items-center gap-x-5 '> 
               <LoginLink>  
                <Button> Sign In </Button>
                </LoginLink>
                <RegisterLink>
                <Button variant={'secondary'}> Sign Up </Button>
                </RegisterLink>
                </div>
                </div>
                </div>
          
        </nav>
    );
}


