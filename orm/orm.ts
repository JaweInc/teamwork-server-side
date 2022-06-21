import connect from '../utils/DbConnect';

const db = {
    create: async (tableName: string, entities: any) => await connect.query(
        `
            INSERT INTO ${tableName}(${Object.keys(entities).join(', ')})
            VALUES('${Object.values(entities).join('\', \'')}') RETURNING *
        `
    ),

    selectAll: async (tableName: any, conditionalStatement: any = {}) => await connect.query(
        `
            SELECT *
            FROM ${tableName}
            ${Object
                .entries(conditionalStatement)
                .reduce(( cumm, arr, i, array ) => (
                    `${!i ? 'WHERE ' : ''}` + cumm + `${ arr[0]} = '${arr[1]}' ${ i < array.length - 1 ?  'AND' : '' } `
                ), '')
            }
        `
    ),

    selectColumns: async (tableName: any, columns: string[], conditionalStatement: any = {}) => (
        `
            SELECT '${ columns.join(', ') }'
            FROM ${tableName}
            ${Object
                .entries(conditionalStatement)
                .reduce(( cumm, arr, i, array ) => (
                    `${!i ? 'WHERE ' : ''}` + cumm + `${ arr[0]} = '${arr[1]}' ${ i < array.length - 1 ?  'AND ' : '' } `
                ), '')
            }
        `
    ),
};

export default db;
