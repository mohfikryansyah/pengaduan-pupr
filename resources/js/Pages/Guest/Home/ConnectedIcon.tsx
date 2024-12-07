import React, { useEffect, useRef, useState } from "react";

type IconPosition = {
    id: string;
    x: number;
    y: number;
};

const ConnectedIcons = () => {
    const [positions, setPositions] = useState<IconPosition[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    const updatePositions = () => {
        const container = containerRef.current;
        if (!container) return;

        const containerRect = container.getBoundingClientRect(); // Posisi container relatif ke viewport
        const icons = Array.from(container.querySelectorAll<HTMLElement>(".icon"));

        const newPositions = icons.map((icon) => {
            const rect = icon.getBoundingClientRect();
            return {
                id: icon.id,
                x: rect.left - containerRect.left + rect.width / 2,
                y: rect.top - containerRect.top + rect.height / 2,
            };
        });

        setPositions(newPositions);
    };

    useEffect(() => {
        updatePositions();
        window.addEventListener("resize", updatePositions);
        window.addEventListener("scroll", updatePositions); // Tambahkan event listener scroll

        return () => {
            window.removeEventListener("resize", updatePositions);
            window.removeEventListener("scroll", updatePositions);
        };
    }, []);

    return (
        <div ref={containerRef} className="relative w-full h-[1000px] bg-gray-100 overflow-auto">
            {/* Ikon */}
            <div id="icon1" className="icon absolute w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center" style={{ top: 50, left: 100 }}>
                🏦
            </div>
            <div id="icon2" className="icon absolute w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center" style={{ top: 200, left: 300 }}>
                📈
            </div>
            <div id="icon3" className="icon absolute w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center" style={{ top: 150, left: 500 }}>
                💳
            </div>

            {/* Garis menggunakan SVG */}
            <svg className="absolute w-full h-full pointer-events-none">
                <polyline
                    points={positions.map((pos) => `${pos.x},${pos.y}`).join(" ")}
                    stroke="#0070f3"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="300" // Panjang total garis (disesuaikan)
                    strokeDashoffset="300" // Offset awal (tidak terlihat)
                    className="line-animation"
                />
            </svg>

            {/* CSS Animasi */}
            <style>
                {`
      .line-animation {
        animation: draw 2s ease-in-out forwards;
      }

      @keyframes draw {
        to {
          stroke-dashoffset: 0;
        }
      }
    `}
            </style>
        </div>
    );
};

export default ConnectedIcons;
