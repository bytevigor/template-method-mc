### 模板方法设计模式

大家好，欢迎回到波波微课。今天我们将探讨模板方法设计模式（Template Method Design Pattern），这是一种在软件开发中非常常见的行为设计模式。它的核心思想是定义一个算法的骨架，并允许子类在不改变算法结构的情况下重新定义算法的某些步骤。

#### 现实生活中的例子

想象一下，你是一位厨师，需要准备一顿饭。做饭的流程通常是固定的：准备食材、烹饪、上菜。然而，具体的细节可能会根据你做的菜而有所不同。例如，做汤和炒菜的准备步骤不同，但整体流程类似。模板方法设计模式就像这个烹饪过程，通过定义一个通用的流程，允许你在特定步骤上进行个性化处理。

#### 定义

简单来说，模板方法设计模式让你能够定义一个算法的通用结构，并将具体的实现延迟到子类中。根据维基百科的定义，模板方法是一种行为设计模式，它在基类中定义了一个算法的骨架，并允许子类在不改变算法结构的前提下重新定义算法的某些步骤。

#### 模板方法与策略模式的区别

模板方法和策略模式都是用于定义算法的设计模式，但它们的侧重点不同。模板方法模式强调的是在一个通用框架内定义算法的结构，然后让子类根据需要重写部分步骤。它关注的是一个固定的流程，而不是选择不同的算法。

而策略模式则更关注算法的可替换性。它允许你在运行时选择不同的算法实现，但不会影响算法的结构。换句话说，策略模式将算法的每个实现封装在独立的类中，并通过接口使它们可以互换使用，而模板方法则是通过继承来实现算法结构的部分定制。

#### 程序化示例

为了更好地理解这个模式，我们以一个简单的咖啡和茶的冲泡过程为例，用 Java 来实现模板方法设计模式。

首先，我们定义一个抽象的 `CaffeineBeverage` 类，这个类包含了冲泡饮料的模板方法 `prepareRecipe`。在这个方法中，我们定义了冲泡的通用步骤：烧水、冲泡、倒入杯中、加调料。具体的冲泡和加调料的步骤由子类来实现。

```java
abstract class CaffeineBeverage {
    final void prepareRecipe() {
        boilWater();
        brew();
        pourInCup();
        addCondiments();
    }

    abstract void brew();
    abstract void addCondiments();

    void boilWater() {
        System.out.println("Boiling water");
    }

    void pourInCup() {
        System.out.println("Pouring into cup");
    }
}
```

接下来，我们创建两个具体的子类 `Tea` 和 `Coffee`，它们分别实现了 `CaffeineBeverage` 类中的抽象方法。`Tea` 类实现了冲泡茶和加柠檬的步骤，而 `Coffee` 类则实现了冲泡咖啡和加糖加牛奶的步骤。

```java
class Tea extends CaffeineBeverage {
    void brew() {
        System.out.println("Steeping the tea");
    }

    void addCondiments() {
        System.out.println("Adding Lemon");
    }
}

class Coffee extends CaffeineBeverage {
    void brew() {
        System.out.println("Dripping Coffee through filter");
    }

    void addCondiments() {
        System.out.println("Adding Sugar and Milk");
    }
}
```

最后，我们在客户端代码中创建 `Tea` 和 `Coffee` 对象，并调用 `prepareRecipe` 方法来冲泡饮料。模板方法确保了冲泡流程的一致性，同时允许每种饮料自定义冲泡的细节。

```java
public class Main {
    public static void main(String[] args) {
        CaffeineBeverage tea = new Tea();
        tea.prepareRecipe();

        CaffeineBeverage coffee = new Coffee();
        coffee.prepareRecipe();
    }
}
```

#### 代码解析

在这个例子中，`CaffeineBeverage` 类定义了冲泡饮料的通用流程，并通过 `prepareRecipe` 方法将具体的步骤延迟到子类实现。`Tea` 和 `Coffee` 类分别实现了自己的冲泡方式和加调料方式，而这些具体实现并不会影响到整体流程。通过模板方法设计模式，我们可以确保算法结构的一致性，同时允许在具体实现上进行灵活的扩展。

#### 什么时候使用模板方法设计模式？

当你有一个通用的流程需要多个类共享，但某些步骤需要根据具体情况进行自定义时，可以考虑使用模板方法设计模式。这种模式特别适用于需要定义算法框架，但允许不同实现的场景。例如，数据处理流程、文档生成流程等都可以使用模板方法设计模式来实现。

#### 总结

模板方法设计模式通过定义一个算法的骨架，允许子类在不改变算法结构的前提下重新定义算法的某些步骤。它提高了代码的复用性和扩展性，使我们能够轻松地在不同场景下使用相同的算法框架。

感谢观看本期视频。如果你觉得这个视频对你有帮助，请点赞并订阅波波微课频道，确保不错过我们后续更多的精彩内容。我们下期视频见！