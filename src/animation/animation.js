export const titleAnim = {
    hidden: { y: 200 },
    show: {
      y: 0,
      transition: { duration: 0.75, ease: "easeOut" },
    },
  };

  export const pageAnimation = {
    hidden: {
      opacity: 0,
      y: 300,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  export const welcomeAnimation ={
    hidden: {
        opacity: 0,
        
      },
      show: {
        opacity: 1,
     
        transition: {
          duration: 0.5,
          when: "beforeChildren",
          staggerChildren: 0.50,
        },
      },
      exit: {
        opacity: 0,
        transition: {
          duration: 0.5,
        },
      },
  }


  export const photoAnim = {
    hidden: { scale: 1.5, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 0.75,
      },
    },
  };

  export const fade = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { ease: "easeOut", duration: 0.75 },
    },
  };
  