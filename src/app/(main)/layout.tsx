"use client";

import { Spinner } from "@/components/Spinner";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";
import Navigation from "./_components/Navigation";

const MainLayout = ({ children }: PropsWithChildren) => {
  const { isLoading, isAuthenticated } = useConvexAuth();

  if (isLoading)
    return (
      <div className="h-full flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  if (!isLoading && !isAuthenticated) return redirect("/");

  return (
    <div className="h-full flex dark:bg-[#1f1f1f] ">
      <Navigation />
      <main className="flex-1 h-full overflow-y-auto ">{children}</main>
    </div>
  );
};

export default MainLayout;
