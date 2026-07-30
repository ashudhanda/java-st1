# Control Flow — Quick Revision ⚡

## if / else-if ladder
```java
if (marks >= 90) grade = "A";
else if (marks >= 75) grade = "B";
else grade = "C";
```
Upar se neeche check hota hai — jo pehli condition true, wahi block chalega.

## switch (fall-through yaad rakho!)
```java
switch (day) {
    case 1: System.out.println("Mon"); break;
    case 2: System.out.println("Tue"); break;
    default: System.out.println("Invalid");
}
```
- `break` nahi lagaya to agla case bhi chal jayega (**fall-through**) — exam favourite!
- switch works with: int, char, String, enum (not long/float/double)

## Loops comparison
| Loop | Kab use karein | Min runs |
|---|---|---|
| for | Count pata ho | 0 |
| while | Condition-based | 0 |
| do-while | Kam se kam ek baar chalana ho | **1** |

## break vs continue
- `break` — loop ko poora **band** kar deta hai
- `continue` — sirf current iteration **skip** karta hai

## Tricky exam point
```java
for (int i = 0; i < 5; i++);   // <-- yahan ; hai!
System.out.println(i);          // compile error (i out of scope)
```
Loop ke baad `;` lagane se loop ki body empty ho jaati hai.
