import React, { useState, useEffect } from "react";

// Proptypes 
import PropTypes from "prop-types";

const TypingText = ({ message }) => {

  // Validate Component's Props 
  TypingText.propTypes = {
    message: PropTypes.string,
  };

  const content = message;

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [typingDone, setTypingDone] = useState(false);
  const [keepBlinking, setKeepBlinking] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setText(prevText => {
        if (prevText.length === content.length) {
          setTypingDone(true);
          return prevText;
        }
        return content.slice(0, prevText.length + 1);
      });
      setIndex(prevIndex => prevIndex + 1);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!keepBlinking) {
      setShowCursor(false);
      return;
    }
    const interval = setInterval(() => {
      setShowCursor(prevShowCursor => !prevShowCursor);
    }, 500);
    return () => clearInterval(interval);
  }, [keepBlinking]);

  useEffect(() => {
    if (typingDone) {
      setTimeout(() => {
        setKeepBlinking(false);
      }, 1500);
    }
  }, [typingDone]);
  
  return (
    <p className="typed-text">{text} {showCursor && <span className="cursorBlink">|</span>}</p>
  );
};

export default TypingText;