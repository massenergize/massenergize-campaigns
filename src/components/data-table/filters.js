import React from 'react';

export const Filter = ({ column }) => {
  return (
    <div style={{ marginTop : 5 }}>
      {column.canFilter && column.render('Filter')}
    </div>
  );
};

export const DefaultColumnFilter = ({ column : { filterValue, setFilter, preFilteredRows : { length }, }, }) => {
  return (
    <input
      value={filterValue || ''}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
      placeholder={`search (${length}) ...`}
    />
  );
};

export const SelectColumnFilter = ({ column : { filterValue, setFilter, preFilteredRows, id }, }) => {
  const options = React.useMemo(() => {
    const options = new Set();

    preFilteredRows.forEach((row) => {
      options.add(row.values[id]);
    });

    return [ ...options.values() ];
  }, [ id, preFilteredRows ]);

  return (
    <select
      className={'form-control'}
      id='custom-select'
      value={filterValue}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
    >
      <option value=''>All</option>
      {
        options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))
      }
    </select>
  );
};
