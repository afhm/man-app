function loadTables(orm) {
  orm.defineTable({
    name: 'users',
    props: {
      key: 'base_user_id',
      timestamps: true
    },
    scopes: {
      whereNotDeleted() {
        return this.where('is_deleted', false);
      }
    }
  });
}

module.exports = loadTables;
