import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { navList } from '~/assets/data/navbar';
import { cn } from '~/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex items-center px-4 md:px-20 justify-between w-full sticky z-10 top-0 bg-white py-4">
      <NavLink
        to={'/'}
        className="flex items-center gap-2 font-bricolage font-extrabold text-2xl text-primary-green"
      >
        <img
          src="/assets/svg/pokeball-green.svg"
          alt="pokeball"
          className="w-8 h-8"
        />
        Pokédex
      </NavLink>
      <div className="hidden md:flex items-center py-2 px-10 gap-8 bg-secondary-green rounded-full">
        {navList.map((item: any, index) => {
          return (
            <NavLink
              key={index}
              to={item.href}
              className="flex gap-1 items-center group-hover:pb-2 group-hover:border-b-green-200"
            >
              {({ isActive }) => (
                <>
                  {item.icon_type === 'svg' ? (
                    <img src={item.icon} alt={item.name} className="w-7 h-7" />
                  ) : (
                    <item.icon
                      className={cn(
                        `stroke-white-foreground group-hover:stroke-current w-7 h-7`,
                        isActive && 'fill-white-foreground',
                      )}
                    />
                  )}
                  <h6
                    className={cn(
                      `hover:border-b-2 text-base font-normal  text-white-foreground`,
                      isActive &&
                        'border-b-2 border-b-white-foreground font-semibold',
                    )}
                  >
                    {item.name}
                  </h6>
                </>
              )}
            </NavLink>
          );
        })}
        <img
          src="/assets/svg/pokeball-yellow.svg"
          alt="pokeball"
          className="absolute w-32 h-32 -top-12 -left-14 z-0 opacity-35"
        />
      </div>
      <div className="md:hidden py-2 px-3 bg-secondary-green rounded-full">
        <button
          className="cursor-pointer flex"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="stroke-white-foreground" />
        </button>

        {isOpen ? (
          <div className="absolute bg-white right-0 w-5/6 h-screen top-0 px-4 py-6 flex flex-col gap-4 rounded shadow-2xl">
            <div className="flex items-center gap-2 justify-between">
              <NavLink
                to={'/'}
                className="flex items-center gap-2 font-bricolage font-extrabold text-2xl text-primary-green"
              >
                <img
                  src="/assets/svg/pokeball-green.svg"
                  alt="pokeball"
                  className="w-8 h-8"
                />
                Pokédex
              </NavLink>
              <button
                className="cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                <X className="stroke-foreground" />
              </button>
            </div>

            {navList.map((item: any, index) => {
              return (
                <NavLink
                  key={index}
                  to={item.href}
                  className="flex gap-2 items-center group-hover:pb-2 group-hover:border-b-green-200"
                >
                  {({ isActive }) => (
                    <>
                      {item.icon_type === 'svg' ? (
                        <img
                          src={item.icon}
                          alt={item.name}
                          className="w-7 h-7"
                        />
                      ) : (
                        <item.icon
                          className={cn(
                            `stroke-foreground group-hover:stroke-current w-7 h-7`,
                            isActive && 'fill-foreground',
                          )}
                        />
                      )}
                      <h6
                        className={cn(
                          `hover:border-b-2 text-base font-normal  text-foreground`,
                          isActive &&
                            'border-b-2 border-b-foreground font-semibold',
                        )}
                      >
                        {item.name}
                      </h6>
                    </>
                  )}
                </NavLink>
              );
            })}
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
