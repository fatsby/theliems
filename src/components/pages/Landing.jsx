import banner from '../../assets/banner.jpg';
import { Button } from "@/components/ui/button"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"


function Landing() {
    return (
        <div
            id="home"
            className="h-screen bg-contain bg-center bg-repeat-x"
            style={{ backgroundImage: `url(${banner})` }}
        >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>

            {/* Navigation Menu */}
            <div className="fixed top-0 left-0 right-0 z-[100] bg-transparent p-4 flex justify-center">
                <NavigationMenu>
                    <NavigationMenuList>

                        <NavigationMenuItem className="hover:cursor-pointer">
                            <NavigationMenuLink className="px-4 py-2 text-yellow-500 hover:bg-gray-700"
                                onClick={() => {
                                    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                Home
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem className="hover:cursor-pointer">
                            <NavigationMenuLink className="px-4 py-2 text-yellow-500 hover:bg-gray-700"
                                onClick={() => {
                                    document.getElementById('theliems').scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                THE LIEMS
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem className="hover:cursor-pointer">
                            <NavigationMenuLink className="px-4 py-2 text-yellow-500 hover:bg-gray-700"
                                onClick={() => {
                                    document.getElementById('faq').scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                FAQ
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                    </NavigationMenuList>
                </NavigationMenu>
            </div>


            {/* EIU TEXT */}

            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h2 className="text-white text-6xl font-bold text-center">EIU</h2>
                <h2 className="text-yellow-400 text-9xl font-bold text-center">THE LIEMS</h2>
                <p className="text-white text-lg text-center">A distinguished list of professors who are renowned for their exceptional expertise <br></br> and commands profound admiration from students </p>
                <Button
                    className="mt-3"
                    size="xl"
                    onClick={() => {
                        document.getElementById('theliems').scrollIntoView({ behavior: 'smooth' });
                    }
                    }
                >
                    VIEW
                </Button>

            </div>
        </div>
    );
}
export default Landing;