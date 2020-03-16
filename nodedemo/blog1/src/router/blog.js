const handleBlogRouter = (req, res)=>{
  const { method,path } = req

  if (method === 'GET' && path === '/api/blog/list'){
    return {
      msg: '获取博客列表'
    }
  }
  if (method === 'GET' && path === '/api/blog/detail'){
    return {
      msg: '获取博客内容'
    }
  }
  if (method === 'POST' && path === '/api/blog/new'){
    return {
      msg: '新增一篇博客'
    }
  }
  if (method === 'POST' && path === '/api/blog/update'){
    return {
      msg: '更新一篇博客'
    }
  }
  if (method === 'POST' && path === '/api/blog/del'){
    return {
      msg: '删除一篇博客'
    }
  }
}

module.exports = handleBlogRouter