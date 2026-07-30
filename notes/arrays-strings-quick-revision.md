# Arrays & Strings — Quick Revision ⚡

## Array basics
```java
int[] arr = new int[5];          // default 0 se filled
int[] nums = {10, 20, 30};
int[][] grid = new int[3][4];    // 2D
```
- Size fix hota hai, baad me change nahi
- Index 0 se start; galat index → `ArrayIndexOutOfBoundsException`
- `arr.length` (property, no brackets) vs `str.length()` (method) — exam favourite!

## Array traversal
```java
for (int i = 0; i < arr.length; i++) { ... }  // index chahiye to
for (int x : arr) { ... }                     // sirf values chahiye to
```

## String immutability
```java
String s = "hello";
s.toUpperCase();       // naya string banta hai
System.out.println(s); // "hello" hi rahega!
s = s.toUpperCase();   // assign karna zaroori
```

## String pool
```java
String a = "hi";
String b = "hi";
String c = new String("hi");
a == b        // true  (same pool object)
a == c        // false (new heap object)
a.equals(c)   // true  (content same)
```
**Rule: content compare karna ho to hamesha `.equals()`.**

## Common methods
| Method | Kaam |
|---|---|
| `charAt(i)` | i-th character |
| `substring(a, b)` | index a se b-1 tak |
| `indexOf("x")` | pehli position (-1 if absent) |
| `trim()` | aage-peeche ke spaces hatao |
| `split(" ")` | array me todo |

## String vs StringBuilder
Loop me concatenation karna ho to **StringBuilder** use karo — String har baar naya object banata hai (slow).
