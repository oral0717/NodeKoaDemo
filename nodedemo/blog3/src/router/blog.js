const handlerBlogRouter = (req, res) => {
  if (req.method === 'GET' && req.path === '/api/blog/list') {
    return {
      msg: '列表接口'
    }
  }
  if (req.method === 'GET' && req.path === '/api/blog/detail') {
    return {
      msg: '详情接口'
    }
  }
  if (req.method === 'POST' && req.path === '/api/blog/add') {
    return {
      msg: '增加接口'
    }
  }
  if (req.method === 'POST' && req.path === '/api/blog/update') {
    return {
      msg: '更新接口'
    }
  }
  if (req.method === 'POST' && req.path === '/api/blog/delete') {
    return {
      msg: '删除接口'
    }
  }
}

module.exports = handlerBlogRouter