import Button from "../components/Button.tsx";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ChatIcon from "@mui/icons-material/Chat";
import LoginButton from "./Login.tsx";
import { useState } from "react";
import AskAcmeChat from "../components/AskAcmeChat.tsx";

export default function NavigationBar() {
  const [askAcmeOpen, setAskAcmeOpen] = useState(false);

  const handleAskAcmeOpen = () => {
    setAskAcmeOpen(true);
  };

  const handleAskAcmeClose = () => {
    setAskAcmeOpen(false);
  };

  return (
    <>
      <nav className="bg-navy text-white">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex-shrink-0 ml-4">
              <img
                src="/logo-white.png"
                alt="Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </a>

            {/* Navigation Links - Add more as needed */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="/bikes"
                  className="px-3 py-2 rounded-md font-medium hover:bg-gray-700"
                >
                  Bikes
                </a>

                <a
                  href="/accessories"
                  className="px-3 py-2 rounded-md font-medium hover:bg-gray-700"
                >
                  Accessories
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-8">
            <LoginButton />

            <button 
              onClick={handleAskAcmeOpen}
              className="p-2 text-white hover:bg-gray-700 rounded-full mr-4"
            >
              <ChatIcon className="size-5" />
              <span className="sr-only">Ask Acme</span>
            </button>

            <a href="/cart">
              <Button variant="icon" className="mr-4">
                <ShoppingCartIcon className="size-5" />
                <span className="sr-only">Shopping cart</span>
              </Button>
            </a>
          </div>
        </div>
      </nav>
      <AskAcmeChat open={askAcmeOpen} onClose={handleAskAcmeClose} />
    </>
  );
}
