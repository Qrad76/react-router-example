import queryString from "query-string";

export default function About(props) {
  const serchParams = props.location.search;
  const query = queryString.parse(serchParams);
  return (
    <div>
      <h2>About 페이지 입니다.</h2>
      {query.name && <p>name 은 {query.name} 입니다</p>}
    </div>
  );
}
