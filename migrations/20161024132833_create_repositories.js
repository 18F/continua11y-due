'use strict';

exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('repositories', function (table) {
      table.increments();
      table.string('owner');
      table.string('name');
      table.timestamps();
      table.unique(['owner', 'name']);
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('repositories')
  ]);
};
