import bookshelfJs from 'bookshelf';
import knexJs from 'knex';
import knexConfig from './knexfile';

/**
 * Database connection.
 */
const knex = knexJs(knexConfig);
const bookshelf = bookshelfJs(knex);

bookshelf.plugin(['virtuals', 'pagination', 'visibility', 'bookshelf-camelcase']);

export default bookshelf;
