const FinishButton = ({ color, onClick, children }) => {
  if (color)
    return (
      <> 
        <button className=""style={{ borderColor: "green", color: "black" }} onClick={onClick}>
          {children}
        </button> 
      </>


    );

  return <button onClick={onClick}>{children}</button>;
};

export default FinishButton;