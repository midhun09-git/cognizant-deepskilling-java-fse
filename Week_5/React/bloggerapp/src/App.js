import BookDetails from './Components/BookDetails';
import BlogDetails from './Components/BlogDetails';
import CourseDetails from './Components/CourseDetails';

function App() {
  const showBooks = true;
  const showBlogs = true;
  const showCourses = true;

  return (
    <div style={{ display: 'flex', gap: '40px', margin: '20px' }}>
      {showBooks && <BookDetails />}

      {showBlogs ? <BlogDetails /> : null}

      {showCourses === true && <CourseDetails />}
    </div>
  );
}

export default App;