const AddButton = ({ color, onClick, children }) => {
  if (color)
    return (
      <>
        <br></br>
        <button className=""style={{ background:"teal", borderColor:"teal",color: "white" }} onClick={onClick}>
          {children}
        </button> 
      </>


    );

  return <button onClick={onClick}>{children}</button>;
};

export default AddButton;