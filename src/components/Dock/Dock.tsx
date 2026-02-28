import React, { useState, useCallback, useMemo } from 'react';
import './Dock.css';

export interface DockItem {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

export interface DockProps {
  items: DockItem[];
  iconSize?: number;
  magnification?: number;
  distance?: number;
  className?: string;
  'aria-label'?: string;
}

export const Dock: React.FC<DockProps> = ({
  items,
  iconSize = 48,
  magnification = 2.5,
  distance = 150,
  className = '',
  'aria-label': ariaLabel = 'Application dock',
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mouseX, setMouseX] = useState<number | null>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>, index: number) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      setMouseX(x);
      setHoveredIndex(index);
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    setHoveredIndex(null);
    setMouseX(null);
  }, []);

  const getScale = useCallback(
    (index: number) => {
      if (hoveredIndex === null || mouseX === null) return 1;

      const itemCenter = index * iconSize + iconSize / 2;
      const distanceFromMouse = Math.abs(mouseX - itemCenter);

      if (distanceFromMouse > distance) return 1;

      const scaleFactor =
        1 + (magnification - 1) * Math.cos((distanceFromMouse / distance) * (Math.PI / 2));
      return Math.min(scaleFactor, magnification);
    },
    [hoveredIndex, mouseX, iconSize, magnification, distance]
  );

  const dockItems = useMemo(() => {
    return items.map((item, index) => {
      const scale = getScale(index);
      const isHovered = hoveredIndex === index;

      return (
        <button
          key={`${item.label}-${index}`}
          className={`dock-item ${isHovered ? 'dock-item--hovered' : ''} ${item.disabled ? 'dock-item--disabled' : ''}`}
          style={{
            '--dock-icon-size': `${iconSize}px`,
            '--dock-scale': scale,
          } as React.CSSProperties}
          onClick={item.disabled ? undefined : item.onClick}
          onMouseMove={(e) => handleMouseMove(e, index)}
          onMouseLeave={handleMouseLeave}
          aria-label={item.label}
          disabled={item.disabled}
          type="button"
        >
          <span className="dock-item__icon" aria-hidden="true">
            {item.icon}
          </span>
          <span className="dock-item__tooltip" role="tooltip">
            {item.label}
          </span>
        </button>
      );
    });
  }, [items, iconSize, getScale, hoveredIndex, handleMouseMove, handleMouseLeave]);

  return (
    <nav
      className={`dock ${className}`}
      aria-label={ariaLabel}
      role="navigation"
    >
      <div className="dock-container">
        {dockItems}
      </div>
    </nav>
  );
};

export default Dock;
