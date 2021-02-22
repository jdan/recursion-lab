# Linking Some Lists

For our first foray into the world of recursion, we'll take a look at an artifact known as the `linked list` (more specifically, the "singly linked linear list" - a bit of a mouthful). When one imagines a `list` of elements (perhaps the words "array" or "vector" come to mind), an image resembling the following may appear...

```
+---+---+---+---+
| 1 | 2 | 3 | 4 |
+---+---+---+---+
```

...showing a sequence of some elements (in this case, the numbers 1 through 4).

A `linked list` - in contrast - is not built as a conhesive block of values, but as many individual "items."

```
+---+---+   +---+---+   +---+---+   +---+---+   +------+
| 1 | --+-> | 2 | --+-> | 3 | --+-> | 4 | --+-> | NULL |
+---+---+   +---+---+   +---+---+   +---+---+   +------+
```

These "items" take one of two forms:

```js
/** The "null" linked list
 *    +------+
 *    | NULL |
 *    +------+
 */
const emptyList = null;

/** A list "node"
 *    +----+---+
 *    | 42 | --+-> ...
 *    +----+---+
 */
const fortyTwoList = {
  head: 42,
  tail: TODO, // ???
};
```

The "null" list is just that - `null`. This is our "empty list" or a list with nothing in it.

The "node" example is a bit different: rather than a single primitive value like `42` or `"blah"`, we use a JavaScript object with two fields: (1) a `head` representing the value of the node and (2) a `tail` representing... what exactly?

If we take a look back at our original illustration:

```
+---+---+   +---+---+   +---+---+   +---+---+   +------+
| 1 | --+-> | 2 | --+-> | 3 | --+-> | 4 | --+-> | NULL |
+---+---+   +---+---+   +---+---+   +---+---+   +------+
```

We see that the first block (the one with a `1` in it) contains a value and an arrow:

```
 (1) a value
+---+---+
| 1 | --+---->
+---+---+
     (2) an arrow
```

What is that arrow pointing to?

```
+---+---+   +---+---+   +---+---+   +------+
| 2 | --+-> | 3 | --+-> | 4 | --+-> | NULL |
+---+---+   +---+---+   +---+---+   +------+
```

A `linked list`! This time, one with values 2, 3, and 4. What might this look like in code?

```js
const twoThreeFour = {
  head: 2,
  tail: {
    head: 3,
    tail: {
      head: 4,
      tail: emptyList, // `const emptyList = null` from earlier
    },
  },
};

const oneThruFour = {
  head: 1,
  tail: twoThreeFour,
};
```

To recap: a linked list can take one of two forms. (1) a `null` and (2) a `node` containing a value (`head`) and a linked list (`tail`). Because a linked list (specifically, a `node`) contains a linked list, this data structure is `recursive`.

Since our lists are JavaScript objects, we can access the values inside like so:

```js
console.log(oneThruFour.head); // => 1
console.log(oneThruFour.tail.tail.head); // => 3
console.log(oneThruFour.tail.tail.tail.tail); // => null, phew
```

## Your task

Over the next few lessons we'll write a few functions to build up and break down these linked lists and - you guessed it - we'll need to use recursion to do so. For now, let's start simple.

Your program should export a function called `second` which, given a linked list, returns the second item in that list from the front.

If the list is empty, you should return `null`. If the list only contains a single element, you should return `null` as well.

```js
exports.second = (ls) => {
  // your solution goes here
};
```

---
