import React from 'react';
import { Link, NavLink } from 'react-router';
import { navList } from '~/assets/data/navbar';
import { cn } from '~/lib/utils';

const Navbar = () => {
  return (
    <nav className="flex items-center px-20 justify-between w-full sticky z-10 top-0 bg-white py-4">
      <NavLink
        to={'/'}
        className="flex items-center gap-2 font-bricolage font-extrabold text-2xl text-primary-green"
      >
        <img
          src="assets/svg/pokeball-green.svg"
          alt="pokeball"
          className="w-8 h-8"
        />
        Pokédex
      </NavLink>
      <div className="flex items-center py-2 px-10 gap-8 bg-secondary-green rounded-full">
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
                      `hover:border-b-2 text-base font-semibold text-white-foreground`,
                      isActive && 'border-b-2 border-b-white-foreground',
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
          src="assets/svg/pokeball-yellow.svg"
          alt="pokeball"
          className="absolute w-32 h-32 -top-12 -left-14 z-0 opacity-35"
        />
      </div>
    </nav>
  );
};

export default Navbar;
