# Intro to Java — Quick Revision ⚡

## JVM / JRE / JDK
- **JVM** — bytecode run karta hai (platform-specific)
- **JRE** = JVM + libraries — program *run* karne ke liye
- **JDK** = JRE + compiler (javac) — program *banane* ke liye

## Compilation flow
```
Hello.java → (javac) → Hello.class (bytecode) → (JVM) → output
```
Isi wajah se Java **platform independent** hai — bytecode kahin bhi chalta hai jahan JVM ho.

## main method
```java
public static void main(String[] args)
```
- `public` — JVM ko bahar se call karna hai
- `static` — object banaye bina call ho sake
- `void` — kuch return nahi karta
- `String[] args` — command line arguments

## Primitive data types
| Type | Size | Example |
|---|---|---|
| byte | 1 byte | 100 |
| short | 2 bytes | 30000 |
| int | 4 bytes | 100000 |
| long | 8 bytes | 100000L |
| float | 4 bytes | 3.14f |
| double | 8 bytes | 3.14 |
| char | 2 bytes | 'A' |
| boolean | JVM-dependent | true |

## Type casting
- **Widening (implicit):** int → long → float → double (safe, auto)
- **Narrowing (explicit):** cast likhna padta hai: `int x = (int) 3.9; // 3`
