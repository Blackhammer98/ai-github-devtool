"use client"

import { url } from "inspector"
import { Bot, CreditCard, icons, LayoutDashboard, Plus, Presentation, PresentationIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { title } from "process"
import { Button } from "~/components/ui/button"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "~/components/ui/sidebar"
import { cn } from "~/lib/utils"

const items = [
    {
        title : "Dashboard",
        url : "/dashboard",
        icon : LayoutDashboard
    } , 
     {
        title : "Q&A",
        url : "/qa",
        icon : Bot
    } , 
     {
        title : "Meetings",
        url : "/meetings",
        icon : Presentation
    } , 
     {
        title : "Billing",
        url : "/billing",
        icon : CreditCard
    } , 
     
]

const projects = [
    {
        name : "Project 1"
    },
       {
        name : "Project 2"
    },
       {
        name : "Project 3"
    },
       {
        name : "Project 4"
    },
]

export function AppSidebar () {
  const pathname = usePathname()
  const {open}  = useSidebar()
    return (
        <Sidebar collapsible="icon" variant="floating">
            <SidebarHeader>
                Logo
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>
                        Application
                    </SidebarGroupLabel>
                    <SidebarMenu>
                        {items.map(item => {
                            

                            return (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                       <Link href={item.url} className={cn({
                                        '!bg-primary !text-white' : pathname === item.url
                                       })}>
                                        <item.icon/>
                                        <span>{item.title}</span>

                                       </Link>
                                    </SidebarMenuButton>

                                </SidebarMenuItem>
                            )
                        })}
                    </SidebarMenu>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel>
                        Your Projects
                    </SidebarGroupLabel>
                    <SidebarMenu>
                       {projects.map(project => {
                        
                        return (
                             <SidebarMenuItem key={project.name}>
                               <SidebarMenuButton asChild>
                                   <div>
                                    <div className= {cn(
                                        'rounded-sm border  size-6 flex items-center justify-center text-sm bg-white text-primary',
                                        {
                                            'bg-primary text-white ' : true
                                        }
                                    )}>
                                        {project.name[0]}

                                    </div>
                                    <span>{project.name}</span>
                                   </div>
                               </SidebarMenuButton>
                             </SidebarMenuItem>
                        )
                       })}
                       <div className="h-2">

                       </div>
                       {open && (
                              <SidebarMenuItem>
                        <Link href={"/create"}>
                             <Button size="sm" variant={"outline"} className="w-fit" >
                             <Plus/>
                          Create Project
                       </Button>
                        </Link>
                    
                       </SidebarMenuItem>
                       )}
                       
                       
                    </SidebarMenu>

                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter/>
        </Sidebar>
    )
}