"use client"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import React from 'react'


const CustomBreadcrumbLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
    return <BreadcrumbLink href={href} className='hover:text-secondary/35 font-medium'>{children}</BreadcrumbLink>
}

function Header({ className }: { className?: string }) {

    const pathname = usePathname();
    const pageName = pathname.split('/').pop();

    return (
        <header className={cn("", className)}>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <CustomBreadcrumbLink href="https://lauta.dev">@lauta.dev</CustomBreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                        <p className='font-bold'>:</p>
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                        <CustomBreadcrumbLink href="/">Milanesa</CustomBreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator >
                        <p className='font-bold'>/</p>
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                        <BreadcrumbPage className='capitalize text-secondary/35 font-medium'>{pageName}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        </header>
    )
}

export default Header;
