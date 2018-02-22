'use strict';

const marked = require('marked');
const moment = require('moment');
const Feed = require('feed');
const fs = require('fs');
const YAML = require('yamljs');

function loadYAMLFile(file) {
  return YAML.parse(fs.readFileSync(file).toString());
}

const _config = loadYAMLFile('config.yml');

module.exports = {
  // Markdown 转 HTML
  md2html(md) {
    return marked(md);
  },

  // 格式化时间
  beautyTime(time) {
    moment.locale('zh-cn');
    return moment(time, 'YYYY-MM-DD HH:mm:ss').fromNow();
  },

  // 生成 Feed
  generationFeed(articles) {
    const feed = new Feed({
      title: _config._feed.title,
      description: _config._feed.description,
      link: _config._feed.link,
      author: _config._feed.author
    });

    articles.forEach(item => {
      feed.addItem({
        title:  item.title,
        link: _config._feed.link + '/articles/post/' + item.id,
        date: item.updated_at
      });
    })

    return feed.json1();
  }
};
