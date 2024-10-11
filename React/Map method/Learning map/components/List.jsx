const List=({list})=>{
  return (
    <>
    <ol>
      {list.map(name=><li>{name}</li>)}
    </ol>
    </>
  );
};
export default List;