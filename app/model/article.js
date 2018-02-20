'use strict';

module.exports = app => {
  const { DATE, STRING, TEXT } = app.Sequelize;

  const Article = app.model.define('article', {
    id: {
      allowNull: false,
      unique: true,
      type: STRING,
      primaryKey: true,
      comment: '主键',
    },
    title: {
      allowNull: false,
      type: STRING,
      comment: '文章标题',
    },
    content: {
      allowNull: false,
      type: TEXT,
      comment: '文章内容(md)',
    },
    created_at: {
      allowNull: false,
      type: DATE,
      comment: '创建日期',
    },
    updated_at: {
      allowNull: false,
      type: DATE,
      comment: '更新日期',
    },
  }, { timestamps: false });

  return Article;
};
