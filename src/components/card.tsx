import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
}

const Card = ({ children }: CardProps) => {
    return (
        <div className="h-screen flex items-center justify-center snap-start mx-3">
            <div className="flex flex-col items-center background-card  rounded-4xl justify-center  w-full h-[75%] ">
                {children}
            </div>

        </div>
    );
};

export default Card;
