# OOP & Static — Quick Revision ⚡

## Class vs Object
- **Class** — blueprint (design)
- **Object** — us blueprint se bana real instance (memory me)

```java
Car c1 = new Car();  // c1 = reference, new Car() = object
```

## Constructor
- Naam class jaisa, **no return type** (void bhi nahi)
- Khud koi constructor nahi likha → default constructor milta hai
- Ek bhi constructor likh diya → default **nahi** milega (exam point!)

```java
class Car {
    Car() { }                 // no-arg
    Car(String model) { }     // parameterized (overloading)
}
```

## this keyword
```java
class Car {
    String model;
    Car(String model) {
        this.model = model;  // instance variable = parameter
    }
}
```
- `this` = current object ka reference
- `this()` = same class ka doosra constructor call (first line pe hona chahiye)

## Encapsulation
Private fields + public getters/setters:
```java
private int age;
public void setAge(int age) {
    if (age > 0) this.age = age;  // validation possible
}
```

## Static
| | static | instance |
|---|---|---|
| Kiska hai | class ka | object ka |
| Copies | ek hi | har object ki alag |
| Access | ClassName.x | obj.x |

**Rules:**
- static method me `this` use nahi kar sakte
- static method direct instance variable access nahi kar sakti
- static block class load hote hi chalta hai (main se bhi pehle)

```java
class Counter {
    static int count = 0;   // sab objects share karte hain
    Counter() { count++; }
}
```
