import { Fragment } from 'react';

import type { OrderBookEntries } from 'order-book-store';

import { TableRow } from './table-row';
import { TableEntry } from './table-entry';
import { DepthVisualizer } from './depth-visualizer';
import { Header } from './header';
import type { ColumnOrdering, DepthPosition } from './types';

type TableBodyProps = {
  orderBookEntries: OrderBookEntries;
  textColor: string;
  depthColor: string;
  largestTotal: number;
  depthPosition: DepthPosition;
  columnOrdering: ColumnOrdering;
  loading: boolean;
};

export const TableBody = ({
  orderBookEntries,
  textColor,
  depthColor,
  largestTotal,
  depthPosition,
  columnOrdering,
  loading,
}: TableBodyProps) => (
  <Fragment>
    <Header columnOrdering={columnOrdering} />
    {!loading && (
      <tbody>
        {orderBookEntries.map(([price, { size, total }]) => (
          <TableRow key={price}>
            {columnOrdering === 'PRICE_FIRST' ? (
              <Fragment>
                <TableEntry colour={textColor}>
                  {Number(price).toFixed(2)}
                </TableEntry>
                <TableEntry>{size}</TableEntry>
                <TableEntry>{total}</TableEntry>
              </Fragment>
            ) : (
              <Fragment>
                <TableEntry>{total}</TableEntry>
                <TableEntry>{size}</TableEntry>
                <TableEntry colour={textColor}>
                  {Number(price).toFixed(2)}
                </TableEntry>
              </Fragment>
            )}
            <DepthVisualizer
              percentage={(total / largestTotal) * 100}
              depthColor={depthColor}
              position={depthPosition}
            />
          </TableRow>
        ))}
      </tbody>
    )}
  </Fragment>
);
