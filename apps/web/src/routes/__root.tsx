import { HeadContent, Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Toaster } from "@Tpt-website/ui/components/sonner";
import { useState, useEffect } from "react";

import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import tptLogo from "@/images/TPT.png";

import "../index.css";

export interface RouterAppContext {}

export const Route = createRootRouteWithContext<RouterAppContext>()({
  component: RootComponent,
  head: () => ({
    meta: [
      {
        title: "TPT 4.0 — The Perfect Trajectory",
      },
      {
        name: "description",
        content: "The Perfect Trajectory 4.0 — A two-day orientation program for newly-elected IEDC Team leads across Kerala. July 17-18, 2026 at Marian Engineering College, Trivandrum.",
      },
    ],
    links: [
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
  }),
});

function RootComponent() {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Initializing...");
  const [videoReady, setVideoReady] = useState(false);
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Listen for video loaded event
    const handleVideoReady = () => {
      setVideoReady(true);
    };
    window.addEventListener("tpt-video-ready", handleVideoReady);

    // Fallback: in case event is missed or slow network
    const fallback = setTimeout(() => {
      setVideoReady(true);
    }, 2500);

    return () => {
      window.removeEventListener("tpt-video-ready", handleVideoReady);
      clearTimeout(fallback);
    };
  }, []);

  useEffect(() => {
    // Increment progress: 1% every 20ms = ~2.0s base loader duration
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 99) {
          return prev + 1;
        } else if (prev === 99 && videoReady) {
          return 100;
        }
        return prev;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [videoReady]);

  useEffect(() => {
    // Cyberpunk status texts
    if (progress < 20) {
      setStatusText("Initializing Trajectory...");
    } else if (progress < 45) {
      setStatusText("Calibrating Coordinates...");
    } else if (progress < 70) {
      setStatusText("Securing Node Connections...");
    } else if (progress < 90) {
      setStatusText("Locking Alignment...");
    } else if (progress < 100) {
      setStatusText("Finalizing Launch...");
    } else {
      setStatusText("Trajectory Locked. Launching!");
      
      // Smoothly fade out after a brief hold on 100%
      const fadeTimer = setTimeout(() => {
        setFade(true);
        const hideTimer = setTimeout(() => {
          setLoading(false);
        }, 750);
      }, 500);
    }
  }, [progress]);

  return (
    <>
      <HeadContent />
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        forcedTheme="dark"
        disableTransitionOnChange
        storageKey="vite-ui-theme"
      >
        {/* Full Page Loader */}
        {loading && (
          <div
            className={`fixed inset-0 bg-[#000000] z-[9999] flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
              fade ? "opacity-0 pointer-events-none scale-[1.02]" : "opacity-100"
            }`}
          >
            {/* Main logo & progress bar panel */}
            <div className="relative flex flex-col items-center gap-8 px-6">
              <img
                src={tptLogo}
                alt="TPT Logo"
                className="w-44 sm:w-60 h-auto opacity-90"
              />

              <div className="flex flex-col items-stretch gap-2.5 w-48 sm:w-64">
                {/* Stats row */}
                <div className="flex justify-between items-center text-[10px] font-mono tracking-wider">
                  <span className="text-white font-medium">{statusText}</span>
                  <span className="text-white/60 font-bold">{progress}%</span>
                </div>

                {/* Progress bar track */}
                <div className="h-0.5 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white rounded-full transition-all duration-75"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="min-h-svh tpt-bg">
          <Header />
          <Outlet />
        </div>
        <Toaster richColors />
      </ThemeProvider>
      <TanStackRouterDevtools position="bottom-left" />
    </>
  );
}
