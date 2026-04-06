import React, { useState, ReactNode } from 'react';

export interface TabItem {
  id: string;
  label: string;
  content?: ReactNode;
}

export interface TabsProps {
  items: TabItem[];
  defaultSelectedId?: string;
  onChange?: (id: string) => void;
  className?: string;
}

export function Tabs({ items, defaultSelectedId, onChange, className = '' }: TabsProps) {
  const [selectedId, setSelectedId] = useState(defaultSelectedId || items[0]?.id);

  const handleSelect = (id: string) => {
    setSelectedId(id);
    if (onChange) onChange(id);
  };

  return (
    <div className={`w-full ${className}`}>
      <div className="flex border-b border-ht-light-gray overflow-x-auto no-scrollbar">
        {items.map((item) => {
          const isActive = selectedId === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleSelect(item.id)}
              className={`px-6 py-3 font-semibold text-base whitespace-nowrap transition-colors border-b-2 focus:outline-none ${
                isActive
                  ? 'border-ht-master-purple text-ht-master-purple'
                  : 'border-transparent text-ht-text-secondary hover:text-ht-text-primary'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <div className="pt-4">
        {items.find((item) => item.id === selectedId)?.content}
      </div>
    </div>
  );
}
