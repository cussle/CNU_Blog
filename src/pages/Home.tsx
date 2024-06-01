import PostListItem from '../components/PostListItem';
import NoPostList from '../components/NoPostList';
import useGetPostList from '../queries/useGetPostList.ts';

const Home = () => {
  // const [postList, setPostList] = useState<IResponsePostList>([]);
  const { data: postList = [], isError, isLoading } = useGetPostList();

  if (isLoading) {
    return <div>... 불러오는 중 ...</div>;
  }

  // const fetchPostList = async () => {
  //   const { data } = await getPostList();
  //   setPostList(data);
  // };

  // useEffect(() => {
  //   fetchPostList();
  // }, []);

  if (postList.length === 0 || isError) {
    return <NoPostList />;
  }

  return (
    // <div>
    //   {postList.map(item => (
    //     <PostListItem key={item.id} id={`${item.id}`} title={item.title} contents={item.contents} tag={item.tag} />
    //   ))}
    // </div>
    <div>
      {postList.map(item => (
        <PostListItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Home;
