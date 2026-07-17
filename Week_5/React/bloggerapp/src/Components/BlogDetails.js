function BlogDetails() {
  const blogs = [
    {
      id: 1,
      title: 'React Learning',
      author: 'Stephen Biz'
    },
    {
      id: 2,
      title: 'Installation',
      author: 'Schewzdenier'
    }
  ];

  return (
    <div>
      <h1>Blog Details</h1>

      {blogs.map((blog) => (
        <div key={blog.id}>
          <h3>{blog.title}</h3>
          <h4>{blog.author}</h4>
        </div>
      ))}
    </div>
  );
}

export default BlogDetails;