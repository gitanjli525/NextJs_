function userProfilepage(props) {
  return <h1>{props.username}</h1>;
}

export default userProfilepage;

export async function getServerSideProps(context) {
  const { params, req, res } = context;

//   console.log("Server side code ");

  return {
    props: {
      username: "Max",
    },
  };
}
