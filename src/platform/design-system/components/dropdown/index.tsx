/** @jsxRuntime classic */
/** @jsx jsx */

import { useState, useCallback, useRef, useEffect } from 'react';
import { jsx, css } from '@emotion/react';

import { theme } from 'platform/design-system/theme';

type DropdownTypes = {
  selectedItem: string | number;
  items: (string | number)[];
  onSelect: (selectedItem: any) => any;
  placeholder: string;
};

export const Dropdown = ({
  selectedItem,
  items,
  onSelect,
  placeholder,
}: DropdownTypes) => {
  const [isVisible, setIsVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const onSelectCallback = useCallback(
    selected => {
      onSelect(selected);
      setIsVisible(false);
    },
    [onSelect, setIsVisible],
  );

  useEffect(() => {
    function outsideDropdownClickListener(event: MouseEvent) {
      if (!dropdownRef.current?.contains?.(event.target as Node)) {
        setIsVisible(false);
      }
    }

    isVisible &&
      document.addEventListener('mousedown', outsideDropdownClickListener);
    return () => {
      document.removeEventListener('mousedown', outsideDropdownClickListener);
    };
  }, [dropdownRef, isVisible]);

  return (
    <div
      ref={dropdownRef}
      css={css`
        position: relative;
      `}
    >
      <button
        aria-haspopup="listbox"
        css={css`
          font-family: ${theme.text.font.body};
          font-size: ${theme.text.size.body};
          color: ${theme.colors.text.primary};
          background-color: ${theme.colors.dropdown.button};
          border: none;
          border-radius: ${theme.layout.edges.small};
          display: flex;
          padding: ${theme.layout.spacing.small} ${theme.layout.spacing.medium};
          cursor: pointer;
        `}
        onClick={() => setIsVisible(!isVisible)}
        type="button"
      >
        {placeholder}
      </button>
      {isVisible && (
        <ul
          role="listbox"
          css={css`
            position: absolute;
            z-index: 2;
            background-color: ${theme.colors.dropdown.expand};
            list-style-type: none;
            width: 100%;
            text-align: center;
            padding: ${theme.layout.spacing.medium} 0;
            margin: 0;
            border-radius: ${theme.layout.edges.small};
          `}
        >
          {items.map(item => (
            <li
              role="option"
              aria-label={`Choose ${item}`}
              aria-selected={selectedItem === item}
              onClick={() => onSelectCallback(item)}
              onKeyPress={e => {
                if (e.key === 'Enter') {
                  onSelectCallback(item);
                }
              }}
              css={css`
                font-family: ${theme.text.font.body};
                font-size: ${theme.text.size.body};
                color: ${theme.colors.text.primary};
                cursor: pointer;
                &:hover {
                  background-color: ${theme.colors.dropdown.hover};
                }
              `}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
