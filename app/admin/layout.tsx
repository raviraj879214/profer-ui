"use client"

import { AuthGuard } from "@/components/adminguard/AuthGuard";
import {Footer} from "@/components/Areas/shared/Footer";
import { Header } from "@/components/Areas/shared/Header";
import { Sidebar } from "@/components/Areas/shared/Sidebar";
import { SidebarProvider } from "@/components/context/SidebarContext";




export default  function AdminLayout({ children }: { children: React.ReactNode }) {





  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
        <SidebarProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <div className="flex flex-1">
              <Sidebar />
               <AuthGuard>
                  <main className="flex-1 p-6 bg-gray-50">{children}</main>
               </AuthGuard>
            </div>
            <Footer />
          </div>
        </SidebarProvider>
    </div>
       
     
  );
}
