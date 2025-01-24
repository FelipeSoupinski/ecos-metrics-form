import { useEffect, useState } from "react";

const Warning = ({ message = "", show = false, time = 3000 }) => {
  const [isVisible, setIsVisible] = useState(show);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, time);
      return () => clearTimeout(timer);
    }
  }, [show, time]);

  if (!isVisible) return null;

  return (
    <div
      className="alert alert-warning"
      role="alert"
      onClick={() => setIsVisible(false)}
    >
      <div className="close-alert">&times;</div>
      {message}
    </div>
  );
};

export default Warning;
