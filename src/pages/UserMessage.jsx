import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function UserMessage({ userMessage }) {
  const [showComponent, setShowComponent] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setShowComponent(false);
    }, 10000);
  }, []);

  return (
    <div>
      {showComponent && (
        <h1 className="mt-10 h-12 text-2xl blink">{userMessage}</h1>
      )}
      {!showComponent && navigate("/")}
    </div>
  );
}

export default UserMessage;
