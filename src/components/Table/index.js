import React, { Fragment, useRef, memo } from 'react';
import { FixedSizeList as List } from "react-window";
import { FixedSizeGrid as Grid, areEqual } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import './styles.scss';

const FixedColumn = ({ columnIndex, rowIndex, data, style }) => {
    return (
        <div style={style}>
            {rowIndex}
        </div>
        // {/* <div style={{ ...style }} > {data[ rowIndex ].name}</ div> */ }

    )
}

const ColumnLabel = ({ columnIndex, rowIndex, data, style }) => {
    return <div style={style}>
        {data[ columnIndex ]}
    </div>
}

const Cell = memo(({ columnIndex, rowIndex, data, style }) => {
    let values = Object.keys(data[ 0 ])[ columnIndex ]
    let row = data[ rowIndex ]
    // if (values === 'name') {
    //     return (<div width={0} height={0}></div>);
    // }
    console.log(row[ values ], values);

    return (
        <div style={{ overflow: "hidden", ...style }}>{data[ rowIndex ][ values ]}</div>
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
                columnWidth={200}
                rowHeight={40}
                height={40}
                width={width - 50}
                overscanColumnCount={1}
                overscanRowCount={1}
                ref={headerRef}
                style={{
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    borderBottom: `1px solid gray`,
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
                rowHeight={40}
                style={{ overflow: 'hidden', background: 'white' }}
                width={50}
            >
                {FixedColumn}
            </Grid>
            <Grid
                className="Grid"
                columnCount={Object.keys(users[ 0 ]).length}
                itemData={users}
                columnWidth={200}
                height={height}
                onScroll={onScrollNative}
                outerRef={gridRef}
                overscanColumnCount={1}
                overscanRowCount={1}
                rowCount={Object.keys(users).length}
                rowHeight={40}
                style={{ position: 'absolute', left: 100, top: 40 }}
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