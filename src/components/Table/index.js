import React, { Fragment, useRef, memo } from 'react';
import { FixedSizeList as List } from "react-window";
import { FixedSizeGrid as Grid, areEqual } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import './styles.scss';

const FixedColumn = ({ columnIndex, rowIndex, data, style }) => {
    return (
        <div className="fixed-column" style={{ ...style }}>
            {rowIndex}
        </div>
        // {/* <div style={{ display: 'flex', alignItems: 'center', padding: '0 1rem', ...style }} > {data[ rowIndex ].name}</ div> */ }

    )
}

const ColumnLabel = ({ columnIndex, rowIndex, data, style }) => {
    return <div className='column-label' style={{ ...style }}>
        {data[ columnIndex ]}
    </div>
}

const Cell = memo(({ columnIndex, rowIndex, data, style }) => {
    let values = Object.keys(data[ 0 ])[ columnIndex ]
    let row = data[ rowIndex ]
    console.log(row[ values ], values);

    return (
        <div className='cell' style={{ ...style }}>{data[ rowIndex ][ values ]}</div>
    )
}, areEqual)

const MultiGrid = ({ height, width, users }) => {
    const rowRef = useRef()
    const gridRef = useRef()
    const headerRef = useRef()
    const onScrollNative = event => {
        headerRef.current.scrollTo({ scrollLeft: event.scrollLeft });
        rowRef.current.scrollTo({
            scrollTop: event.scrollTop
        });
    };

    return (
        <Fragment>
            <Grid
                itemData={Object.keys(users[ 0 ])}
                columnCount={Object.values(users[ 0 ]).length}
                rowCount={1}
                columnWidth={250}
                rowHeight={35}
                height={35}
                width={width - 55}
                overscanColumnCount={1}
                overscanRowCount={1}
                ref={headerRef}
                style={{
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    borderBottom: `1px solid #d4d4d4`,
                    borderRight: `1px solid #d4d4d4`,
                    position: 'absolute',
                    left: 50
                }}
            >
                {ColumnLabel}
            </Grid>
            <Grid
                className="Grid"
                itemData={users}
                columnCount={1}
                columnWidth={50}
                height={height}
                overscanColumnCount={1}
                overscanRowCount={1}
                ref={rowRef}
                rowCount={Object.keys(users).length}
                rowHeight={35}
                style={{
                    overflow: 'hidden',
                    background: 'white',
                    borderRight: `1px solid #d4d4d4`,
                    // borderTop: `1px solid #d4d4d4`,
                    position: 'absolute', top: 35,
                }}
                width={50}
            >
                {FixedColumn}
            </Grid>
            <Grid
                className="Grid"
                columnCount={Object.keys(users[ 0 ]).length}
                itemData={users}
                columnWidth={250}
                height={height}
                onScroll={onScrollNative}
                outerRef={gridRef}
                overscanColumnCount={1}
                overscanRowCount={1}
                rowCount={Object.keys(users).length}
                rowHeight={35}
                style={{ position: 'absolute', top: 35, left: 50 }}
                width={width - 50}
            >
                {Cell}
            </Grid>
        </Fragment>
    )
}

const VirtualizedTable = ({ users }) => {
    return (
        <AutoSizer>
            {({ width, height }) => (
                <MultiGrid height={height} width={width} users={users} />
            )}
        </AutoSizer>
    )
}

export default VirtualizedTable