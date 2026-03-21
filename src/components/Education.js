import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';

import HTMLImg from '../accets/HTML.png'
import CSSImg from '../accets/CSS.png'
import JavaScriptImg from '../accets/Javascript.png'
import ReactImg from '../accets/React.png'
import Tailwind from '../accets/Tailwind.png'
import Bootstrap from '../accets/Bootstrap.png'
import Node from '../accets/Node.png'
import Database from "../accets/Database.png"
import Express from "../accets/Express.png"

const AnimatedItem = ({ children, delay = 0, index, onMouseEnter, onClick }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { amount: 0.5, triggerOnce: false });
    return (
        <motion.div
            ref={ref}
            data-index={index}
            onMouseEnter={onMouseEnter}
            onClick={onClick}
            initial={{ scale: 0.7, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.2, delay }}
            className="mb-4 cursor-pointer"
        >
            {children}
        </motion.div>
    );
};

const AnimatedList = ({
    items = [
       HTMLImg, CSSImg, JavaScriptImg, Bootstrap, Tailwind, ReactImg, Node, Express, Database
    ],
    onItemSelect,
    showGradients = true,
    enableArrowNavigation = true,
    className = '',
    itemClassName = '',
    displayScrollbar = true,
    initialSelectedIndex = -1
}) => {
    const listRef = useRef(null);
    const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex);
    const [keyboardNav, setKeyboardNav] = useState(false);
    const topGradientOpacity = 0
    const bottomGradientOpacity = 1

    const handleItemMouseEnter = useCallback(index => {
        setSelectedIndex(index);
    }, []);

    const handleItemClick = useCallback(
        (item, index) => {
            setSelectedIndex(index);
            if (onItemSelect) {
                onItemSelect(item, index);
            }
        },
        [onItemSelect]
    );

    // const handleScroll = useCallback(e => {
    //     const { scrollTop, scrollHeight, clientHeight } = e.target;
    //     setTopGradientOpacity(Math.min(scrollTop / 50, 1));
    //     const bottomDistance = scrollHeight - (scrollTop + clientHeight);
    //     setBottomGradientOpacity(scrollHeight <= clientHeight ? 0 : Math.min(bottomDistance / 50, 1));
    // }, []);

    useEffect(() => {
        if (!enableArrowNavigation) return;
        const handleKeyDown = e => {
            if (e.key === 'ArrowDown' || (e.key === 'Tab' && !e.shiftKey)) {
                e.preventDefault();
                setKeyboardNav(true);
                setSelectedIndex(prev => Math.min(prev + 1, items.length - 1));
            } else if (e.key === 'ArrowUp' || (e.key === 'Tab' && e.shiftKey)) {
                e.preventDefault();
                setKeyboardNav(true);
                setSelectedIndex(prev => Math.max(prev - 1, 0));
            } else if (e.key === 'Enter') {
                if (selectedIndex >= 0 && selectedIndex < items.length) {
                    e.preventDefault();
                    if (onItemSelect) {
                        onItemSelect(items[selectedIndex], selectedIndex);
                    }
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [items, selectedIndex, onItemSelect, enableArrowNavigation]);

    useEffect(() => {
        if (!keyboardNav || selectedIndex < 0 || !listRef.current) return;
        const container = listRef.current;
        const selectedItem = container.querySelector(`[data-index="${selectedIndex}"]`);
        if (selectedItem) {
            const extraMargin = 50;
            const containerScrollTop = container.scrollTop;
            const containerHeight = container.clientHeight;
            const itemTop = selectedItem.offsetTop;
            const itemBottom = itemTop + selectedItem.offsetHeight;
            if (itemTop < containerScrollTop + extraMargin) {
                container.scrollTo({ top: itemTop - extraMargin, behavior: 'smooth' });
            } else if (itemBottom > containerScrollTop + containerHeight - extraMargin) {
                container.scrollTo({
                    top: itemBottom - containerHeight + extraMargin,
                    behavior: 'smooth'
                });
            }
        }
        setKeyboardNav(false);
    }, [selectedIndex, keyboardNav]);

    return (
        <div className={`relative  w-[100%] ${className}`}>
            <div
                ref={listRef}
                className={`p-4`}
            >
                {items.map((item, index) => (
                    <AnimatedItem
                        key={index}
                        delay={0.1}
                        index={index}
                        onMouseEnter={() => handleItemMouseEnter(index)}
                        onClick={() => handleItemClick(item, index)}
                    >
                        <div className={`ml-5 sm:ml-20 w-[80%] sm:w-[60%] p-3 sm:p-5 sm:flex bg-[#ACCFE6] rounded-lg ${selectedIndex === index ? '' : ''} ${itemClassName}`}>
                            <div className='flex min-w-[20%]'>
                                <img src={item.specImg} className='h-[25px] sm:h-[40px]' alt="education" />
                                <h1 className=" text-gray-600 ml-3 sm:mt-2 text-[17px] sm:text-[20px] font-semibold">{item.spec}</h1>
                            </div>
                            <div className='hidden sm:block bg-gray-600 p-[0.5px] mx-10'></div>
                            <div>
                                <p className="text-blue-900 mt-1 text-[15px] sm:text-[17px] font-semibold">{item.name}</p>
                                <p className="text-gray-800 mt-1 text-[15px] sm:text-[17px] font-semibold">{item.desc}</p>
                            </div>
                        </div>
                    </AnimatedItem>
                ))}
            </div>
            {showGradients && (
                <>
                    <div
                        className="absolute top-0 left-0 right-0 h-[50px] pointer-events-none transition-opacity duration-300 ease"
                        style={{ opacity: topGradientOpacity }}
                    ></div>
                    <div
                        className="absolute bottom-0 left-0 right-0 h-[100px] pointer-events-none transition-opacity duration-300 ease"
                        style={{ opacity: bottomGradientOpacity }}
                    ></div>
                </>
            )}
        </div>
    );
};

export default AnimatedList;
