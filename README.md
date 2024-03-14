# FRAMER MOTION

## BASIC SYNTAX

`motion` components enable element to have animate attribute. No initial state needed here.

```tsx
import { motion } from "framer-motion";

export default function Test() {
  return (
    <motion.div
      animate={{
        scale: 1.5,
        fontSize: 20,
        rotateZ: 180,
        opacity: 0.2,
        x: 50,
        y: -100,
      }}
    >
      <h2>Title</h2>
    </motion.div>
  );
}
```

## INITIAL STATE | TRANSITION

- `initial` attribute allows us to define its initial state (from where the element begin the animation).
- `transition` attribute define the animation property, how the element behave throw the animation.

```tsx
export default function Test() {
  return (
    <motion.div
      initial={{ scale: 0.9, x: "-100vw" }}
      animate={{ scale: 1.1, x: 0 }}
      transition={{
        delay: 1.5,
        type: "spring", // "tween" | "inertia"
        duration: 0.25, // only on "tween", [second]
        stifness: 120, // only on "spring", [100]
      }}
    >
      <h2>Title</h2>
    </motion.div>
  );
}
```

## HOVER ANIMATION EFFECTS

```tsx
export default function Test() {
  return (
    <motion.button
      whileHover={{
        scale: 1.2,
        originX: 0,
        textShadow: "0px 0px 8px rgb(255,255,255)",
      }}
    >
      <h2>Click</h2>
    </motion.button>
  );
}
```

## VARIANTS OBJECT

It allows us to :

- Extract initial, animate, transition objects into a single object : Better and clean code.
- Propagate variants object into the DOM
- Create relationship between parent and child motions.

Attention : Variants are inherited by motions children, if you want an even cleaner code, define the same state object name on parent and child variants, so that you can remove initial and animate object inside the child (the animation always works even if they are different for the 2 motions)

```tsx
// Parent variants object
const containerVariants = {
  hidden: { x: "-100vw", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition={{
      type: "spring",
      mass: 0.4, damping: 8, // srping only
      when: "beforeChildren", // orchestration
      staggerChildren: 0.4, // delay for each children
    }}
  },
};

// Child variants object
const childVariants = {
  hidden:  { x: "100vw"},
  visible: {
    x:0,
    transition: {type: "spring", stifness: 110}}
}

export default function Test() {
  return (
    <motion.button
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2
        variants={childVariants}
      >
      Click
      </motion.h2>
    </motion.button>
  );
}
```

## KEYFRAMES

Multiple animations for one single motion element

```tsx
const buttonVariants = {
  hover: {
    scale: 1,
    boxShadow: "0 0 5px #fff",
    transition: { yoyo: Infinity }, // never stop, or Number
  },
};

export default function Test() {
  return (
    <motion.button variants={buttonVariants} whileHover="hover">
      Click
    </motion.button>
  );
}
```

## ANIMATE PRESENCE

Animate motion before removing it from the DOM

- animate svg : motion.svg and motion.path
- inside path : visible : { opacity: 1, pathLength: 1 }

```tsx
import { motion, AnimatePresence } from "framer-motion";

const titleVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.5 } },
  removed: { y: "-100vh", transition: { ease: "easeInOut" } },
};

export default function Test() {
  const [show, setShow] = useState<boolean>(true);

  function handleClick() {
    setShow((curr) => !curr);
  }

  function handleExitComplete() {
    setShow(false);
  }

  return (
    <>
      <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
        {show && (
          <motion.h2
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            exit="removed"
          >
            This is a title
          </motion.h2>
        )}
      </AnimatePresence>

      <button onClick={handleClick}>Show</button>
    </>
  );
}
```
