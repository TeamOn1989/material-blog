
import Post from '../Post/Post';
import './index.module.css';


function PostList({posts}) {
  return (
    <>
      {
        posts.map(item => 
          <Post key={item._id} {...item}/>
        )
      }
    </>    
  );
}

export default PostList;
