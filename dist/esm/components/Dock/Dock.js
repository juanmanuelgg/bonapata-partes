import React, { useState, useCallback, useMemo } from 'react';
import './Dock.css';
export const Dock = ({
    items,
    iconSize = 48,
    magnification = 2.5,
    distance = 150,
    className = '',
    'aria-label': ariaLabel = 'Application dock'
}) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [mouseX, setMouseX] = useState(null);
    const handleMouseMove = useCallback((e, index) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        setMouseX(x);
        setHoveredIndex(index);
    }, []);
    const handleMouseLeave = useCallback(() => {
        setHoveredIndex(null);
        setMouseX(null);
    }, []);
    const getScale = useCallback(
        (index) => {
            if (hoveredIndex === null || mouseX === null) return 1;
            const itemCenter = index * iconSize + iconSize / 2;
            const distanceFromMouse = Math.abs(mouseX - itemCenter);
            if (distanceFromMouse > distance) return 1;
            const scaleFactor =
                1 +
                (magnification - 1) *
                    Math.cos((distanceFromMouse / distance) * (Math.PI / 2));
            return Math.min(scaleFactor, magnification);
        },
        [hoveredIndex, mouseX, iconSize, magnification, distance]
    );
    const dockItems = useMemo(() => {
        return items.map((item, index) => {
            const scale = getScale(index);
            const isHovered = hoveredIndex === index;
            return React.createElement(
                'button',
                {
                    key: `${item.label}-${index}`,
                    className: `dock-item ${isHovered ? 'dock-item--hovered' : ''} ${item.disabled ? 'dock-item--disabled' : ''}`,
                    style: {
                        '--dock-icon-size': `${iconSize}px`,
                        '--dock-scale': scale
                    },
                    onClick: item.disabled ? undefined : item.onClick,
                    onMouseMove: (e) => handleMouseMove(e, index),
                    onMouseLeave: handleMouseLeave,
                    'aria-label': item.label,
                    disabled: item.disabled,
                    type: 'button'
                },
                React.createElement(
                    'span',
                    { className: 'dock-item__icon', 'aria-hidden': 'true' },
                    item.icon
                ),
                React.createElement(
                    'span',
                    { className: 'dock-item__tooltip', role: 'tooltip' },
                    item.label
                )
            );
        });
    }, [
        items,
        iconSize,
        getScale,
        hoveredIndex,
        handleMouseMove,
        handleMouseLeave
    ]);
    return React.createElement(
        'nav',
        {
            className: `dock ${className}`,
            'aria-label': ariaLabel,
            role: 'navigation'
        },
        React.createElement('div', { className: 'dock-container' }, dockItems)
    );
};
export default Dock;
//# sourceMappingURL=Dock.js.map
