const DeleteButton_D = ({ color, onClick, children }) => {
  if (color)
    return (
      <>
        <br></br>
        <button className=""style={{ borderColor: color, color: "black" }} onClick={onClick}>
          {children}
        </button> 
      </>


    );

  return <button onClick={onClick}>{children}</button>;
};

export default DeleteButton_D;