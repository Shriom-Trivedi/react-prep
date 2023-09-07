import { useRef, useEffect } from 'react';

const useWhyDidYouUpdate = ( name, props ) => {
  const prevProps = useRef();
  useEffect(() => {
    if (prevProps.current) {
      // take all keys
      const keys = Object.keys({ ...prevProps.current, ...props });
      const whyUpdated = {};
      keys.forEach((key) => {
        if (
          typeof prevProps.current[key] === 'object' &&
          typeof props[key] === 'object'
        ) {
          if (
            JSON.stringify(prevProps.current[key]) !==
            JSON.stringify(props[key])
          ) {
            whyUpdated[key] = {
              from: prevProps.current[key],
              to: props[key],
            };
          }
        } else {
          if (prevProps.current[key] !== props[key]) {
            whyUpdated[key] = {
              from: prevProps.current[key],
              to: props[key],
            };
          }
        }

        if (Object.keys(whyUpdated).length) {
          console.log('This is why re-render happened:', whyUpdated);
        }
      });
    }
    prevProps.current = props;
  }, [name, props]);
};

export default useWhyDidYouUpdate;
