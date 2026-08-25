# Methods — Quick Revision
A brief overview of methods in Java, covering structure, overloading, pass by value, recursion, and exam tricky points ⚡

## Method structure
```java
returnType methodName(parameters) {
    // body
    return value; // agar void nahi hai
}
```

## Method Overloading
Same naam, **different parameter list** (count, type, ya order):
```java
int add(int a, int b)
double add(double a, double b)
int add(int a, int b, int c)
```
❌ Sirf return type change karna overloading NahI hai — compile error.

## Pass by Value (important!)
Java me **hamesha pass by value** hota hai:
- Primitives — copy jaati hai, original change nahi hota
- Objects — reference ki *copy* jaati hai. Object ke andar ka data change ho sakta hai, par reference reassign karne se original pe farak nahi padta

```java
void change(int x) { x = 100; }        // original int same rahega
void fill(int[] arr) { arr[0] = 100; } // original array change hoga!
```

## Recursion basics
```java
int fact(int n) {
    if (n <= 1) return 1;   // base case (zaroori!)
    return n * fact(n - 1); // recursive case
}
```
Base case bhool gaye → `StackOverflowError`.

## Exam tricky points
- `return` ke baad ka code unreachable — compile error
- void method me `return;` (bina value) allowed hai
- Varargs: `int sum(int... nums)` — hamesha last parameter hona chahiye
